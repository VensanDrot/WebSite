let darkMode = localStorage.getItem("darkMode");
let particlecolor = localStorage.getItem("color");
const iconToggle = document.querySelector('#icon');
const darkModeToggle = document.querySelector("#toggle_bk");


const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    localStorage.setItem("darkMode", "enabled");
    localStorage.setItem("color", "#111111");
    iconToggle.classList.remove("fa-sun");
    iconToggle.classList.add("fa-moon");

};


const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    localStorage.setItem("darkMode", null);
    iconToggle.classList.remove("fa-moon");
    localStorage.setItem("color", "#ffffff");
    iconToggle.classList.add("fa-sun");
};


if (darkMode === "enabled") {
    enableDarkMode();
};

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode");
    particlecolor = localStorage.getItem("color");
    if (darkMode != "enabled") {
        enableDarkMode();

    } else {

        disableDarkMode();
    }

});