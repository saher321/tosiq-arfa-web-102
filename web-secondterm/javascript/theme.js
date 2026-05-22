applyTheme();

function applyTheme() {
    let txtClr = localStorage.getItem("txtClr")
    let bgClr = localStorage.getItem("bgClr")

    document.body.style.color = txtClr
    document.body.style.backgroundColor = bgClr

    
}

function saveTheme() {
    let txtClr = document.getElementById("txtClr").value
    let bgClr = document.getElementById("bgClr").value

    document.body.style.color = txtClr
    document.body.style.backgroundColor = bgClr

    localStorage.setItem("txtClr", txtClr)
    localStorage.setItem("bgClr", bgClr)

    applyTheme();
}