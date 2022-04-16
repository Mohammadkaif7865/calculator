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