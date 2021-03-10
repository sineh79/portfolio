$(document).ready(function(){
	var wHeight = $(window).height();    //화면의 세로길이를 구해서 변수에 넣어준다
	console.log('현재 화면의 세로길이는? '+ wHeight);

	console.log($('#section5').offset().top);

	$('section').css('height',wHeight);    //각 섹션의 가로길이를 위에서 잰 화면의 가로길이로 맞춘다

/*각 section의 거리를 잰다*/
	var pos = [];   //변수 pos는 배열
     
	for(var i =1; i < 7; i++){
		pos.push($('#section'+i).offset().top);
	}
	console.log(pos);
	//A.offset().top   -위에서 부터 A의 거리
	//A.push(b)       -배열A에 배열값b을 집어 넣는다

	

//각 section안의 btn_down버튼을 클릭
		$('#section1').on('click','.btn_down',function(){
			$('html,body').animate({scrollTop:pos[1]},500);
		});
		$('#section2').on('click','.btn_down',function(){
			$('html,body').animate({scrollTop:pos[2]},500);
		});
		$('#section3').on('click','.btn_down',function(){
			$('html,body').animate({scrollTop:pos[3]},500);
		});
		$('#section4').on('click','.btn_down',function(){
			$('html,body').animate({scrollTop:pos[4]},500);
		});
		$('#section5').on('click','.btn_down',function(){
			$('html,body').animate({scrollTop:pos[5]},500);
		});
		$('#section6').on('click','.btn_down',function(){
			$('html,body').animate({scrollTop:pos[6]},500);
		});


		/*리모튼 버튼을 누르면 화면 이동*/
		$('#remote a').on('click',function(e){
			e.preventDefault();
			var ttt = this.hash;   //클릭한 a의 #(해쉬) 값을 변수에 넣는다.
			console.log(ttt); 


			$('html,body').animate({scrollTop:$(ttt).offset().top},500,'swing');
		});

		
		$(window).scroll(function(){
			var scroll_n = $(window).scrollTop();    //스크롤된 거리를 구해서 변수에 넣어준다.

			if(scroll_n <pos[1]) {
				$('#remote a').removeClass('on');
			    $('#remote a').eq(0).addClass('on');
			} 
			 else if(scroll_n>=pos[1] && scroll_n<pos[2]){
				$('#remote a').removeClass('on');			
				$('#remote a').eq(1).addClass('on');
			 } 
			 else if(scroll_n>=pos[2] && scroll_n<pos[3]){
				$('#remote a').removeClass('on');			
				$('#remote a').eq(2).addClass('on');
			 }
			  
			 else if(scroll_n>=pos[3] && scroll_n<pos[4]){
				$('#remote a').removeClass('on');			
				$('#remote a').eq(3).addClass('on');
			 }
			  
			 else if(scroll_n>=pos[4] && scroll_n<pos[5]){
				$('#remote a').removeClass('on');			
				$('#remote a').eq(4).addClass('on');
			 }
			 else{
				$('#remote a').removeClass('on');			
				$('#remote a').eq(5).addClass('on');
			 }
		});


  });      