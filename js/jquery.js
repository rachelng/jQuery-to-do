$(document).ready(function(){
	$('.btn.btn-default').click(function() {
		event.preventDefault();
		var value = $('#inputTask').val();
		$('.list-group').prepend('<li class="list-group-item"><input class="done" type="checkbox" name="task">'+" "+value+" "+'<span class="glyphicon glyphicon-remove"></li>');
		$('form')[0].reset();
	});

	$('ul').on("click", ".glyphicon", function(){
		$(this).parent().remove();

	})

	// $('.list-group-item').checked(function() {
	// 	$('li').css('text-decoration:', 'line-through');
});
