$(document).ready(function(){
	const $arrow = $('.js-down');
	/*
	*	完美兼容获取滚动条顶部距离火狐+谷歌,只能取值兼容
	*   $(document).scrollTop();
	*/
	let distanceH
	$('html,body').scrollTop(0);
	let LOCK = true;// 变量控制

	// 滚动动画
	let num = 0;

	$arrow.click(function() {
		if(!LOCK) return false;
		LOCK = false;

		distanceH = $(window).height();

		num ++;

		// 曲线救国, html兼容火狐, body谷歌
		$('html,body').animate({scrollTop:distanceH*num},'normal',function() {

			LOCK = true;
		});
	});


	function scrollFunc(e) {
		if(!LOCK) return false;
		e = e || window.event;
		let rollNum;
		LOCK = false;
		distanceH = $(window).height(); // 窗口下可视高度

		if(e.wheelDelta) {
			// IE/Opera/Chrome
			rollNum =  e.wheelDelta;
			if(rollNum > 0){
				if(distanceH*num===0) {LOCK=true;return;}

				num--;
				$('html, body').animate({scrollTop:distanceH*num},600,function(){
					LOCK = true;
				});
			} else if(rollNum < 0) {
				if(distanceH*num===distanceH*2) {LOCK=true;return;}

				num++;
				$('html, body').animate({scrollTop:distanceH*num},600,function(){
					LOCK = true;
				});
			}
		} else if(e.detail) {
			// FireFox
			rollNum =  e.detail;
			if(rollNum > 0) {

				if(distanceH*num===distanceH*2) {LOCK=true;return;}

				num++;
				$('html, body').animate({scrollTop:distanceH*num},600,function(){
					LOCK = true;
				});
			}else if(rollNum < 0) {

				if(distanceH*num===0) {LOCK=true;return;}

				num--;
				$('html, body').animate({scrollTop:distanceH*num},600,function(){
					LOCK = true;
				});
			}
		}

	}

	// 鼠标滚轮
	if(document.attachEvent) {
		// IE 注册
		document.attachEvent('onmousewheel',scrollFunc);
	}
	if(document.addEventListener) {
		//  火狐注册
		document.addEventListener('DOMMouseScroll',scrollFunc,false);
	}
	window.onmousewheel=document.onmousewheel=scrollFunc; // IE/Opera/chrome

});
