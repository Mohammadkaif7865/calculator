var audio = new Audio('click.mp3');

function click_m() {
    audio.play();
}

function cal() {
    let x = document.getElementById("display-panel").innerHTML;
    let result = 0;
    result = eval(x);
    document.getElementById("display-panel").innerHTML = result;
}

function display(val) {
    document.getElementById("display-panel").innerHTML += val;
}

function clear_m() {
    document.getElementById("display-panel").innerHTML = "";
}