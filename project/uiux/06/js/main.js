$(document).ready(function(){

	//각 섹션 화면 윗부분 부터의 거리
	var pos = [];   //배열 형태의 변수 선언

	for(var i=1; i<8; i++){
		pos.push($('.main'+i).offset().top);
	}	
	console.log(pos);    //각 섹션의 위치값을 배열형태로 보여준다 


//페이지 버튼을 누르면 부드럽게 이동
var btnLi = $('#btn_page li');

btnLi.click(function(){
	var btnLi_n = $(this).index();    //클릭한 li가 몇번째인지 알아온다(0,1,2...)
	$('html,body').animate({scrollTop:pos[btnLi_n]},500);
});


//각 페이지의 .btn_next버튼 클릭
var ntnN = 1;    
$('.btn_next').click(function(){
	$('html,body').animate({scrollTop:pos[ntnN]},500);
});



	$(window).scroll(function(){
		var scrollY = $(document).scrollTop();		//스크롤된 거리
		//console.log(scrollY);
		
		//헤더 고정============
		if(scrollY>=1227){
			$('header').removeClass('default');
			$('header').addClass('fix');
		} else {
			$('header').removeClass('fix');
			$('header').addClass('default');
		}

//각 섹션이 보일때 -페이지 버튼 on,  애니메이션 작동
		if(scrollY >=0 &&  scrollY < pos[1]) {
			$('#btn_page a').removeClass('on'); 
			$('#btn_page li').eq(0).find('a').addClass('on'); 
			console.log('스크롤 첫번째!구역!');
			ntnN = 1;      //.btn_next 버튼을 클릭하면 하나 밑으로 가기 위해서 필요한 변수

		} else if (scrollY >=pos[1] &&  scrollY < pos[2]){
			$('#btn_page a').removeClass('on');
			$('#btn_page li').eq(1).find('a').addClass('on');
			$('.main2 .img_01').addClass('move');
			ntnN = 2;

		} else if(scrollY >=pos[2] &&  scrollY < pos[3]){
			$('#btn_page a').removeClass('on');
			$('#btn_page li').eq(2).find('a').addClass('on');
			$('.main3 .img_01, .main3 .img_02').addClass('on');		
			ntnN = 3;

		} else if(scrollY >=pos[3] &&  scrollY < pos[4]){
			$('#btn_page a').removeClass('on');
			$('#btn_page li').eq(3).find('a').addClass('on');
			$('.main4 .case_bg, .main4 .case_card, .main4 .case_default').addClass('on');		
			ntnN = 4;
		
		} else if(scrollY >=pos[4] &&  scrollY < pos[5]){
			$('#btn_page a').removeClass('on');
			$('#btn_page li').eq(4).find('a').addClass('on');
			$('.main5 .case_cover, .main5 .case_uv').addClass('on');	
			ntnN = 5;
		} 
		else if(scrollY >=pos[5] &&  scrollY < pos[6]){
			$('#btn_page a').removeClass('on');
			$('#btn_page li').eq(5).find('a').addClass('on');
			$('.main6 .case_obj1, .main6 .case_obj2,	.main6 .case_loop1 span').addClass('on');	
			ntnN = 6;

		} else {
			$('#btn_page a').removeClass('on');
			$('#btn_page li').eq(6).find('a').addClass('on');
		
		}

		//main07 슬라이더
	  $('.slides').slick({
		dots: false,					//페이지버튼
		autoplay: true,			//자동슬라이드
		autoplaySpeed: 2000,	//오토플레이 이미지전환속도
		arrows:true,				//양옆 화살표
		fade:true,					//투명도로 전환
		pauseOnHover:true,   //마우스를 올려놓으면 멈춤
		speed:300,				//이미지 넘어갈때 속도
	  });


	});


  });      