let language = "en";

let text = {
    en: {
        enterName: "Enter Your Name",
        title: "Happy Birthday Harshini ❤️",
        message: "you are truly special. Your smile lights up everything. Stay happy always!"
    },
    te: {
        enterName: "మీ పేరు నమోదు చేయండి",
        title: "హ్యాపీ బర్త్‌డే హర్షిణి ❤️",
        message: "నువ్వు చాలా ప్రత్యేకమైన వ్యక్తివి. ఎప్పుడూ సంతోషంగా ఉండాలి!"
    }
};

function setLanguage(lang) {
    language = lang;
    document.getElementById("languageScreen").classList.add("hidden");
    document.getElementById("nameScreen").classList.remove("hidden");
    document.getElementById("enterNameText").innerText = text[lang].enterName;
}

function typeEffect(el, text, speed = 40) {
    let i = 0;
    el.innerHTML = "";
    function typing() {
        if (i < text.length) {
            el.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function startExperience() {

    let username = document.getElementById("username").value.trim();
    if (username === "") username = "Friend";

    document.getElementById("nameScreen").classList.add("hidden");

    let blast = document.getElementById("balloonBlast");
    let main = document.getElementById("mainContent");

    blast.classList.remove("hidden");

    setTimeout(() => {
        blast.style.display = "none";
        main.classList.remove("hidden");

        document.getElementById("bgm").play();

        // ✅ FIXED TITLE (Harshini only)
        typeEffect(document.getElementById("letterTitle"), text[language].title);

        // ✅ USER NAME IN MESSAGE
        setTimeout(() => {
            let msg = username + " 💖, " + text[language].message;
            typeEffect(document.getElementById("letterText"), msg);
        }, 1200);

    }, 3000);
}

function scrollToVideo() {
    document.getElementById("videoSection").scrollIntoView({ behavior: "smooth" });
}

/* Pause music */
setTimeout(() => {
    let video = document.getElementById("birthdayVideo");
    if (video) {
        video.onplay = () => document.getElementById("bgm").pause();
    }
}, 1000);

/* Fireworks */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

document.addEventListener("click", (e) => {
    for (let i = 0; i < 20; i++) {
        particles.push({
            x: e.clientX,
            y: e.clientY,
            dx: (Math.random() - 0.5) * 6,
            dy: (Math.random() - 0.5) * 6,
            life: 100
        });
    }
});

function animate() {
    ctx.fillStyle = "rgba(0,0,0,0.05)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((p, i) => {
        p.x += p.dx;
        p.y += p.dy;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "pink";
        ctx.fill();

        if (p.life <= 0) particles.splice(i, 1);
    });

    requestAnimationFrame(animate);
}
animate();