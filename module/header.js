var header = $('.header')[0]
var bg = new Image();
bg.src = "../blog/src/imgs/1.jpg";
console.log(bg.width, bg.height);
// header.style.height = bg.width / document.body.clientWidth * bg.height/5 + 'px';
header.style.height = document.documentElement.clientHeight * 0.3 + 'px';
var timer1 = null


header.onmouseenter = function (e) {
    header.style.transition = ' all 0.3s';
    header.style.backgroundPositionX = -0.2 * e.pageX + 'px';
    clearTimeout(timer1);
    timer1 = null;
    timer1 = setTimeout(function () {
        header.onmousemove = function (e) {
            header.style.transition = 'all 0s';
            header.style.backgroundPositionX = -0.2 * e.pageX + 'px';
        }
    }, 300)

}
header.onmouseleave = function () {

    header.style.transition = ' all 0.3s';
    clearTimeout(timer1);
    header.onmousemove = null;
    timer1 = null;
    header.style.backgroundPositionX = 'center';

}
window.onresize = function () {
    header.style.backgroundPositionX = 'center';
    // console.log(getComputedStyle(header.children[0]).fontSize);
    console.log(getComputedStyle(header.children[0]).fontSize);
}
