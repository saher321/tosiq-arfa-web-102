$(document).ready(function (){

    // alert("Alert in Jquery")

    $("#btn").on("click", function () {
        let myName = $("#name").val();
        $("p").html(`<h1> ${myName} </h1>`)
    })

});