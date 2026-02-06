// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";
    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

function moveNoBtn() {
    const vw = document.documentElement.clientWidth;
    const vh = document.documentElement.clientHeight;
    const margin = 40;

    const minX = margin;
    const minY = margin;
    const maxX = vw - 120 - margin;
    const maxY = vh - 60 - margin;

    const newX = Math.floor(Math.random() * (maxX - minX)) + minX;
    const newY = Math.floor(Math.random() * (maxY - minY)) + minY;

    noBtn.style.position = "fixed";
    noBtn.style.left = Math.max(10, Math.min(newX, vw - 130)) + "px";
    noBtn.style.top = Math.max(10, Math.min(newY, vh - 70)) + "px";
    noBtn.style.transform = "none";
    noBtn.style.transition = "left 0.3s ease, top 0.3s ease";
    noBtn.style.zIndex = "999";
}

const isMobile = "ontouchstart" in window;

if (isMobile) {
    noBtn.addEventListener("click", (e) => {
        e.preventDefault();
        moveNoBtn();
    });
} else {
    noBtn.addEventListener("mouseover", moveNoBtn);
}

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

function typeWriter(element, text, speed) {
    let i = 0;
    element.textContent = "";
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";

    catImg.src = "cat_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
    typeWriter(finalText, "I am still your friend if you feel lonely just call me, i am very awkward i do not know how to convey things and lots of other things but i care for you and id still be here for you as a gay friend of yours lol", 40);
});
