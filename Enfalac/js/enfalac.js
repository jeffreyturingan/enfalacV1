$(document).ready(function() {
	/*ANIMATION*/	
	var animspeed = 400;
	
	/*SWIPE*/
	
	
	/*$('#item0,#slide0').on('swipeleft', function( event ) {slide1();});*/
	$('#item1,#slide1').on('swipeleft', function( event ) {slide1reset(); slide2();});
	$('#item2,#slide2').on('swipeleft', function( event ) { slide2reset();});
	$('#item2,#slide2').on('swiperight', function( event ) { slide2reset();});
	$('#item3,#slide3').on('swiperight', function( event ) { slide2();});
	$('#item6').on('swipeleft', function( event ) { slide7();});
	
	$('#item7,#slide7').on('swipeleft', function( event ) {slide7reset(); slide8(); });
	$('#item7,#slide7').on('swiperight', function( event ) {slide7reset(); });
	
	$('#item8,#slide8').on('swipeleft', function( event ) {slide8reset(); slide9(); });
	$('#item8,#slide8').on('swiperight', function( event ) {slide8reset(); slide7(); });
	
	$('#item9,#slide9').on('swipeleft', function( event ) {slide9reset(); slide10(); });
	$('#item9,#slide9').on('swiperight', function( event ) {slide9reset(); slide8(); });
	
	$('#item10,#slide10').on('swipeleft', function( event ) {slide10reset(); slide11(); });
	$('#item10,#slide10').on('swiperight', function( event ) {slide10reset(); slide9(); });
	
	$('#item11,#slide11').on('swiperight', function( event ) {slide11reset();slide10();});
	$('#item11,#slide11').on('swipeleft', function( event ) {slide11reset(); slide12();});
	$('#item12,#slide12').on('swiperight', function( event ) {document.getElementById('babygiggle').pause(); slide11();});
		
	
	
	/*$('#container').on('swipedown', function( event ) {location.reload(); });*/
	

		
	$('#item1').click(function() {
		slide1();
	});
	$('#slide12').click(function() {
		document.getElementById('babygiggle').play();
	});
	$('#slide12').trigger('click');
			
	$('.baby1t,.baby2t,.baby3t,.baby4t,.baby5t').show();
	function slide1() {
		$('.slide1txt').delay(400).fadeIn(animspeed);
		
		/*$('.baby1t').delay(1400).fadeIn(animspeed,function() {
			$('.baby3t').delay(400).fadeIn(animspeed,function() {
				$('.baby4t').delay(400).fadeIn(animspeed,function() {
					$('.baby2t').delay(400).fadeIn(animspeed,function() {
						$('.baby5t').delay(400).fadeIn(animspeed,function() {
							$('.slide1txt').delay(400).fadeIn(animspeed, function() {
								return false;
							});;
						});
					});
				});
			});
		});*/
	}	
	
	$('.pulsate1,.pulsate2,.pulsate3').show();
	$('.s2b').css({width: '649px'});
	$('.s2c').css({width: '676px'});
	$('.s2a').css({width: '696px'});
	function slide2() {
		
		/*$('.pulsate1,.pulsate2,.pulsate3').delay(1400).fadeIn().effect("pulsate",{times:3},400,function() {
			$('.s2b').animate({width: '649px'},500);
			$('.s2c').animate({width: '676px'},500);
			$('.s2a').animate({width: '696px'},500);		
		});*/	
	}	
	
	
	function slide7() {
		$('.slide7txt').delay(1400).show("puff",400,function() {
			$('.stomach1 img').animate({width: '264px'},600);
		});
		
	}
	
	function slide8() {
		$('.slide8txt').delay(1400).fadeIn(function() {
			$('.stomach2 img').show("puff", 400);
		});
	}
	
	function slide9() {
		$('.slide9txt1').delay(1400).animate({width: '893px'},500,function() {
			$('.slide9txt2').show("puff",{percent:100},400,function() {
				$('.slide9atxt').fadeIn(400,function() {
					$('.arrow1,.arrow2,.arrow3,.arrow4').delay(500).fadeIn(400).animate({top: '229px'},800,function() {
						$('.slide9txt3').fadeIn(400);
					});
				});
			});
		});
	}
	
	function slide10() {
		$('.slide10txt1').css({height: '44px'});
		$('#slide10c1').css({height: '469px'});
		$('#slide10c2').css({height: '427px'});
		$('.slide10c2,.slide10c3,.slide10c4').delay(1500).fadeIn(800);

		/*$('.slide10txt1').delay(1400).animate({height: '44px'},400,function() {
			$('#slide10c1').delay(400).animate({height: '469px'},4000,function() {
				$('#slide10c2').delay(400).animate({height: '427px'},4000,function() {
					$('.slide10c2,.slide10c3,.slide10c4').delay(500).show();
				});
			});
		});*/
	}
	
	function slide11() {
		$('.slide11txt1').delay(800).fadeIn().animate({top: '167px'},400);
		$('.slide11c1').delay(800).fadeIn().animate({top: '232px'},400);
		$('.slide11c2').delay(800).fadeIn().animate({top: '198px'},400);
		$('.slide11c3').delay(800).fadeIn().animate({left: '99px'},400);
		$('.slide11c4').delay(800).fadeIn().animate({left: '556px'},400);
		/*$('.slide11txt1').delay(1400).fadeIn(400).animate({top: '167px'},400,function() {
			$('.slide11c1').delay(400).fadeIn().animate({top: '232px'},400,function() {
				$('.slide11c2').delay(400).fadeIn().animate({top: '198px'},400,function() {
					$('.slide11c3').delay(400).fadeIn().animate({left: '99px'},400);
					$('.slide11c4').delay(400).fadeIn().animate({left: '556px'},400);
				});
			});
		});*/
	
	}
	
	
	function slide12() {
		document.getElementById('babygiggle').play();
	}
	
	
	
	$('.stomach1').click(function() {
		$('#bb-nav-next').click();
		slide8();
	});
	
	$('#slide4').click( function() {
		$('#slide4v' ).show();
	});
	$('#slide5').click( function() {
		$('#slide5v' ).show();
	});
	$('#slide6').click( function() {
		$('#slide6v').show();
	});
	$('.close').live('click', function() {
		$('#slide4v,#slide5v,#slide6v').hide();
	});	

	
	
	
	
	/*RESET*/
	function slide1reset() {
		$('.slide1txt').hide();
		$('.baby1t,.baby2t,.baby3t,.baby4t,.baby5t,.slide1txt').show();
	}
	function slide2reset() {
		$('.pulsate1,.pulsate2,.pulsate3').show();
		/*$('.s2a,.s2b,.s2c').css({width: '0px'});*/
	}
	function slide7reset() {
		$('.slide7txt').hide();
		$('.stomach1 img').animate({width: '0px'},100)
	}
	function slide8reset() {
		$('.slide8txt,.stomach2 img').hide();
	}
	function slide9reset() {
		$('.slide9txt1').animate({width: '0px'},100);
		$('.slide9txt2,.slide9atxt,.arrow1,.arrow2,.arrow3,.arrow4,.slide9txt3').hide();
		$('.arrow1,.arrow2,.arrow3,.arrow4').animate({top: '160px'},100);
	}
	function slide10reset() {
		/*$('.slide10txt1,#slide10c1,#slide10c2').animate({height: '0px'},100);*/
		$('.slide10c3,.slide10c4').hide();
	}
	function slide11reset() {
		$('.slide11txt1,.slide11c1,.slide11c2,.slide11c3,.slide11c4').hide();
		$('.slide11txt1').animate({top: '130px'},100);
		$('.slide11c1').animate({top: '260px'},100);
		$('.slide11c2').animate({top: '260px'},100);
		$('.slide11c3').animate({left: '-100%'},100);
		$('.slide11c4').animate({left: '100%'},100);
	}
	
	
	
	

});