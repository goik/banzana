$(document).ready(function() {

    /*
    	$("body").on("click","a",function(){
    		$('html,body').animate({scrollTop:0},300);
    	});

    	$('a[href*=#]:not([href=#])').click(function(){
    		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    		  var target = $(this.hash);
    		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    		  if (target.length) {
    			$('html,body').animate({
    			  scrollTop: target.offset().top
    			}, 1200);
    			return false;
    		  }
    		}
    	});
    */

    // target blank on link
    $(".tb").each(function() {
        $(this).attr("target", "_blank");
    });

    // hide visible tag alt & title
    var getAlt = "",
        getTitle = "";
    $("body").on("mouseenter", ".hta", function() {
        tag = $(this);
        getAlt = tag.attr("alt");
        getTitle = tag.attr("title");
        tag.attr("alt", "");
        tag.attr("title", "");
    });

    $("body").on("mouseleave", ".hta", function() {
        tag = $(this);
        tag.attr("alt", getAlt);
        tag.attr("title", getTitle);
    });



    // open user profile drop down menu
    function profileDropDownOpen(el) {
        el.addClass("dd-select");
        $(".user-profile-drop-down").css({
            display: "block"
        }).stop().animate({
            opacity: 1
        }, 200);
    }

    // close user profile drop down menu
    function profileDropDownClose(el) {
        el.removeClass("dd-select");
        $(".user-profile-drop-down").stop().animate({
            opacity: 0
        }, 300, function() {
            $(this).css({
                display: "none"
            });
        });
    }


    // close user profile drop down menu
    function profileDropDownClose2() {
        $(".user-profile-drop-down").stop().animate({
            opacity: 0
        }, 300, function() {
            $(this).css({
                display: "none"
            });
        });
    }

    // mouseover userName
    $("body").on("mouseenter", ".user-profile-box", function() {
        el = $(this);
        profileDropDownOpen(el);
        clearTimeout(time);
    });

    // mouseout userName
    var time;
    $("body").on("mouseleave", ".user-profile-box", function() {
        el = $(this);
        time = setTimeout(function() {
            profileDropDownClose(el);
        }, 400);
    });

    $("body").on("click", ".user-profile-box", function(event) {
        event.stopPropagation();
        return false;
    });

    $("body").click(function() {
        BrowseDropDownClose();
        profileDropDownClose2();
        closeSearch();
    });

    //click browser btn
    function BrowseDropDownOpen() {
        $(".js-selector-click").addClass("menu-item-select");
        $(".drop-down-browse").css({
            display: "block"
        }).stop().animate({
            opacity: 1
        }, 300);
    }

    function BrowseDropDownClose() {
        $(".js-selector-click").removeClass("menu-item-select");
        $(".drop-down-browse").stop().animate({
            opacity: 0
        }, 300, function() {
            $(this).css({
                display: "none"
            });
        });
    }

    $("body").on("click", ".js-selector-click", function(event) {
        closeSearch();
        BrowseDropDownOpen();
        event.stopPropagation();
        return false;
    });

    $("body").on("click", ".search-icon", function() {
        openSearch();
        BrowseDropDownClose();
        return false;
    });

    $("body").on("click", ".dd-search-position", function() {
        event.stopPropagation();
        return false;
    });

    $("body").on("click", ".delete-cross-cell", function() {
        emptySearchInp();
    });

    function openSearch() {
        $(".dd-search-position").css({
            display: "block"
        }).stop().animate({
            opacity: 1
        }, 300);
        $(".search-icon").addClass("select-search");
    }

    function closeSearch() {
        $(".dd-search-position").stop().animate({
            opacity: 0
        }, 300, function() {
            $(this).css({
                display: "none"
            });
        });
        $(".search-icon").removeClass("select-search");
    }

    function emptySearchInp() {
        $(".search-inp").val("");
    }





    /*=======================*/
    var mainSlider = $(".slide-section-js").owlCarousel({
        items: 1,
        navigation: true,
        slideSpeed: 800,
        transitionStyle: "goDown",
        responsive: true,
        singleItem: true,
        afterAction: function(elem) {}
    });

    $(".next-arrow").click(function() {
        mainSlider.trigger('owl.prev');
        return false;
    });
    $(".prev-arrow").click(function() {
        mainSlider.trigger('owl.next');
        return false;
    });

    /*=======================*/





    /*=======================*/
    var carouselSection1 = $(".carousel-section-1").owlCarousel({
        items: 5,
        navigation: true,
        slideSpeed: 800,
        transitionStyle: "fadeUp",
        responsive: true,
        afterAction: function(elem) {}
    });

    $(".js-carousel-arrow-prev-1").click(function() {
        carouselSection1.trigger('owl.prev');
        return false;
    });

    $(".js-carousel-arrow-next-1").click(function() {
        carouselSection1.trigger('owl.next');
        return false;
    });
    /*=======================*/


    /*=======================*/
    var carouselSection2 = $(".carousel-section-2").owlCarousel({
        items: 5,
        navigation: true,
        slideSpeed: 800,
        transitionStyle: "fadeUp",
        responsive: true,
        afterAction: function(elem) {}
    });

    $(".js-carousel-arrow-prev-2").click(function() {
        carouselSection2.trigger('owl.prev');
        return false;
    });

    $(".js-carousel-arrow-next-2").click(function() {
        carouselSection2.trigger('owl.next');
        return false;
    });
    /*=======================*/



});
