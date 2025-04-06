const openIcon = document.getElementById("burger-icon")

const closeIcon = document.getElementById("close-icon")

const navBar = document.getElementById("navbar")

openIcon.addEventListener("click", () => {
    navBar.classList.add("show")
})


closeIcon.addEventListener("click", () => {
    navBar.classList.remove("show")
})