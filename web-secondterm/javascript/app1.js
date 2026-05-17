
function applyColor() {
    let color = document.getElementById("clr").value

    document.body.style.backgroundColor = color
}

function convertToC() {
    let c = document.getElementById("cel").value
    let result = document.getElementById("result")

    let f = (c * 9/5) + 32

    result.innerText = f;
}