var menus = $('.menus')[0];
console.log(menus);
menus.onmouseenter = function () {
    menus.style.opacity = 1
}
var main = $('.main')[0];
console.log(main);
main.onmouseenter = function () {
    menus.style.opacity = 0.1
}
main.onmouseleave = function () {
    menus.style.opacity = 1
}


