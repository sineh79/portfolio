$(document).ready(function(){
	var folkSliderShowItem = 3;        //반응형이 적용 안되는 플러그인 사용할때 필요

	if($(window).width() < 778 ){
		folkSliderShowItem =2;
	}

	 $('.folkSlider').slick({
			  infinite:true,
			  speed: 300,
			  slidesToShow: folkSliderShowItem,   //한 화면에 보이는 슬라이더갯수
			  slidesToScroll: 3,									//버튼 누르면 넘어가는 슬라이더갯수
			  responsive: [								//반응형 사용
				{
				  breakpoint: 1170,					//화면에 바뀌는 화면 넓이
				  settings: {
					slidesToShow: 3,					
					slidesToScroll: 1,
					infinite: true
				  }
				},
				{
				  breakpoint: 778,
				  settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				  }
				}
			  ]
			});


			  $('.ebookSlider').slick({
			  infinite:true,
			  speed: 300,
			  slidesToShow: 5,
			  slidesToScroll: 1,
			  responsive: [				
				{
				  breakpoint: 778,
				  settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				  }
				}
			  ]
			});


  });      