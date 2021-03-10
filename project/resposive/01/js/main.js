$(document).ready(function(){
	var tt =1;    //변수선언(메뉴가 펼쳐지지 않음)

	$('.menu').click(function(){
		if (tt == 1){
			$('.menu').addClass('checked');
			$('nav').animate({right:0}, 500);
			$('#dim').show();
			tt =5;
		} else {
			$('.menu').removeClass('checked');
			$('nav').animate({right:'-60%'}, 500);
			$('#dim').hide();
			tt =1;
		}
	});

    

  });      