$(document).ready(function(){


/*스크롤 되었을때 헤더 전환*/
	var $headerTop = $('.gnb').offset().top;        //A.offset().top    -A가 위에서 부터 거리가 얼마인지 알아온다

	$(window).scroll(function(){	
		var scroll = $(window).scrollTop();				  //스크롤 된 거리(위쪽에서 부터 얼마 스크롤 되었나)
		console.log('스크롤된 거리는?  '+scroll);

		if( scroll > $headerTop){			//스크롤된 거리가 헤더의 거리보다 커지게 될때
			$('.gnb').addClass('stick');
			$('h1').addClass('stick');
		    $('.gnb_all').addClass('stick');
		} else {
			$('.gnb').removeClass('stick');
			$('h1').removeClass('stick');
			$('.gnb_all').removeClass('stick');
		}
	}); 


  });      