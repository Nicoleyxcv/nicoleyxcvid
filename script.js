const avatar = document.getElementById("avatar");
const overlay = document.getElementById("overlay");

avatar.addEventListener("click", () => {
    overlay.classList.add("active");
});

overlay.addEventListener("click", () => {
    overlay.classList.remove("active");
});


const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", () => {
    document.body.classList.toggle("light");
})