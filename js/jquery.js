$(document).ready(function(){
	$('.btn.btn-default').click(function() {
		event.preventDefault();
		var value = $('#inputTask').val();
		$('.list-group').prepend('<li class="list-group-item"><input class="done" type="checkbox" name="task">'+" "+value+" "+'<span class="glyphicon glyphicon-remove"></span><span class="glyphicon glyphicon-pencil"></span><span class="glyphicon glyphicon-calendar"></span></li>');
		$('form')[0].reset();
	});

	$('ul').on("click", ".glyphicon-remove", function(){
		$(this).parent().remove();
	});

	// $('ul').on("click", ".glyphicon-calendar", function() {
	// 	$(this).datepicker({
	// 		inline:false,
 //            dayNamesMin: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],  
 //        });
	// });

	// $('.list-group-item').checked(function() {
	// 	$('li').css('text-decoration:', 'line-through');

	$(function() {
	    $( ".list-group" ).sortable();
	    $( ".list-group" ).disableSelection();
	});
});
