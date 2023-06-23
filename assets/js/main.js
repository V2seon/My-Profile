/*
	Miniport by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('#nav a, .scrolly').scrolly({
			speed: 1000,
			offset: function() { return $nav.height(); }
		});

})(jQuery);
var mySwiper  = new Swiper('.swiper', {
	slidesPerView: 3,
	spaceBetween: 10,
	loopAdditionalSlides: 1,
	autoplay: {     //자동슬라이드 (false-비활성화)
	  delay: 2500, // 시간 설정
	  disableOnInteraction: false, // false-스와이프 후 자동 재생
	},
	loop:true,
	speed:1500
})
