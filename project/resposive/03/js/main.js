$(document).ready(function(){
	

//서치
	$('.search').click(function(){
		$('#mask').show();
	});
	$('.seacrchCancle').click(function(){
		$('#mask').hide();
	});


//좌측 lnb메뉴
var close = true;     //메뉴가 닫혀있음
var du = 300;		

$('.lnb_btn').click(function(){
	if(close == true){         //왼쪽 메뉴가 숨겨진 상태에서 클릭하면 튀어나오게 된다
		$('#lnb').animate({left:0},du);				//메뉴가 슬라이딩되서 보임
		$('#wrap').animate({left:'274px'},du);  //기본 화면 부분이 같이 왼쪽으로 
		$('footer').css('position','relative');		   //고정되어있던 footer부분도 같이 왼쪽으로
		$('body').css('overflow','hidden');			   //아랫 부분 스크롤 바가 생기는 것을 막아준다
		$('.cover').fadeIn(du);								//기본화면 위에 반투명한 검정색
		$(this).find('img').attr({'src':'img/bg_header_lnb_active.png'});  //버튼이미지를 바꾼다
		close = false;
	}
		else{						//메뉴가 튀어나와있는 상태에서 클릭
			$('#lnb').animate({left:'-274px'},du);
			$('#wrap').animate({left:0},du);
			$('footer').css('position','fixed');
			$('body').css('overflow','auto');
			$(this).find('img').attr({'src':'img/bg_header_lnb.png'});
			$('.cover').fadeOut(du);
			close = true;
		}
	});


	


  });      