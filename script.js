var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); 

css.textContent = "linear-gradient(to right, rgb(171, 0, 250), rgb(250, 171, 0));";

function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    + ")";

    css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
