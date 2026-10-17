const button = document.getElementById("helloBtn");

button.addEventListener("click", () => {

    alert("💖 Bienvenida al mundo kawaii 💖");

    createHeart();
});

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "50px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(() => {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = ["💗","💕","🌸","🎀","✨"];

    heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "-20px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);

}, 1200);