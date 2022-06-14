$(document).ready(function(){
	//Отображаем\скрываем потомков checkbox_ов
	$('.checkbox-area .spoiler').click(function(){
		var block = $(this).parent('li').children('ul');
		if ($(block).is(':hidden')){
			$(block).slideDown(100);
			$(this).removeClass('closed');
		}else{
			$(block).slideUp(100);
			$(this).addClass('closed');
		}
		return false;
	})
	//Изменение состояния
	$('.checkbox-area .checkbox input').live('change', function(){
		var cur_obj = $(this);
		
		// Если выбрано ВСЕ
		if (!$(cur_obj).is('.all_filter'))
			$('.checkbox-area input.all_filter').removeAttr('checked').parent().parent('li').removeClass('checked');

		if ($(cur_obj).parent().parent('li').find('input:checkbox').length > 1){ // Если это родитель
			var childinputs = $(cur_obj).parent().parent('li').find('input:checkbox');
			// Если текущий объект выбран
			if ($(cur_obj).is(':checked')){
				$(childinputs).removeAttr('checked').parent().parent('li').addClass('checked');
				$(cur_obj).attr('checked', 'checked').parent().parent('li').addClass('checked').removeClass('notall');
			}else{
				$(childinputs).removeAttr('checked').parent().parent('li').removeClass('checked');
			}
			if ($(cur_obj).parent().parent('li').children('a').is('.closed')){
				$(cur_obj).parent().parent('li').children('a').removeClass('closed');
				$(cur_obj).parent().parent('li').children('ul').slideDown(200);
			}
		}else{ // Если это дочерний элемент
			var parent_li = $(cur_obj).parents('ul.child').parent('li');

			if ($(cur_obj).parent().parent('li').is('.checked')){ // Если элемент уже выбран
				$(cur_obj).parent().parent('li').removeClass('checked');
				$(cur_obj).removeAttr('checked');
			}else{ // Если мы выбираем этот элемент
				$(cur_obj).parent().parent('li').addClass('checked');
				$(cur_obj).attr('checked','checked');
			}
			var boxes = $(cur_obj).parents('ul.child').find('li');
			var boxes_checked = $(cur_obj).parents('ul.child').find('li.checked');

			if (boxes.length == boxes_checked.length && boxes_checked.length > 0){ // если были выбраны все
				$(parent_li).addClass('checked').removeClass('notall').attr('ckecked','ckecked');
				$(boxes_checked).find('input').removeAttr('checked');
				$(parent_li).children('.checkbox').children('input').attr('checked','checked');
			}else{ // если выбраны НЕ все
				if (boxes_checked.length == 0){ // Совсем ни одного
					$(cur_obj).parents('ul.child').find('input').removeAttr('checked');
					$(parent_li).removeClass('notall');
				}else{
					$(parent_li).find('.checked').children().children('input').attr('checked','checked');
					$(parent_li).addClass('notall').removeClass('checked');
				}
				$(parent_li).removeClass('checked').children('.checkbox').children('input').removeAttr('checked');
			}

		}
		if ($(cur_obj).is('.all_filter')){
			if ($(cur_obj).is(':checked')){
				$(cur_obj).parents('ul').find('input:checkbox').removeAttr('checked').parent().parent('li').removeClass('checked').removeClass('notall');
				$(cur_obj).parent().parent('li').addClass('checked');
			}else{
				$(cur_obj).parents('ul').find('input:checkbox').removeAttr('checked').parent().parent('li').removeClass('checked').removeClass('notall');
			}
		}
	})
	// Просчет состояния
	$('.checkbox-area .checkbox :checked').parents('li').addClass('checked');
	$('.checkbox-area ul.child').each(function(){
		var cur_obj = $(this);
		var parent_li = $(cur_obj).parent('li');
		var boxes = $(cur_obj).find('li');
		var boxes_checked = $(cur_obj).find('li.checked');

		if (boxes.length == boxes_checked.length && boxes_checked.length > 0){ // если были выбраны все
			$(parent_li).addClass('checked').removeClass('notall').attr('ckecked','ckecked');
			$(boxes_checked).find('input').removeAttr('checked');
			$(parent_li).children('.checkbox').children('input').attr('checked','checked');
		}else{ // если выбраны НЕ все
			if (boxes_checked.length == 0){ // Совсем ни одного
				$(parent_li).removeClass('notall');
				$(parent_li).children('a').addClass('closed');
				$(parent_li).children('ul.child').hide();
			}else{
				$(parent_li).find('.checked').children().children('input').attr('checked','checked');
				$(parent_li).addClass('notall').removeClass('checked');
			}

		}
		if ($(parent_li).children('.checkbox').children('input').is(':checked')){
			$(parent_li).find('li').addClass('checked');
			$(parent_li).children('a').removeClass('closed');
			$(parent_li).children('ul.child').show();
		}
	})
	if ($('.checkbox-area input:checkbox:checked').length == 0){
		$('.checkbox-area input.all_filter').attr('checked', 'checked').parent().parent('li').addClass('checked');
	}

})