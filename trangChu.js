let index = 0
const btn_next = document.getElementById("next")
const btn_pre = document.getElementById("pre")
const imgs = document.querySelector('.imgs')
const list_img = document.querySelectorAll(".imgs img")
const list_dots = document.querySelectorAll('.dots li')

const col1_downtiem = document.querySelector(".imgCol1 #downtime")
const col2_downtiem = document.querySelector(".imgCol2 #downtime")
const col3_downtiem = document.querySelector(".imgCol3 #downtime")
const col4_downtiem = document.querySelector(".imgCol4 #downtime")

downtime(col1_downtiem,3 , 19, 0)
downtime(col2_downtiem,4 , 26, 0)
downtime(col3_downtiem,1 , 20, 0)
downtime(col4_downtiem,2 , 10, 0)

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
function downtime(ele, h, m, s) {
    setInterval(() => {
        s--;
        if (s == -1) {
            s = 60;
            m--;
            if (m == 60) {
                m = 59;
            }

            if (m == -1) {
                m = 59;
                h--;
                if (h == 24) {
                    h = 23;
                }
                if (h == -1) {
                    h = 23;
                }
            }
        }
        ele.innerHTML = `Phim sẽ chiếu sau: ${h}h: ${m}m: ${s}s`
    }, 1000);
}
