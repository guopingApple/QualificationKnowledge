(function($){
	var defaults = {
		
	};
	 
	var methods = {
		init:function(opts){
			var op  = $.extend({},defaults, opts);
			var that = this;
			$(window).resize(function(){
				methods.doScroll(that,op);
			});
			$(window).scroll(function(){
				methods.doScroll(that,op);
			});
				
			$(window).resize();
		},
		load:function(method,url,data,callback,el){
			ajax(method,url,data,function(json){
				if($.isFunction(callback)){
					callback(json,el);
				}
			});
		},doScroll:function(that,op){
					var totalHeight = parseInt($(window).height());
					$(that).each(function(){
						if(!$(this).is("[loaded]")){
							var topHeight = parseInt(this.getBoundingClientRect().top);
							if(topHeight<=totalHeight){
								$(this).attr("loaded","loading");
								var code = $(this).attr("floor");
								var data ={};
								data.codes = code;
								op.callback();
//								$(this).load(code,function(){
//									if($.isFunction(op.callback)){
//										op.callback(json,el);
//									}
//								});
								//methods.load(op.method,op.url,data,op.loadCallback,$(this));
							//	console.log(topHeight+" aaa "+$(this).attr("id"));
							}
							
						}
						
					});
		}
	};
	$.fn.scrollScreen = function(method) {
		if (methods[method]) {
			var arr = Array.prototype.slice.call(arguments,1);
			return methods[method].apply(this, arr);
		} else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		} else {}
	};
})(jQuery);

//(function($){
//	var defaults = {
//		
//	}
//	 
//	var methods = {
//		init:function(opts){
//			var op  = $.extend({},defaults, opts);
//			var that = this;
//			$(window).resize(function(){
//				methods.doScroll(that,op);
//			});
//			$(document).scroll(function(){
//				methods.doScroll(that,op);
//			});
//				
//			
//		},
//		load:function(method,url,data,callback,el){
//			ajax(method,url,data,function(json){
//				if($.isFunction(callback)){
//					callback(json,el);
//				}
//			})
//		},doScroll:function(that,op){
//		//��ǰ��ҳ�ĵ�����ĸ߶�
//					var totalHeight = parseInt($(window).height());
//					$(that).each(function(){
//						if(!$(this).is("[loaded]")){
//							var topHeight = parseInt(this.getBoundingClientRect().top);
//							if(topHeight<=totalHeight){
//								$(this).attr("loaded","loading");
//								var code = $(this).attr("code");
//								var data ={};
//								data.codes = code;
//								
//								methods.load(op.method,op.url,data,op.loadCallback,$(this));
//								console.log(topHeight+" aaa "+$(this).attr("id"));
//							}
//							
//						}
//						
//					});
//		}
//	};
//	$.fn.scrollScreen = function(method) {
//		if (methods[method]) {
//			var arr = Array.prototype.slice.call(arguments,1);
//			return methods[method].apply(this, arr);
//		} else if (typeof method === 'object' || !method) {
//			return methods.init.apply(this, arguments);
//		} else {}
//	}
//})(jQuery);
