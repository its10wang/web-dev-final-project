$(function() {
				$('a').click(function() {
					//根据a标签的href转换为id选择器，获取id元素所处的位置，并高度减50px（这里根据需要自由设置）
					$('html,body').animate({
						scrollTop: ($($(this).attr('href')).offset().top - 50)
					}, 2000);
				});
			});