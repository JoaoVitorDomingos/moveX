// Menu responsivo
const menuResponsivo = document.getElementById("menu_responsivo")
let largura = window.innerWidth

//console.log(menuResponsivo)
//console.log("Largura da tela: " + largura)

function mudarClasseMenu() {
    if(largura >= 768) {
        menuResponsivo.classList.remove("offcanvas-top")
        menuResponsivo.classList.add("offcanvas-end")

    } else {
        menuResponsivo.classList.remove("offcanvas-end")
        menuResponsivo.classList.add("offcanvas-top")
    }
}
mudarClasseMenu()

window.addEventListener("resize", () => {
    //console.log("Mudou tamanho")
    largura = window.innerWidth
    mudarClasseMenu()
})


// Formulario
const formulario = document.querySelector("#contato>div>form")
//console.log(formulario)

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
})


// Carrossel
const swiper = new Swiper('.swiper', {
    loop: true,
    grapCursor: true,
    spaceBetween: 30,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },
        1500: {
            slidesPerView: 5
        },
    }

  });

