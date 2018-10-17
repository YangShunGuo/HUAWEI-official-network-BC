/**
 * Created by larry on 2018/7/17.
 */
//最顶部企业网站、选择区域语言动画切换：点击一个时关闭另外一个
$("#nav-height_btn_1").on("click",function () {
    $("#worldwide").collapse("hide");
});
$("#nav-height_btn_2").on("click",function () {
    $("#navbar").collapse("hide");
});
//end
//导航栏手机笔记本动画效果
$("#nav-contact_btn_1").on("mouseover",function () {
    $(".primary-nav-enterprise-open").collapse("hide"),
    $(".primary-nav-consumer-open").collapse("show");
});
$(".primary-nav-consumer-open .container").on("mouseleave",function () {
    $(".primary-nav-consumer-open").collapse("hide");
});
//解决方案&服务动画效果
$("#nav-contact_btn_2").on("mouseover",function () {
    $(".primary-nav-consumer-open").collapse("hide"),
    $(".primary-nav-enterprise-open").collapse("show")
})
$(".primary-nav-enterprise-open .container").on("mouseleave",function () {
    $(".primary-nav-enterprise-open").collapse("hide");
})

//搜索框
$(".nav-search-btn").on("click",function () {
    $(".nav-search-btn").hide();
    $(".search-btn").show();
    $("#search-cancel-btn").show();
    // $(".icon-cancel").show();
    $(".search-open").show();
    $(".nav-contact").hide();

})
$(".icon-cancel").on("click",function () {
    $(".nav-search-btn").show();
    // $(".icon-cancel").hide();
    $("#search-cancel-btn").hide();
    $(".search-btn").hide();
    $(".search-open").hide();
    $(".nav-contact").show();
})

//大图切换
$("#myCarousel").carousel({
    interval:2000,
})
//展会活动
$("#Carousel").carousel({
     interval:2000,
})

