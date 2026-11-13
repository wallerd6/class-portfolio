const themeButton = document.querySelector("#theme-toggle");
const root = document.documentElement;

const savedTheme = localStorage.getItem("portfolio-theme") || "dark";

root.setAttribute("data-theme", savedTheme);

function updateThemeButton(theme) {
    if (theme === "dark") {
        themeButton.textContent = "☀ Light Mode";
        themeButton.setAttribute("aria-label", "Switch to light mode");
        themeButton.setAttribute("aria-pressed", "false");
    } else {
        themeButton.textContent = "☾ Dark Mode";
        themeButton.setAttribute("aria-label", "Switch to dark mode");
        themeButton.setAttribute("aria-pressed", "true");
    }
}

updateThemeButton(savedTheme);

themeButton.addEventListener("click", function () {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("portfolio-theme", newTheme);

    updateThemeButton(newTheme);
});

const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (typeof ScrollReveal !== "undefined" && !prefersReducedMotion) {
    ScrollReveal().reveal("main > section", {
        distance: "50px",
        duration: 1200,
        easing: "ease-in-out",
        origin: "bottom",
        opacity: 0,
        interval: 250,
        reset: false
    });
}
