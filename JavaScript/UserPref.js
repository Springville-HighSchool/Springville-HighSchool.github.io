function ToggleDark() {
    if (localStorage.ModePref === "Dark") {
        localStorage.ModePref = "Light";
        document.location.reload(true);
    } else if (localStorage.ModePref === "Light") {
        localStorage.ModePref = "Dark";
        document.location.reload(true);
    };
    Popup();
};

function Popup() {
    if (localStorage.ModePref === "Dark") {
        document.getElementById("Popup").style.display = "none";
        document.getElementById("ModeSwitch").className += ' Dark';
        document.getElementById("ModeSwitch2").className += ' Dark';
        document.getElementById("ModeSwitch3").className += ' Dark';
        document.getElementById("DarkNav").className += ' NavFixDark';
        document.getElementById("skewed-theme").className += ' ThemeFixDark';
        document.getElementById("")
    } else if (localStorage.ModePref === "Light") {
        document.getElementById("Popup").style.display = "none";
    } else {
        document.getElementById("Popup").style.display = "block"
    };
};

function Dark() {
    localStorage.ModePref = "Dark";
    document.getElementById("Popup").style.display = "none";
    Popup();
    document.location.reload(true);
};

function Light() {
    localStorage.ModePref = "Light";
    document.getElementById("Popup").style.display = "none";
    Popup();
    document.location.reload(true);
};