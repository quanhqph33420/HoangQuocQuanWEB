let index = 0
const btn_next = document.getElementById("next")
const btn_pre = document.getElementById("pre")
const imgs = document.querySelector('.imgs')
const list_img = document.querySelectorAll(".imgs img")
const list_dots = document.querySelectorAll('.dots li')
let img_wi = list_img[0].offsetWidth

list_dots[index].style.color = 'white'
btn_next.addEventListener("click", () => {
    list_dots[index].style.color = 'black'
    index++
    if (index == list_img.length) {
        index = 0
    }
    list_dots[index].style.color = 'white'
    imgs.style.transform = `translateX(${-100 * index}%)`
})
btn_pre.addEventListener("click", () => {
    list_dots[index].style.color = 'black'
    index--
    if (index == -1) {
        index = list_img.length - 1
    }
    list_dots[index].style.color = 'white'
    imgs.style.transform = `translateX(${-100 * index}%)`
})

setInterval(() => {
    list_dots[index].style.color = 'black'
    index++
    if (index == list_img.length) {
        index = 0
    }
    list_dots[index].style.color = 'white'
    imgs.style.transform = `translateX(${-100 * index}%)`
}, 3000);

function changeMenu() {
    var container = document.querySelector('.container');
    var menu = document.querySelector('.menu');

    container.addEventListener('click', function () {
        container.classList.toggle('change');
        menu.classList.toggle('responsive');
    });
}
changeMenu();