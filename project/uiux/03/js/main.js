$(document).ready(function(){


/*스크롤 되었을때 헤더 전환*/
	var $headerTop = $('header').offset().top;        //A.offset().top    -A가 위에서 부터 거리가 얼마인지 알아온다

	$(window).scroll(function(){	
		var scroll = $(window).scrollTop();				  //스크롤 된 거리(위쪽에서 부터 얼마 스크롤 되었나)
		console.log('스크롤된 거리는?  '+scroll);

		if( scroll > $headerTop){			//스크롤된 거리가 헤더의 거리보다 커지게 될때
			$('header').hide();
			$('#move').show();
		} else {
			$('header').show();
			$('#move').hide();
		}
	}); 

/*서브메뉴*/
$('.depth1').mouseenter(function(){
	$(this).find('.depth2').stop().fadeIn(500);
	$(this).find('a').addClass('on');

});
$('.depth1').mouseleave(function(){
	$(this).find('.depth2').stop().fadeOut(500);
	$(this).find('a').removeClass('on');
});


  });      