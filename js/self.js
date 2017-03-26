$(document).ready(function() {
    var doc_width = $(document).width();
	 $("#top,#trip,.food,.shopping,.location,#footer").css({
        width: doc_width + 'px'
    });
	//导航栏
	$(".nav-menu li").mouseover(function() {
		$(this).children("a").css({
			"color": "#FFFFFF",
			"text-decoration": "none"
		});
		$(this).css({
			"background": "#333333",
			"cursor": "pointer"
		});
	});
	$(".nav-menu li").mouseout(function() {
		$(this).children("a").css("color", "#333");
		$(this).css("background", "#fff");
	});

	//周边游
	$('.sgw-img td').hover(function() {
			$(this).children('.box').stop(true, true).delay(100).animate({
				'top': 0,
				opacity: 0.8
			}, 1000);
		}, function() {
			$(this).children('.box').stop(true, true).animate({
				'top': -420,
				opacity: 0
			}, 1000);
		});
		//美食
	$('#carousel ul').carouFredSel({
		prev: '#prev',
		next: '#next',
		pagination: "#pager",
		scroll: 1000
	});
});