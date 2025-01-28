
var animation_state = false;

animate_value = function(element, begin, end, duration) 
{
    let begin_timestamp = null;
    const step = (timestamp) => 
    {
        if (!begin_timestamp) 
        {
            begin_timestamp = timestamp;
        }

        const progress = Math.min((timestamp - begin_timestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - begin) + begin);
        
        if (progress < 1) 
        {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

animate_opacity = function(element, begin, end, duration)
{
    let begin_timestamp = null;
    const step = (timestamp) => 
    {
        if (!begin_timestamp) 
        {
            begin_timestamp = timestamp;
        }

        const progress = Math.min((timestamp - begin_timestamp) / duration, 1);
        element.style.opacity = progress * (end - begin) + begin;
        
        if (progress < 1) 
        {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

handle_scroll = function()
{
    if (!animation_state)
    {
        let element = document.getElementById('video__block__views');
        let current_top = scrollY;

        if (current_top + window.innerHeight / 1.2 > element.offsetTop 
            && current_top * 1.2 < element.offsetTop + element.offsetHeight)
        {
            animate_value(element, 0, 1488, 1000);
            animation_state = true;
        }
    }
}

test_modal = function()
{
    input_handler = function(input)
    {
        open_text_modal('Модальное окно с результатом', input, 'Закрыть');
    }
    open_input_modal('Тестовое модальное окно', 'Введите текст', 'Подтвердить', 'Закрыть', input_handler);
}

window.addEventListener("scroll", (event) =>
{
    handle_scroll();
});

window.addEventListener("load", (event) =>
{
    handle_scroll();
});