$(document).ready(function(){
	$('.btn.btn-default').click(function() {
		event.preventDefault();
		var value = $('#inputTask').val();
		$('.list-group').prepend('<li class="list-group-item"><input type ="checkbox" name="task">'+" "+value+'</li>');
	});
});
