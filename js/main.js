$(document).ready(function () {
	//popup-enterOn/Off
	$('.enterOn').hide();
	$('#popup h1').on('mouseenter', function () {
		$('.enterOff').hide();
		$('.enterOn').show();
	});
	$('#popup h1').on('mouseleave', function () {
		$('.enterOff').show();
		$('.enterOn').hide();
	});
	//popup-close
	$('header, section, footer').hide();
	$('#popup h1').click(function () {
		$('#popup').fadeOut(500);
		$('header, section, footer').show();
	});
	//header-typing
	var typingBool = false;
	var typingIdx = 0;
	var liIndex = 0;
	var liLength = $(".typingTxt > h1").length;
	var typingTxt = $(".typingTxt > h1").eq(liIndex).text();
	typingTxt = typingTxt.split("");
	if (typingBool == false) {
		typingBool = true;
		var tyInt = setInterval(typing, 100);
	}

	function typing() {
		if (typingIdx < typingTxt.length) {
			$(".typing").append(typingTxt[typingIdx]);
			typingIdx++;
		} else {
			if (liIndex >= liLength - 1) {
				liIndex = 0;
			} else {
				liIndex++;
			}
			typingIdx = 0;
			typingBool = false;
			typingTxt = $(".typingTxt > h1").eq(liIndex).text();
			clearInterval(tyInt);
			setTimeout(function () {
				$(".typing").html('');
				tyInt = setInterval(typing, 100);
			}, 1000);
		}
	}
	//header-scroll
	$('.nav_in').show();
	var $headerTop = $('header').offset().top;
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > $headerTop) {
			$('.scroll, .nav_in').hide();
			$('.menuBtn, nav_sub').show();
		} else {
			$('.scroll, .nav_in').show();
			$('.menuBtn, .nav_sub, .backdrop').hide();
			$('.menu').removeClass('checked');
		}
	});
	//header-menuBtn
	var tt = 1;
	$('.menuBtn').click(function () {
		if (tt == 1) {
			$('.menu').addClass('checked');
			$('.nav_sub, .backdrop').show();
			tt = 5;
		} else {
			$('.menu').removeClass('checked');
			$('.nav_sub, .backdrop').hide();
			tt = 1;
		}
	});
	//about-scroll     
	var $main1 = $('#about').offset().top;
	$(window).scroll(function () {
		var scrollY = $(document).scrollTop();
		if ($main1 <= scrollY) {
			$('#about .profile').addClass('move');
			$('#about .about_txt').addClass('move');
		}
	});
	//skill
	var $main2 = $('#skill').offset().top;
	$(window).scroll(function () {
		var scrollY = $(document).scrollTop();
		if ($main2 <= scrollY) {
			$('#skill li:nth-child(n)').addClass('on');
		}
	});
	//project
	var btn = $('#project nav li');
	btn.click(function () {
		var btn_num = $(this).index();
		if (btn_num == 0) {
			$(".all").fadeOut(0);
			$(".all").fadeIn(500);
		} else if (btn_num == 1) {
			$(".all").fadeOut(0);
			$(".mobile").fadeIn(500);
			$(".more").hide();
		} else if (btn_num == 2) {
			$(".all").fadeOut(0);
			$(".site").fadeIn(500);
			$(".more").hide();
		} else {
			$(".all").fadeOut(0);
			$(".photoshop").fadeIn(500);
			$(".more").hide();
		}
	});
	//project-more
	$('.no').hide();
	$('.more').click(function () {
		$('.no').show();
		$('.more').hide();
		$('#project').css({
			'height': '3700px'
		});
		$('.more_off').show();
	});
	$('.more_off').click(function () {
		$('.no').hide();
		$('.more').show();
		$('#project').css({
			'height': '1150px'
		});
		$('.more_off').hide();
	});
	$('#project nav li:nth-child(1)').click(function () {
		$('#project').css({
			'height': '1150px'
		});
		$('.more').show();
		$('.more_off, .no').hide();
	});
	$('#project nav li:nth-child(2)').click(function () {
		$('#project').css({
			'height': '1100px'
		});
		$('.more, .more_off').hide();
	});
	$('#project nav li:nth-child(3)').click(function () {
		$('#project').css({
			'height': '1100px'
		});
		$('.more, .more_off').hide();
		$('#project.site:nth-child(2n)').addClass('change');
	});
	$('#project nav li:nth-child(4)').click(function () {
		$('#project').css({
			'height': '2200px'
		});
		$('.more, .more_off').hide();
	});
	//responsive
	if ($(window).width() <= 768) {
		$('.more').click(function () {
			$('#project').css({
				'height': '7500px'
			});
		});
		$('.more_off').click(function () {
			$('#project').css({
				'height': '2050px'
			});
		});
		$('#project nav li:nth-child(1)').click(function () {
			$('#project').css({
				'height': '2050px'
			});
		});
		$('#project nav li:nth-child(2)').click(function () {
			$('#project').css({
				'height': '1950px'
			});
		});
		$('#project nav li:nth-child(3)').click(function () {
			$('#project').css({
				'height': '1950px'
			});
		});
		$('#project nav li:nth-child(4)').click(function () {
			$('#project').css({
				'height': '4300px'
			});
		});
	} else if (768 < $(window).width() <= 1024) {
		$('.more').click(function () {
			$('#project').css({
				'height': '4200px'
			});
		});
		$('.more_off').click(function () {
			$('#project').css({
				'height': '1200px'
			});
		});
		$('#project nav li:nth-child(1)').click(function () {
			$('#project').css({
				'height': '1200px'
			});
		});
		$('#project nav li:nth-child(2)').click(function () {
			$('#project').css({
				'height': '1150px'
			});
		});
		$('#project nav li:nth-child(3)').click(function () {
			$('#project').css({
				'height': '1150px'
			});
		});
		$('#project nav li:nth-child(4)').click(function () {
			$('#project').css({
				'height': '2500px'
			});
		});
	}
	//contact
	emailjs.init('user_goMFH9xgrlJZoUE2Kb5CY');
	window.onload = function () {
		document.getElementById('contact-form').addEventListener('submit', function (event) {
			event.preventDefault();
			this.contact_number.value = Math.random() * 100000 | 0;
			emailjs.sendForm('sineh79', 'template_1tkm574', this).then(function () {
				console.log('SUCCESS!');
			}, function (error) {
				console.log('FAILED...', error);
			});
		});
	}
	//contact-top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('.top').fadeIn();
		} else {
			$('.top').fadeOut();
		}
	});
	$(".top").click(function () {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});
