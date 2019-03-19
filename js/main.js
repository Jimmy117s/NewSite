// JavaScript Document
$(function () {

    //内容页左边导航
    $(".left_nav dl").click(function () {
        $(this).addClass("left_nav_select")
          .children("dd").show('slow').end()
          .siblings().removeClass("left_nav_select")
          .children("dd").hide('slow')
    });
    //左边导航固定
    $(window).scroll(function () {
        var TopHeight = $('#navigation').height() + $('.inner_banner').height();
        if ($(window).scrollTop() >= TopHeight) {
            $('.sidebar').addClass('topFixed');	
			$(".empty_div").css("display","block");		
        } else {
            $('.sidebar').removeClass('topFixed');	
			$(".empty_div").css("display","none");			
        }
    });
   
});








