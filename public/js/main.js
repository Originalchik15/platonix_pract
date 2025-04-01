const { Router } = require("express")

$(document).ready(function(){

    //console.log("main.js подключён");

    $( document ).on('change', '.checkboxTodo', function() {
        //console.log("checkbox clicked");
        const checkbox = $(this)
        const todoId = checkbox.data('id')
        const completed = checkbox.is(':checked')

        $.ajax({
            url: '/complete'
        })

    })


})