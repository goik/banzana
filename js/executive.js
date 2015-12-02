$(document).ready(function(){
	
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


 });