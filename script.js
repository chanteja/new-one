let language = "en";

let text = {
    en: {
        enterName: "Enter Your Name",
        letterTitle: "Happy Birthday Harshini ❤️",
        letter: "Harshini, you are truly special. Your smile lights up everything. May your life be filled with happiness, success, and joy. Enjoy your beautiful day!"
    },
    te: {
        enterName: "మీ పేరు నమోదు చేయండి",
        letterTitle: "హ్యాపీ బర్త్‌డే హర్షిణి ❤️",
        letter: "హర్షిణి, నువ్వు చాలా ప్రత్యేకమైన వ్యక్తివి. నీ నవ్వు చుట్టూ ఉన్నవారిని ఆనందపరుస్తుంది. నీ జీవితంలో ఎప్పుడూ ఆనందం, విజయాలు ఉండాలి."
    }
};

function setLanguage(lang) {
    language = lang;
    document.getElementById("languageScreen").classList.add("hidden");
    document.getElementById("nameScreen").classList.remove("hidden");

    document.getElementById("enterNameText").innerText = text[lang].enterName;
}

function startExperience() {

    document.getElementById("nameScreen").classList.add("hidden");

    let blast = document.getElementById("balloonBlast");
    let main = document.getElementById("mainContent");

    blast.classList.remove("hidden");

    setTimeout(() => {
        blast.style.display = "none";
        main.classList.remove("hidden");

        let bgm = document.getElementById("bgm");
        bgm.play();

        document.getElementById("letterTitle").innerText = text[language].letterTitle;
        document.getElementById("letterText").innerText = text[language].letter;

    }, 5000);
}

function scrollToVideo() {
    document.getElementById("videoSection").scrollIntoView({ behavior: 'smooth' });
}

let video = document.getElementById("birthdayVideo");

setTimeout(() => {
    if(video){
        video.onplay = () => {
            document.getElementById("bgm").pause();
        };
    }
}, 1000);