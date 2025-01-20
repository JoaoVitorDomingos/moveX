const containerCarrossel = document.getElementById("carrossel_produtos")

// Menu responsivo
const menuResponsivo = document.getElementById("menu_responsivo")
let largura = window.innerWidth

//console.log(menuResponsivo)
//console.log("Largura da tela: " + largura)

function mudarClasseMenu() {
    if(largura >= 768) {
        menuResponsivo.classList.remove("offcanvas-top")
        menuResponsivo.classList.add("offcanvas-end")

        // Carrossel
        containerCarrossel.classList.remove("slide")
    } else {
        menuResponsivo.classList.remove("offcanvas-end")
        menuResponsivo.classList.add("offcanvas-top")

        //Carrossel
        containerCarrossel.classList.add("slide")
    }
}
mudarClasseMenu()

window.addEventListener("resize", () => {
    //console.log("Mudou tamanho")
    largura = window.innerWidth
    mudarClasseMenu()

    // Carrossel
    larguraCarrossel = document.getElementsByClassName("carousel-inner")[0].clientWidth
    larguraProduto = document.getElementsByClassName("carousel-item")[0].clientWidth
    count = (larguraCarrossel / larguraProduto).toFixed(0)
    scrollPosition = 0
    carrossel.scrollLeft = 0
})


// Formulario
const formulario = document.querySelector("#contato>div>form")
//console.log(formulario)

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
})


// Carrossel
let larguraCarrossel = document.getElementsByClassName("carousel-inner")[0].clientWidth
let larguraProduto = document.getElementsByClassName("carousel-item")[0].clientWidth
const carrossel = document.getElementsByClassName("carousel-inner")[0]
const btnNextCarrossel = document.getElementsByClassName("carousel-control-next")[0]
const btnPrevCarrossel = document.getElementsByClassName("carousel-control-prev")[0]
let qtdProdutos = document.getElementsByClassName("carousel-item").length

//console.log("Carrossel: " + larguraCarrossel)
//console.log("Produto: " + larguraProduto)
//console.log(btnNextCarrossel)
//console.log(carrossel)
//console.log(qtdProdutos)
//console.log("Conta: " + (larguraCarrossel / larguraProduto).toFixed(0))

let count = (larguraCarrossel / larguraProduto).toFixed(0)
let scrollPosition = 0
btnNextCarrossel.addEventListener("click", evento => {
    if(largura >= 768) {
        //console.log("next")
        //console.log("Count: " + count)
        if(count <= qtdProdutos) {
            scrollPosition += larguraProduto
            carrossel.scrollLeft = scrollPosition
            count++
            //console.log("New Count: " + count)
        } else {
            //console.log("max")
        }
    }
})

btnPrevCarrossel.addEventListener("click", evento => {
    if(largura >= 768) {
        //console.log("prev")
        //console.log("Count: " + count)
        if(scrollPosition > 0) {
            scrollPosition -= larguraProduto
            carrossel.scrollLeft = scrollPosition
            count--
            //console.log("New Count: " + count)
        } else {
            //console.log("min")
        }
    }
})

