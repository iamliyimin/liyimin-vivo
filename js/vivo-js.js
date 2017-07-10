//header里的小图标
$(function() {
	$(".nav-icon li:last-child").hover(function() {
		$("#kefu").css("background-position-x", "-35px");
		$("#kefu").css("background-position-y", "-18px");
	}, function() {
		$("#kefu").css("background-position-x", "-35px");
		$("#kefu").css("background-position-y", "0px");
	})
})

//轮播时间
$(function() {
	$('.carousel').carousel({
  		interval: 3500
	})
})

//鼠标移上产品，出现下拉菜单
$(function() {
	$(".product").hover(function() {
		$(".product-dropmenu").addClass("product-hover");
	}, function() {
		$(".product-dropmenu").removeClass("product-hover");
	})
})

//点击导航条下拉菜单按钮时改变图标
$(function() {
	$(".btn-toggle .collapse-btn-content").click(function() {
		$(".btn-toggle .collapse-btn-content").removeClass("big");
		$(".btn-toggle .collapse-btn-content").addClass("small");
		$(".btn-toggle .changebutton").css("transform", "scale(1)");
		$(".navbar-collapse").css("animation","minheightshow .3s forwards linear");

	})
	$(".btn-toggle .changebutton").click(function() {
		$(".btn-toggle .changebutton").removeClass("small");
		$(".btn-toggle .collapse-btn-content").addClass("big");
		$(".btn-toggle .changebutton").css("transform", "scale(0)");
		$(".navbar-collapse").css("animation","minheighthide .3s forwards linear");
	})
})

//鼠标移上微信，出现二维码
$(function() {
	$(".weixin-share").hover(function() {
		$(".erweima").show();
	}, function() {
		$(".erweima").hide();
	})
})

//鼠标滚动监听事件
$(function() {
	$(window).bind("scroll", function() {
		var sTop = $(window).scrollTop();
		
		/*改变导航条的背景色*/
		if(sTop>=600){
			$(".navbar").addClass("newnavbar");			
		}else{
			$(".navbar").removeClass("newnavbar");	
		}

		/*轮播模糊*/
		$("#myCarousel").css("filter", "blur(" + sTop * 0.012 + "px)");
		
		/*当滚动到一定程度时显示footer*/
		if(sTop >= $(window).height()) {
			$("#myCarousel").hide();
			$(".footer").show();
		} else{
			$("#myCarousel").show();
			$(".footer").hide();
		}
		
		/*回到顶部*/
		if(sTop >= 800) {
			$(".back-to-top").show();
			$(".back-to-top").addClass("top-in-animate");
		}else{
			$(".back-to-top").hide();
		}
	}).trigger('scroll');
})