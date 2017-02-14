
/*******************************************/
//调用轮播图插件
$(function jqueryImg(){
	Qfast.add('widgets', { path: "lib/js/terminator2.2.min.js", type: "js", requires: ['fx'] });
	Qfast(false, 'widgets', function () {
		K.tabs({
			id: 'focus-box',   			 //焦点图包裹id  
			conId: "j-images",  		 //** 大图域包裹id  
			tabId:"D1fBt",  
			tabTn:"a",
			conCn: '.fcon', 					//** 大图域配置class       
			auto: 1,   								//自动播放 1或0
			effect: 'fade',   				//效果配置
			eType: 'click', 					//** 鼠标事件
			pageBt:true,              //是否有按钮切换页码
			bns: ['.prev', '.next'],  //** 前后按钮配置class                          
			interval: 3000  					//** 停顿时间  
		}); 
	});  
});


/**********************************/
//方向按钮事件
	$(function(){
		$("#j-images")
		.mouseenter(function(){
			$(".direction-btn").show()})
		.mouseleave(function(){
			$(".direction-btn").hide()
		});
	});

