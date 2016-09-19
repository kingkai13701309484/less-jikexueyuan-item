define(["jquery"], function($) {
    var index = function() {

        // 鼠标滑过导航左边
        // $(".nav_b_1 li").each(function(index) {
        // 	$(".nav_b_1 li,.nav_h").mouseover(function() {
        // 		$(this).css("color", "#35b558");
        // 		$(".nav_h").show();
        // 	}).mouseout(function() {
        // 		$(this).css("color", "");
        // 		$(".nav_h").hide();
        // 	});
        // });
        $(".nav_b_1 li,.nav_h").each(function(index) {
            $(this).mouseover(function() {
                $(this).css("color", "#35b558");
                $(".nav_h").show();
                $(".nav_h ul").eq(index).css({
                    background: "#eee"
                });
                $(".triangle").eq(index).css({
                    display: "block"
                });
            }).mouseout(function() {
                $(this).css("color", "");
                $(".nav_h").hide();
                $(".nav_h ul").eq(index).css({
                    background: ""
                });
                $(".triangle").eq(index).css({
                    display: ""
                });
            });
        });
        $(".nav_h li").hover(function() {
            $(this).parent().css({
                background: "#eee",
            });
        }, function() {
            $(this).parent().css({
                background: "",
            });
        });
        $(".nav_h ul").hover(function() {
            $(this).css({
                background: "#eee"
            });
            $(this).children("div").css({
                display: "block"
            });
        }, function() {
            $(this).css({
                background: ""
            });
            $(this).children("div").css({
                display: ""
            });
        });
        // $(".triangle").hover(function(){
        // 	$()
        // },function(){

        // });
        // 鼠标滑过导航右边
        $(".nav_b_2 li").mouseover(function() {
            $(this).css("color", "#35b558");
        }).mouseout(function() {
            $(this).css("color", "");
        });







    }
    return index;
});
