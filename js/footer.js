define(["jquery"], function($) {
    var index = function() {






        // 鼠标滑过底部li时的效果
        $(".footer_b").find("li").hover(function() {
            $(this).css({
                color: "#35b558"
            });
        }, function() {
            $(this).css({
                color: ""
            });
        });
        $(".footer_r_2 p,.footer_r_4 p").hover(function() {
            $(this).css({
                color: "#35b558"
            });
        }, function() {
            $(this).css({
                color: ""
            });
        });



    }
    return index;
});
