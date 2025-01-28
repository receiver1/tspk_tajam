
const previous = document.getElementById("comments__user__previous");
const next = document.getElementById("comments__user__next");

let selected_user = 0;
const users = document.querySelectorAll("div[id*='comments__user__']");
const users_count = users.length;

let comments_list =
[
    "first",
    "second",
    "third",
    "This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    "fifth",
    "sixth",
    "seventh"
];

for (let i = 1; i < users_count; i++)
{
    if (users[i].classList.contains("active"))
    {
        selected_user = i + 1;
    }
}

next.addEventListener("click", (event) =>
{
    if (selected_user < users_count)
    {
        document.getElementById("comments__user__" + selected_user).classList.remove("active");
        selected_user++;
        document.getElementById("comments__user__" + selected_user).classList.add("active");
        document.getElementById("comments__quote").innerHTML = comments_list[selected_user - 1];
    }
});

previous.addEventListener("click", (event) =>
{
    if (selected_user > 1)
    {
        document.getElementById("comments__user__" + selected_user).classList.remove("active");
        selected_user--;
        document.getElementById("comments__user__" + selected_user).classList.add("active");
        document.getElementById("comments__quote").innerHTML = comments_list[selected_user - 1];
    }
});