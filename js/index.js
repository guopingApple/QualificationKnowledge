/**
 * Created by eqiao on 2017/7/21.
 */
(function($){   //形成闭包，将作用域进行限定

	$.fn.Tab = function(){
		var obj = {};
		obj.li = $(this).find('h3 ul li');
		obj.div = $(this).find('.Qservice-con-tabs .tabs-con');
		
		obj.li.each(function(i){
			$(this).on('click',function(){
				obj.li.removeClass('color_blue');
				obj.div.css('display','none');
				$(this).addClass('color_blue');
				obj.div.eq(i).css('display','block');
			})
		})
	}
	
    $.fn.Scroll = function(){
		var obj = {};
		obj.This = $(this);
		obj.list = obj.This.find('p');
		var top = -16,// 移动距离
		num = 1//列表个数
		
		obj.move = function(){
			if (obj.list.length > 1) {
				num ++ ;
				if (num == obj.list.length) {
					obj.This.css('top', '0px');
					num = 1;
					top = -16;
				}else{
					top -= 16;
				}
				obj.This.stop(true).animate({
					top : top  + "px" //向上移动一个p
				}, 500);
			}
		}
		setInterval( obj.move, 1500);
	}

})(jQuery);

$(document).ready(function () {

    /*进入屏幕后加载效果*/
    $(function () {
        $(".w_step_ul").scrollScreen({
            callback: function () {
                $(".w_step_ul").each(function () {
                    $('.w_step_ul').addClass('w_step_ulOn');
                });
            }
        })
    });
	 /*楼层描点链接*/
    var flag = true;
    /*头部样式*/
    $('.nav ul li a').click(function () {
        $('.nav').addClass('shadow w_navFixed');
        $('.nav ul li a').removeClass('current');
        $(this).addClass('current');
    });

    $('#w_nav1,.goTop').click(function () {
        $('.nav').removeClass('shadow w_navFixed');
        flag = false;
        $("html,body").animate({scrollTop: $("#div1").offset().top-70}, 600, function () {
            flag = true;
        });
    });
    $('#w_nav2').click(function () {
        flag = false;
        $("html,body").animate({scrollTop: $("#div2").offset().top-70}, 600, function () {
            flag = true;
        });
    });
    $('#w_nav3').click(function () {
        flag = false;
        $("html,body").animate({scrollTop: $("#div3").offset().top-70}, 600, function () {
            flag = true;
        });
    });
    $('#w_nav4,.f1_4').click(function () {
    	$('#w_nav4').addClass('w_navOn').siblings().removeClass('w_navOn');
        flag = false;
        $("html,body").animate({scrollTop: $("#div4").offset().top-70}, 600, function () {
            flag = true;
        });
    });
    $('#w_nav5').click(function () {
        flag = false;
        $("html,body").animate({scrollTop: $("#div5").offset().top-70}, 600, function () {
            flag = true;
        });
    });
    $('#w_nav6').click(function () {
        flag = false;
        $("html,body").animate({scrollTop: $("#div6").offset().top+100}, 600, function () {
            flag = true;
        });
    });
	
    
    // 左右滑动 Arrow
				
	var Arrow = function(elem){
		var obj= {};
		obj.al = $(elem).find('.arrow_l');
		obj.ar = $(elem).find('.arrow_r');
		
		// li 的个数
		obj.li_len = $(elem).find('.tabs ul li').length;
		
		// 可以滑动的页数
		obj.page = $(elem).find('ul').length;
		
		$(elem).hover(function(){
			
			if (obj.li_len > 6) {
				obj.ar.css('display','block');
				obj.al.css('display','block');
			}
		},function(){
			obj.ar.css('display','none');
			obj.al.css('display','none');
		})
		var left = 0;var n = 1;
		//向左移动
		obj.ar.on('click',function(){console.log(n);
			if (n < obj.page) {
				// 向左移动一页
				left = left - 729;
				$(elem).find('.tabs').animate({
					left : left + "px"
				}, 500);
				n ++;
				if (n > 1) {
					$(obj.al).removeClass('arrow_l_dis');
				}
				if (n == obj.page) {
					$(this).addClass('arrow_r_dis');
					$(obj.al).removeClass('arrow_l_dis');
				}
			}
		})
		//向右移动
		obj.al.on('click',function(){console.log(n);
			if (n > 1 && n <= obj.page ) {
				left = left + 729;
				$(elem).find('.tabs').animate({
					left : left + "px"
				}, 500);
				n--;
				if (n < obj.page) {
					$(obj.ar).removeClass('arrow_r_dis');
				}
				if (n == 1) {
					$(this).addClass('arrow_l_dis');
					$(obj.ar).removeClass('arrow_r_dis');
				}
			}
		})
	}
	Arrow("#tabs1");
	Arrow("#tabs2");
    Arrow("#tabs3");
	Arrow("#tabs4");
	Arrow("#tabs5");
    Arrow("#tabs6");
	Arrow("#tabs7");
	
	// 常见问题问答
	var QA = function(elem){
		var obj = { };
		obj.page = $(elem).find('ul li').length;
		obj.prev = $(elem).find('.pages a.prev');
		obj.next = $(elem).find('.pages a.next');
		
		$(elem).find('ul').width( ( obj.page * 205 ) + "px" );
		
		$(elem).find('.pages em').html(obj.page);
		
		var left = 0;var n = 1;
		// 下一个问题
		obj.next.click(function(){
			if (n < obj.page) {
				left = left - 205;
				$(elem).find('ul').animate({
					left : left + "px"
				}, 500);
				n ++;
				$(elem).find('.pages span').html(n);
			}else{
				console.log('没有更多~');
			}
		})
		//上一个问题
		obj.prev.on('click',function(){
			if (n > 1 && n <= obj.page ) {
				left = left + 205;
				$(elem).find('ul').animate({
					left : left + "px"
				}, 500);
				n--;
				$(elem).find('.pages span').html(n);
			}else{
				console.log('没有更多~');
			}
		})
		
	}
	QA("#QA1");
	QA("#QA2");
	
	// Top 100 
	var Top = function(elem){
		var obj = { };
		obj.li = $(elem).find('ul li').length;
		console.log(obj.li);
		obj.prev = $(elem).find('.ars a.al');
		obj.next = $(elem).find('.ars a.ar');
		
		
		//总页数
		obj.page = Math.ceil( obj.li % 4 );
		
		if (obj.li % 4 == 0) {
			obj.page = obj.li / 4;
		}else{
			obj.page =parseInt(obj.li / 4) + 1;
		}
		console.log(obj.page);
		
		var left = 0;var n = 1;
		// 下一页
		obj.next.click(function(){
			if (n < obj.page) {
				left = left - 1220;
				$(elem).find('.top100-list ul').animate({
					left : left + "px"
				}, 500);
				n ++;
				if (n > 1) {
					$(obj.prev).removeClass('al_dis');
				}
				if (n == obj.page) {
					$(this).addClass('ar_dis');
					$(obj.prev).removeClass('al_dis');
				}
			}else{
				console.log('没有更多~');
			}
		})
		//上一页
		obj.prev.on('click',function(){
			if (n > 1 && n <= obj.page ) {
				left = left + 1220;
				$(elem).find('.top100-list ul').animate({
					left : left + "px"
				}, 500);
				n--;
				console.log(n);
				if (n < obj.page) {
					$(obj.next).removeClass('ar_dis');
				}
				if (n == 1) {
					$(this).addClass('al_dis');
					$(obj.next).removeClass('ar_dis');
				}
			}else{
				console.log('没有更多~');
			}
		})
	}
	Top("#top100")
});





