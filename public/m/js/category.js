// 初始化区域滚动
mui('.category-left .mui-scroll-wrapper').scroll({
    indicators:false,
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
mui('.category-right .mui-scroll-wrapper').scroll({
    indicators:true,
    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});


