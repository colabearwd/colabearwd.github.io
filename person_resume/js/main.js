(function($) {

	"use strict";	

  	$(".main-menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main-menu a.homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		$(".logo-top-margin").animate({marginLeft:'45%'}, "slow");
		$(".logo-top-margin").animate({marginTop:'120px'}, "slow");
		return false;
	});

	$(".main-menu a.basicbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .basic-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.edubutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .edu-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.honoebutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .honor-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.researchbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .research-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.projectbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .project-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.internbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .intern-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$(".main-menu a.skillbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .skill-section").slideDown('slow');
		$(".logo-top-margin").animate({marginTop:'0'}, "slow");
		$(".logo-top-margin").animate({marginLeft:'0'}, "slow");
		return false;
	});

	$('.toggle-menu').click(function(){
        $('.show-menu').stop(true,true).slideToggle();
        return false;
    });

    $('.show-menu a').click(function() {
    	$('.show-menu').fadeOut('slow');
    });


})(jQuery);