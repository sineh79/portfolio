$(document).ready(function(){
	
	//서브메뉴 펼치기
	$('.gnb>li').mouseenter(function(){
		console.log('제이쿼리!!!');
		$(this).find('.depth2').stop().slideDown(300);
	});

	$('.gnb>li').mouseleave(function(){
		$(this).find('.depth2').stop().slideUp(300);
	});



//유투브 탭
$('.youtube div:gt(0)').hide();			//첫번째 유투브(div) 보다 큰 div는 안보이게

	var nn; 
	$('.tab li').click(function(){
		nn = $(this).index();			//몇번째 아이디탭 안의 li를 눌렀는지 알아내서 변수nn에 넣는다
		console.log(nn);
		
		$('.youtube div').hide();					//모든 div가 안보이게
		$('.youtube div').eq(nn).show();		//nn번째 div가 보이게 한다

		
		$(this).find('img').attr('src', $(this).find('img').attr('src').replace('off','on')); 
		
	});


//tab메뉴를 누르면 선택된거 빼고 나머지 탭은 off상태(회색글씨)가 되게 한다.
		var $btn1 = $('.tab li:nth-child(1)').find('img'); 
		var $btn2 = $('.tab li:nth-child(2)').find('img');
		var $btn3 = $('.tab li:nth-child(3)').find('img'); 
		var $btn4 = $('.tab li:nth-child(4)').find('img');  

		$btn1.click(function(){
			$btn2.attr('src',$btn2.attr('src').replace('on','off'));
			$btn3.attr('src',$btn3.attr('src').replace('on','off'));
			$btn4.attr('src',$btn4.attr('src').replace('on','off'));
		});

		$btn2.click(function(){
			$btn1.attr('src',$btn1.attr('src').replace('on','off'));
			$btn3.attr('src',$btn3.attr('src').replace('on','off'));
			$btn4.attr('src',$btn4.attr('src').replace('on','off'));
		});

		$btn3.click(function(){
			$btn1.attr('src',$btn1.attr('src').replace('on','off'));
			$btn2.attr('src',$btn2.attr('src').replace('on','off'));
			$btn4.attr('src',$btn4.attr('src').replace('on','off'));
		});

		$btn4.click(function(){
			$btn1.attr('src',$btn1.attr('src').replace('on','off'));
			$btn2.attr('src',$btn2.attr('src').replace('on','off'));
			$btn3.attr('src',$btn3.attr('src').replace('on','off'));
		});
});    

// A.eq(b)    -b번째 A
// A.index()  -A가 몇번째 순서인지 알아온다 (0부터 시작)
// A:gt(b)    - b번째 보다 큰 순서의 A(들) (0부터 시작)
// A:lt(b)     - b번재 보다 작은 A(들)

//A.attr('속성')				 -A의 속성을 가져온다
//A.attr('속성','속성값')    -A의 속성을 가져와서 그 속성값을 변경한다.
//A.replace(b,c)			  -A안의 b를 c로 바꾼다