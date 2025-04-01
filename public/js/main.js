$(document).ready(function () {
    console.log("main.js подключён");
    $(document).on('change', '.checkboxTodo', function () {
        console.log("checkbox clicked");
        const checkbox = $(this);
        const todoId = checkbox.data('id');
        const isCompleted = checkbox.is(':checked');
    
        $.ajax({

            url: '/complete',
            method: 'POST',
            data: { id: todoId,  completed: isCompleted ? 1 : 0},
            success: function () {

            const span = checkbox.closest('label').find('span');
            span.toggleClass('completed', isCompleted);
            console.log(todoId, " - ", isCompleted );

        },
      });
    });

    $(document).on('click', '#createButton', function (e) {
        e.preventDefault();
        const content = $('#todo-content').val().trim(); 

        $.post('/create', { content }, function (data) {
            console.log(data, ' added');
            $('#todo-content').val('');
            
        });
      });

    
  });
  