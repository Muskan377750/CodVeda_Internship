/* ================= BOOT SCREEN ================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const bootScreen = document.getElementById("boot-screen");
        const website = document.getElementById("website");

        bootScreen.style.opacity = "0";

        setTimeout(() => {

            bootScreen.style.display = "none";
            website.style.display = "block";

        }, 700);

    }, 2800);

});


/* ================= LIVE CLOCK ================= */

function updateClock() {

    const clock = document.getElementById("clock");

    const now = new Date();

    const time = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });

    clock.textContent = time;
}

updateClock();

setInterval(updateClock, 1000);