jQuery(function($){
	//header
	$('#menu-gnb>li:nth-child(2)').mouseenter(function(){
		$('header').addClass('on');
		$('.dim').addClass('on');
	});
	$('#menu-gnb>li:nth-child(2)').mouseleave(function(){
		$('header').removeClass('on');
		$('.dim').removeClass('on');
	});

	//mega menu
	$('.fusion-megamenu>li').each(function(){
		var link = $(this).find('a').attr('href');
		$(this).children('div').wrapAll('<a href="'+link+'"></a>'); 
	});
	$('.fusion-megamenu-title').each(function(){
		$(this).find('.fusion-menu-highlight-label').insertBefore($(this).find('a'));
	});

	//mobile menu
	$(window).load(function(){
		$('.fusion-menu .menu-item-has-children>a').click(function(){
			$(this).parent('li').toggleClass('on');
			$(this).next('ul').slideToggle();
			return false;
		});
	});

	//store
	var target = window.location.pathname;
	if(target.indexOf('item') != -1){
		$('#menu-item-165').addClass('current_page_item');
	}
	$('.fusion-portfolio-post .fusion-rollover').each(function(){
		$(this).find('.fusion-link-wrapper').insertBefore($(this).siblings('img'));
	});
	$('div[role="menubar"]').prepend('<a href="javascript:;" class="btn_cate">All</a>');

	$('.btn_cate').click(function(){
		$(this).next('ul').toggleClass('on');
		return false;
	});
	$('.fusion-filter a').click(function(){
		var txt = $(this).text();
		$('.btn_cate').text(txt);
		$('.btn_cate').trigger('click');
	});

	//btn down
	$('.visual').append('<a href="#cont" class="btn_down">scroll</a>');
	$('.tit.line').append('<a href="#cont" class="btn_down">scroll</a>');
	$('.btn_down').click(function(){
		var target = $(this).attr('href') ,
		targetTop = $(target).offset().top;
		$('body, html').animate({'scrollTop':targetTop},500);
		return false;
	});

	//slick slider
	$('.main_cont .fusion-portfolio-element article').removeClass('fusion-portfolio-post');
	$('.main_cont .fusion-portfolio-element>div').slick({
		arrows:false,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2
				}
			},
		]
	});
	$('.main_cont .fusion-link-wrapper').click(function(){
		var link = $(this).attr('href'),
		text = $(this).parent('.fusion-image-wrapper').next('.fusion-portfolio-content').find('.txt').html();
		$('.txt_info').html(text);
		$('.btn_more').attr('href', link);
		$('.main_cont .slick-slide').removeClass('on');
		$('.main_cont .slick-slide').each(function(){
			var href = $(this).find('.fusion-link-wrapper').attr('href');
			if(href.indexOf(link) != -1){
				$(this).addClass('on');
			}
		});
		return false;
	});

	$('.main_cont .slick-slide').each(function(){
		var txt = $(this).find('.fusion-post-content span').text();
		if(txt.indexOf('BEST01') == 0){
			$(this).find('a').trigger('click');
		}
	});

	$('.slider').find('div').removeClass('fusion-layout-column');
	$('.slider>div').slick({
		fade: true,
		autoplay: true,
		autoplaySpeed: 5000,
		pauseOnFocus: false,
		pauseOnHover: false,
		pauseOnDotsHover: false,
		draggable: false,
		swipe: false
	});
	$('.slider>div').on('beforeChange', function(event, slick, currentSlide, nextSlide){
		$('.slick-slide h2').removeClass('on');
		$('.slick-slide p').removeClass('on');
		$('.slick-slide .fusion-imageframe').removeClass('on');
	});
	$('.slider>div').on('afterChange', function(event, slick, currentSlide){
		$('.slick-slide[data-slick-index="'+currentSlide+'"]').find('h2').addClass('on');
		$('.slick-slide[data-slick-index="'+currentSlide+'"]').find('p').addClass('on');
		$('.slick-slide[data-slick-index="'+currentSlide+'"]').find('.fusion-imageframe').addClass('on');
	});

	//waypoint
	$('.main_cont').waypoint(function() {
		$(this).find('.animated_up').addClass('fadeInUp');
		$(this).find('.animated_left').addClass('fadeInLeft');
		$(this).find('.animated_right').addClass('fadeInRight');
	},{
		offset: '70%'
	});
	$('.visual').waypoint(function() {
		$(this).find('.animated_up').addClass('fadeInUp');
	},{
		offset: '70%'
	});
	$('.tit').waypoint(function() {
		$(this).find('.animated_up').addClass('fadeInUp');
	},{
		offset: '70%'
	});
	$('.sub_cont').waypoint(function() {
		$(this).find('.animated_up').addClass('fadeInUp');
		$(this).find('.animated_left').addClass('fadeInLeft');
		$('.slick-slide[data-slick-index="0"]').find('h2').addClass('on');
		$('.slick-slide[data-slick-index="0"]').find('p').addClass('on');
		$('.slick-slide[data-slick-index="0"]').find('.fusion-imageframe').addClass('on');
	},{
		offset: '70%'
	});
});