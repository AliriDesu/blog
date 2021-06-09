var menus = $(".menu");

for (var i = 0; i < menus.length; i++) {
    menus[i].onmouseenter = function (e) {
        e.target.children[0].style.opacity = '0';
    }
    menus[i].onmouseleave = function (e) {
        e.target.children[0].style.opacity = '1';
    }
}