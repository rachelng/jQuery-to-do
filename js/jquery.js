$(document).ready(function(){
	$('.btn.btn-default').click(function() {
		event.preventDefault();
		var value = $('#inputTask').val();
		$('.list-group').prepend('<li class="list-group-item"><input class="done" type="checkbox" name="task">'+" "+'<span class="display">'+value+'</span><input type="text" id="edit" style="display:none" /><span class="glyphicon glyphicon-remove"></span><span class="glyphicon glyphicon-calendar"></span><span class="glyphicon glyphicon-pencil"></span></li>');
		$('form')[0].reset();
	});

	$('ul').on("click", ".glyphicon-remove", function(){
		$(this).parent().fadeOut();
	});

	$('ul').on("click", ".glyphicon-pencil", function(){
  		$(this).siblings('.display').hide();
  		$(this).siblings("#edit").show().val(
  			$(this).siblings('.display').text()).focus();
		
			$(this).siblings('#edit').focusout(function(){
			$('input#edit').hide();
			$(this).siblings('.display').show().text($(this).val());
		});
	});

	$('ul').on("click", "input:checkbox", function(){
		if($(this).is(':checked')){
			$(this).siblings('.display').css("text-decoration","line-through");
		}else{
			$(this).siblings('.display').css("text-decoration","none");
		}
	});


	// $('ul').on("click", ".glyphicon-calendar", function(){
	// 	$(this).datepicker();
	// });

	// $('ul').on("click", ".glyphicon-calendar", function() {
	// 	$(this).datepicker({ 
 //        });
	// });

	$(function() {
	    $( ".list-group" ).sortable();
	    $( ".list-group" ).disableSelection();
	});
});
