var iMage = document.getElementById('image');
var sMoke = document.getElementById('videoSmoke')

function Happy() {
    console.log(iMage.src);
    iMage.src = "img/khat_happy.jpg";
    iMage.style.display = "inline-block"
    iMage.title = "In need of therapy";
    console.log("onclick");
    console.log(iMage.src);
}

function Sad() {
    console.log(iMage.src);
    iMage.src = "img/khat_sad.jpg";
    iMage.style.display = "inline-block"
    iMage.title = "A fine boi";
    console.log("onclick");
    console.log(iMage.src);
}

function BigSmoke() {
    sMoke.style.display = "inline-block"
}

console.log("Nagyon hacker vagy");