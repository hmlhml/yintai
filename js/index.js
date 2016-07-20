$(function(){

	/***************************顶部导航 选项卡******************************/

	$(".up").each(function(index){
		$(this).hover(function(){
			$(".up .drop").eq(index).show();
			$(".up").eq(index).css("background","#fff");
			$(".blank").css("display","block");
		},function(){
			$(".up .drop").eq(index).hide();
			$(".up").eq(index).css("background","#eee");
			$(".blank").css("display","none");
		})
	})

	/***************************左侧导航 选项卡******************************/
	$(".menuList>li").each(function(index){
		$(this).hover(function(){
			$(".dropdown").eq(index).show();
		},function(){
			$(".dropdown").eq(index).hide();

		})
	})

	/**************************banner 右侧图片滑动效果********************/
	$(".fl-pic").hover(function(){
		$(".fl-pic").stop(true,true);
		$(".fl-pic").animate({right:10});
	},function(){
		$(".fl-pic").stop(true,true);
		$(".fl-pic").animate({right:0});

	})

	/***************************banner 轮播******************************/
	$(".bg").hide().first().show();
	$(".anniu>div").removeClass("selected").first().addClass("selected");
	var num=0;
	function move(type){
		if(type=="r"){
			num++;
			if(num>=$(".bg").length){
				num=0;
			}
		}
		if(type=="l"){
			num--;
			if(num<0){
				num=$(".bg").length-1;
			}
		}
		
		$(".bg").fadeOut().eq(num).fadeIn();
		$(".anniu>div").removeClass("selected").eq(num).addClass("selected");
	}
	var t=setInterval(function(){move("r")},1000);
	$(".bannerBox").hover(function(){
		clearInterval(t);
		$(".btnL").show();
		$(".btnR").show();
	},function(){
		t=setInterval(function(){move("r")},1000);
		$(".btnL").hide();
		$(".btnR").hide();
	})
	$(".anniu>div").mouseover(function(){
		var index=$(this).index();
		$(".bg").fadeOut().eq(index).fadeIn();
		$(".anniu>div").removeClass("selected").eq(index).addClass("selected");
		num=index;
	})

	$(".btnR").mousedown(function(event){
		event.preventDefault();
	}).click(function(){
		move("r");
	})
	$(".btnL").mousedown(function(event){
		event.preventDefault();
	}).click(function(){
		move("l");
	})
	/***************************选项卡******************************/
	$(".change").each(function(){
		var lis=$(".links li",$(this));
		var lists=$(".list .list_part",$(this));
		lists.hide().eq(0).show();
		lis.css("borderColor","#000").eq(0).css("borderColor","#e5004f");
		$("div",lis).hide().eq(0).show();
		lis.mouseover(function(){
			var index=$(this).index();
			lists.hide().eq(index).show();
			lis.css("borderColor","#000").eq(index).css("borderColor","#e5004f");
			$("div",lis).hide().eq(index).show();
		})
	})

	/***************************楼层banner轮播******************************/
	
	
	
	$(".floor_banner_wheel").each(function(){
		var as=$("a",$(this));
		var w=as.outerWidth();
		as.css("left",w).eq(0).css("left",0);
		var rbtn=$(".floor_banner_rbtn",$(this));
		var lbtn=$(".floor_banner_lbtn",$(this));
		var btnw=lbtn.outerWidth();
		var dots=$("li",$(this));
		dots.eq(0).css("background","#E71960");
		var now=0;
		var next=0;
		function mo(type){
			if(type=="r"){
				next++;
				if(next>=as.length){
					next=as.length-1;
					return false;
				}
				as.eq(now).animate({left:-w});
				as.eq(next).animate({left:0});
			}else if(type=="l"){
				next--;
				if(next<0){
					next=0;
					return false;
				}
				as.eq(now).animate({left:w});
				as.eq(next).animate({left:0});	
			}
			now=next;
			dots.css("background","").eq(next).css("background","#E71960");

		}
		
		$(this).hover(function(){
			lbtn.stop(true,true);
			rbtn.stop(true,true);
			lbtn.animate({left:0},200)
			rbtn.animate({right:0},200)
		},function(){
			lbtn.stop(true,true);
			rbtn.stop(true,true);
			lbtn.animate({left:-btnw},200)
			rbtn.animate({right:-btnw},200)
		})
		rbtn.mousedown(function(event){
			event.preventDefault();
		}).click(function(){
			mo("r");
		})

		lbtn.mousedown(function(event){
			event.preventDefault();
		}).click(function(){
			mo("l");
		})
		dots.click(function(){
			var index=$(this).index();
			if(index>now){
				mo("r");
			}else if(index<now){
				mo("l");
			}
		})
		
		
	})
	/***************************边框效果******************************/
	
	$(".line").hover(function(){
		var w=$(this).outerWidth();
		var h=$(this).outerHeight();
		$(".line_top",$(this)).stop(true,false);
		$(".line_bottom",$(this)).stop(true,false);
		$(".line_left",$(this)).stop(true,false);
		$(".line_right",$(this)).stop(true,false);
		$(".line_top",$(this)).animate({width:w});
		$(".line_bottom",$(this)).animate({width:w});
		$(".line_left",$(this)).animate({height:h});
		$(".line_right",$(this)).animate({height:h});
	},function(){
		$(".line_top",$(this)).stop(true,false);
		$(".line_bottom",$(this)).stop(true,false);
		$(".line_left",$(this)).stop(true,false);
		$(".line_right",$(this)).stop(true,false);
		$(".line_top",$(this)).animate({width:0});
		$(".line_bottom",$(this)).animate({width:0});
		$(".line_left",$(this)).animate({height:0});
		$(".line_right",$(this)).animate({height:0});
	})


	/***************************楼层左侧小轮播******************************/
	$(".scroller").each(function(){
		var scrollerouter=$(".scrollerouter",$(this));
		var w=$(".scrollerinner",scrollerouter).outerWidth();
		var prev=$(this).nextAll(".prev");
		var next=$(this).nextAll(".next")
		function moveside(){
			scrollerouter.stop(true,true);
			scrollerouter.animate({left:-w},function(){
				$(".scrollerinner",scrollerouter).first().appendTo(scrollerouter);
				scrollerouter.css("left",0);
			})
		}
		next.hover(function(){
			$(this).css("backgroundPosition","-42px");
		},function(){
			$(this).css("backgroundPosition","-28px");

		})
		prev.hover(function(){
			$(this).css("backgroundPosition","-14px");
		},function(){
			$(this).css("backgroundPosition","0");

		})
		next.click(function(){
			moveside();
		})
		prev.click(function(){
			$(".scrollerinner",scrollerouter).last().insertBefore($(".scrollerinner",scrollerouter).first());
			scrollerouter.animate({left:-w},0,function(){
				scrollerouter.animate({left:0});
			})
		})

	})

	/********************************右称导航 楼层跳转 *********************************/
	var floor=$(".floor");
	var floornav=$(".float_nav>a").not(".float_nav>a:last");
	var nows=0;
	$(window).scroll(function(){
		var tops=$(window).scrollTop();
		if(tops>760){
			$(".float_nav").fadeIn(100);
		}else{
			$(".float_nav").fadeOut(100);
		}
		floor.each(function(num){
			if($(this).offset().top<=tops){
				floornav.removeClass("hover").eq(num).addClass("hover");
				nows=num;
			}
			
		})
		if(tops<2000){
			floornav.removeClass("hover");
		}
	
	})
	floornav.click(function(){
		var index=$(this).index();
		$(this).removeClass("hover").eq(num).addClass("hover");
		$("html,body").animate({scrollTop:floor.eq(index).offset().top})
		nows=index;
	})
	floornav.hover(function(){
		if(nows!=$(this).index()){
			$(this).addClass("hover");
		}
		
	},function(){
		if(nows!=$(this).index()){
			$(this).removeClass("hover");
		}
	})

	/*********返回顶部********/ 
	$(".backtop").hover(function(){
		$(this).addClass("hover");
	},function(){
			$(this).removeClass("hover");
	})
	$(".backtop").click(function(){
		$("html,body").animate({scrollTop:0})

	})
})