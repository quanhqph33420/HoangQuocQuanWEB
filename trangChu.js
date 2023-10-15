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

downtime(col1_downtiem, 3, 19, 0)
downtime(col2_downtiem, 4, 26, 0)
downtime(col3_downtiem, 1, 20, 0)
downtime(col4_downtiem, 2, 10, 0)

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

const ColTopImg = document.querySelectorAll(".main-content img")
const ColTopH3 = document.querySelectorAll(".main-content h3")
const ColTopP = document.querySelectorAll(".main-content p")
const ColTopi = document.querySelectorAll(".main-content .fa-heart")
const heart = document.getElementById("fa-regular")
const tablefavor = document.getElementById("tableFavor")
const tbl = document.getElementById('tbl')

var arrPhim = []
var listFavor = []
function phim(stt, anhPhim, tenPhim, namSanXuat) {
    this.stt = stt
    this.anhPhim = anhPhim
    this.tenPhim = tenPhim
    this.namSanXuat = namSanXuat
}

arrPhim.push(new phim(1, "image/banAn.jpg", "BẢN ÁN", "Yargi (2021)"))
arrPhim.push(new phim(2, "image/gaHe.jpg", "GÃ HỀ", "Joker (2019)"))
arrPhim.push(new phim(3, "image/matTriNho.jpg", "MẤT TRÍ NHỚ", "Blackout (2022)"))
arrPhim.push(new phim(4, "image/matTich.jpg", "MẤT TÍCH", "Missing (2023)"))
//-------------------------------------------------------------
arrPhim.push(new phim(5, "image/tromSach.jpg", "KẺ TRỘM SÁCH", "The Book Thief (2014)"))
arrPhim.push(new phim(6, "image/tang16.jpg", "TẦNG 16", "Level 16 (2018)"))
arrPhim.push(new phim(7, "image/PEARL.jpg", "PEARL", "Pearl (2022)"))
arrPhim.push(new phim(8, "image/blockBuster.jpg", "BLOCKBUSTER", "Blockbuster (2022)"))

for (let index = 0; index < arrPhim.length; index++) {
    ColTopImg[index].src = arrPhim[index].anhPhim
    ColTopH3[index].innerHTML = arrPhim[index].tenPhim
    ColTopP[index].innerHTML = arrPhim[index].namSanXuat
}

heart.addEventListener("click", () => {
    tablefavor.classList.toggle('tableFavor')
})

for (let index = 0; index < ColTopi.length; index++) {
    ColTopi[index].addEventListener("click", () => {
        ColTopi[index].classList.toggle('fa-solid')
        ColTopi[index].classList.toggle('fa-regular')
        if (ColTopi[index].className.includes('fa-solid')) {
            Swal.fire(
                `${arrPhim[index].tenPhim}`,
                'Bạn đã thêm vào danh sách yêu thích',
                'success'
            )
            listFavor.push(arrPhim[index])
            loadTable(listFavor)
        } else {
            Swal.fire(
                `${arrPhim[index].tenPhim}`,
                'Bạn đã xóa khỏi danh sách yêu thích',
                'success'
            )
        }
    })
}

const iconhoverCol = document.querySelectorAll(".main-content #icon_hover_col1")
const divtt = document.querySelectorAll('.main-content .div-tt')
for (let i = 0; i < ColTopImg.length; i++) {
    ColTopImg[i].addEventListener("mouseover", () => {
        divtt[i].style.display = 'block'
    })
    ColTopImg[i].addEventListener("mouseleave", () => {
        divtt[i].style.display = 'none'
    })
    divtt[i].addEventListener("mousemove", () => {
        divtt[i].style.display = 'block'
    })
    divtt[i].addEventListener("mouseleave", () => {
        divtt[i].style.display = 'none'
    })

}

function loadTable(listPhim) {
    const tableR = tbl.querySelectorAll('tr');

    for (let index = tableR.length - 1; index > 0; index--) {
        tbl.removeChild(tableR[index]);
    }

    listPhim.forEach(e => {
        var tr = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        td1.textContent = e.tenPhim;
        td2.textContent = e.namSanXuat;

        tr.appendChild(td1);
        tr.appendChild(td2);
        tbl.appendChild(tr);
    });
}






