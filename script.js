const lightMode = document.getElementById("lightMode");
const darkMode = document.getElementById("darkMode");
const systemMode = document.getElementById("systemMode");

const systemTheme = window.matchMedia("(prefers-color-scheme: dark)");


// =========================
// THEME ANWENDEN
// =========================

function applyTheme(theme) {

    if (theme === "dark") {

        document.body.classList.add("dark-mode");

    } else if (theme === "light") {

        document.body.classList.remove("dark-mode");

    } else if (theme === "system") {

        if (systemTheme.matches) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }

    }

}


// =========================
// GESPEICHERTES THEME LADEN
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    applyTheme(savedTheme);

} else {

    applyTheme("system");

}


// =========================
// HELL
// =========================

lightMode.addEventListener("click", () => {

    localStorage.setItem("theme", "light");

    applyTheme("light");

});


// =========================
// DUNKEL
// =========================

darkMode.addEventListener("click", () => {

    localStorage.setItem("theme", "dark");

    applyTheme("dark");

});


// =========================
// SYSTEM
// =========================

systemMode.addEventListener("click", () => {

    localStorage.setItem("theme", "system");

    applyTheme("system");

});


// =========================
// SYSTEM-EINSTELLUNG ÄNDERT SICH
// =========================

systemTheme.addEventListener("change", () => {

    const currentTheme = localStorage.getItem("theme");

    if (currentTheme === "system") {

        applyTheme("system");

    }

});
