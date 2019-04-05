// 1.1 MUI 初始化轮播图设置自动轮播图
var slider = mui("#slider");
			// document.getElementById("switch").addEventListener('toggle', function(e) {
			// 	if (e.detail.isActive) {
					slider.slider({
						interval: 1000
					});
			// 	} else {
			// 		slider.slider({
			// 			interval: 0
			// 		});
			// 	}
            // });
            
            // 初始化区域滚动
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
			});
			

			