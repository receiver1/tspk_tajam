
var modal_state = false;
var modal_handler1 = null;
var modal_handler2 = null;
var modal_animation_time = 500;
var modal_animation_state = false;

open_text_modal = function(title, text, button1, button2, handler1, handler2)
{
    let element = document.getElementById('modals__block');
    
    if (modal_state == true)
    {
        close_modal(true);
    }

    element.innerHTML = `
    <div class="modal__background">
        <div class="modal__window">
            <h2 class="modal__title">` + title + `</h2>
            <span class="heading-line"></span>
            <div class="modal__main">
                <p>` + text + `</p>
            </div>
            <div class="modal__footer">
                <a href="#accept__modal" class="btn-outline">` + button1 + `</a>`
                + (button2 == null ? `` : `<a href="#cancel__modal" class="btn-outline">` + button2 + `</a>`) +
            `</div>
        </div>
    </div>`;

    animate_opacity(element, 0.0, 1.0, modal_animation_time);
    let interval = setInterval(function()
    {
        modal_state = true;
        modal_handler1 = handler1;
        modal_handler2 = handler2;
        clearInterval(interval);
    }, modal_animation_time);
}

open_input_modal = function(title, placeholder, button1, button2, handler1, handler2)
{
    let element = document.getElementById('modals__block');
    
    if (modal_state == true)
    {
        close_modal(true);
    }

    element.innerHTML = `
    <div class="modal__background">
        <div class="modal__window">
            <h2 class="modal__title">` + title + `</h2>
            <span class="heading-line"></span>
            <div class="modal__main">
                <input type="text" placeholder="` + placeholder + `" class="my-1" id="modal__input">
            </div>
            <div class="modal__footer">
                <a href="#accept__modal" class="btn-outline">` + button1 + `</a>`
                + (button2 == null ? `` : `<a href="#cancel__modal" class="btn-outline">` + button2 + `</a>`) +
            `</div>
        </div>
    </div>`;

    animate_opacity(element, 0.0, 1.0, modal_animation_time);
    let interval = setInterval(function()
    {
        modal_state = true;
        modal_handler1 = handler1;
        modal_handler2 = handler2;
        clearInterval(interval);
    }, modal_animation_time);
}

close_modal = function(force)
{
    if (!modal_animation_state)
    {
        let element = document.getElementById('modals__block');
        const close_modal_in = function()
        {
            element.innerHTML = '';
            modal_state = false;
            modal_handler = null;
        }
        if (!force)
        {
            modal_animation_state = true;
            animate_opacity(element, 1.0, 0.0, modal_animation_time);
            let interval = setInterval(function()
            {
                close_modal_in();
                clearInterval(interval);
                modal_animation_state = false;
            }, modal_animation_time);
        }
        else
        {
            close_modal_in();
        }
    }
}

window.addEventListener("hashchange", (event) =>
{
    let hash = window.location.hash;
    if (modal_state == true)
    {
        if (hash == '#accept__modal')
        {
            if (modal_handler1 != null)
            {
                modal_handler1(document.getElementById('modal__input').value);
            }
            else
            {
                close_modal();
            }
            window.location.hash = '0';
        }
        else if (hash == '#cancel__modal')
        {
            if (modal_handler2 != null)
            {
                modal_handler2(document.getElementById('modal__input').value);
            }
            else
            {
                close_modal();
            }
            window.location.hash = '0';
        }
    }
});