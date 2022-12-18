'use strict';
{
   /* slider */
    $('.slider').slick({
        fade:true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:2000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        pauseOnFocus: false,
        pauseOnHover: false,
    });
    
    
	function GethashID (hashIDName){
		if(hashIDName){
			$('#main').find('a[href*="map"]').each(function() { 
				var idName = $(this).attr('href'); 
				if(idName == hashIDName){ 
					var childElm = $(this).children(); 
					$('#main a[href*="map"] > div').removeClass("is-active"); 
					$(childElm).addClass("is-active"); 
					$(".map").removeClass("active"); 
					$(hashIDName).addClass("active");
				}
			});
		}
	}
	//タブをクリックしたら
	$('#main a[href*="map"]').on('click', function() {
		var idName = $(this).attr('href'); 
		GethashID (idName);
		return false;
	});
	
	function GetID (hashIDName){
		if(hashIDName){
			$('.product-lists li').find('a[href*="list"]').each(function() { 
				var idName = $(this).attr('href'); 
				if(idName == hashIDName){ 
					$('#main a[href*="list"]').removeClass("is-active"); 
					$(this).addClass("is-active"); 
					$(".product-li").removeClass("is-active"); 
					$(hashIDName).addClass("is-active");
				}
			});
		}
	}
	//タブをクリックしたら
	$('.product-lists li a[href*="list"]').on('mouseover', function() {
		var idName = $(this).attr('href'); 
		GetID (idName);
		return false;
	});
	
	

}