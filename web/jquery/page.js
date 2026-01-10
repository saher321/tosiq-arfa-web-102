$(document).ready(function (){

    $("#cb").on("change", function (){
        let isChecked = $("#cb").is(":checked");
        isChecked ? $("#pswd").attr("type", "text") : $("#pswd").attr("type", "password")
    })


    $("#btn").on("click", function () {
        let myName = $("#name").val();
        $("p").html(`<h1> ${myName} </h1>`)
    });

});