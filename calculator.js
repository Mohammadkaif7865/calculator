var audio = new Audio('click.mp3');

function cal() {

    audio.play();
    let x = document.getElementById("display-panel").innerHTML;
    let result = 0;
    result = eval(x);
    document.getElementById("display-panel").innerHTML = result;
}

function display(val) {
    audio.play();
    document.getElementById("display-panel").innerHTML += val;
}

function clear_m() {
    audio.play();
    document.getElementById("display-panel").innerHTML = "";
}