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
