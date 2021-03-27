const leftColor = document.querySelector("#left-color");
const rightColor = document.querySelector("#right-color");
const body = document.querySelector("#gradient");
const css = document.querySelector("h3");

css.textContent = "linear-gradient(to right, rgb(27, 80, 27), rgb(102, 109, 3));";

function setGradiant()
{
    body.style.background = "linear-gradient(to right, "
    + leftColor.value + ", "
    + rightColor.value + ")";
    css.textContent = body.style.background + ";";
}

leftColor.addEventListener("input", setGradiant);
rightColor.addEventListener("input", setGradiant);