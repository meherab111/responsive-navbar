const openIcon = document.getElementById("burger-icon")

const closeIcon = document.getElementById("close-icon")

const navBar = document.getElementById("navbar")

const overlayDiv = document.getElementById("overlay-div")

openIcon.addEventListener("click", () => {
    navBar.classList.add("show")
    overlayDiv.classList.add("overlay")
})

closeIcon.addEventListener("click", () => {
    overlayDiv.classList.remove("overlay")
    navBar.classList.remove("show")
})

overlayDiv.addEventListener("click", () => {
    overlayDiv.classList.remove("overlay")
    navBar.classList.remove("show")
})