define(["jquery"], function($) {
    var head = function() {


        // 鼠标滑过索索框里面的三个小内容
        $(".logo_l_3").find("li").mouseover(function() {
            $(this).css("background", "#ddd");
        }).mouseout(function() {
            $(this).css("background", "#eee");
        });
        // 鼠标滑过搜索按钮
        $(".logo_l_2,.logo_l_4").mouseover(function() {
            $(".logo_l_2").css("background", "#35b558");
            $(".logo_l_4 img").attr("src", "images/search1.png");
        }).mouseout(function() {
            $(".logo_l_2").css("background", "#fff");
            $(".logo_l_4 img").attr("src", "images/search.png");
        });
        // 点击搜索框时的效果
        $(".logo_l_1").focus(function() {
            $(".logo_l_3").hide();
            $(".logo_l_2").css("background", "#35b558");
            $(".logo_l_4 img").attr("src", "images/search1.png");
        }).blur(function() {
            $(".logo_l_3").show();
            $(".logo_l_2").css("background", "");
            $(".logo_l_4 img").attr("src", "images/search.png");
        });
        // 鼠标滑过用户名
        // var setTime;
        $(".logo_r_3,.logo_r_h").mouseover(function() {
            // setTime=setTimeout(function(){

            // },300);
            $(".logo_r_3 img").css({
                transform: "rotate(180deg)",
            });
            $(".logo_r_h").show();
        }).mouseout(function() {
            // clearTimeout(setTime);
            $(".logo_r_3 img").css({
                transform: "rotate(0deg)"
            });
            $(".logo_r_h").hide();
        });
        // 鼠标滑过logo_r_h里的li
        $(".logo_r_h li").each(function() {
            $(".logo_r_h li").mouseover(function() {
                $(this).css({
                    background: "#eee",
                    color: "#35b558"
                });
            });
            $(".logo_r_h li").mouseout(function() {
                $(this).css({
                    background: "#fff",
                    color: "#999"
                });
            });
        });







    }
    return head;
});
