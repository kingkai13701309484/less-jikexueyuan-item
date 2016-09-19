define(["jquery"], function($) {
    var index = function() {

       // 鼠标滑过article_l里面的li
        $(".article_l li").each(function() {
            $(".article_l li").mouseover(function() {
                $(this).css({
                    borderLeft: "2px solid #35b558",
                    borderTop: "1px solid #ddd",
                    borderBottom: "1px solid #ddd",
                    color: "#35b558",
                    background: "#fff",
                    borderRight: "#fff"
                });
                $(this).children("div").show();
            }).mouseout(function() {
                $(this).css({
                    borderLeft: "",
                    borderTop: "",
                    borderBottom: "",
                    color: "",
                    background: "#fff",
                    borderRight: ""
                });
                $(this).children("div").hide();
            });
        });
        // 鼠标滑过快讯里的内容
        $(".article_r_1 P").mouseover(function() {
            $(this).css({
                color: "#35b558"
            });
            $(".article_r_1 P").eq(0).css({
                color: ""
            });
            $(".article_r_1 P").eq(1).css({
                color: "#ff1c1c"
            });
        }).mouseout(function() {
            $(this).css({
                color: ""
            });
        });

        // 鼠标滑过banner右边下面时的效果
        $(".article_r_3 ul li").each(function(index) {
            var i = $(this);
            if (index < 4) {
                i.hover(function() {
                    $(".article_r_hide").css({
                        display: "block"
                    });
                    $(".article_r_hide4").removeClass('article_r_hide4');
                    $(".article_r_hide1 span").eq(index).addClass("article_r_hide4");
                    $(".article_r_hide3").removeClass("article_r_hide3");
                    $(".article_r_hide2").eq(index).addClass("article_r_hide3");
                }, function() {

                });
            }
        });


        $(".article_r_hide1").find("span").each(function(index) {
            var spanNode = $(this);
            $(this).hover(function() {
                $(".article_r_hide4").removeClass('article_r_hide4');
                $(this).addClass("article_r_hide4");
                $(".article_r_hide3").removeClass("article_r_hide3");
                $(".article_r_hide2").eq(index).addClass("article_r_hide3");
                spanNode.parents(".article_r_hide").css({
                    display: "block"
                });

            }, function() {
                spanNode.parents(".article_r_hide").css({
                    display: "none"
                });
            });

        });


        $(".article_r_hide2").mouseover(function() {
            $(this).parents(".article_r_hide").css({
                display: "block"
            });
        }).mouseout(function() {
            $(this).parents(".article_r_hide").css({
                display: "none"
            });
        });


        // 鼠标滑过banner时的效果

        var clone = $(".article_in img").first().clone(),
            x = 0;
        $(".article_in").append(clone);

        var size = $(".article_in img").size();
        // 动态添加底部的小按钮
        for (var j = 0; j < size - 1; j++) {
            $(".article_in_3").append("<li></li>");
        }
        $(".article_in_3 li").first().addClass("on");
        // 当用户点击剪头时，执行的函数
        $(".article_in_1").click(function() {
            moveL();

        });
        $(".article_in_2").click(function() {
            moveR();
        });
        // 左边箭头的效果
        function moveR() {
            x++;
            if (x == size) {
                $(".article_in").css({
                    left: 0
                });
                x = 1;
            }
            $(".article_in").stop().animate({
                left: -x * 560
            }, 500);
            if (x == size - 1) {
                $(".article_in_3 li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".article_in_3 li").eq(x).addClass("on").siblings().removeClass("on");
            }
        }
        // 右边箭头的效果
        function moveL() {
            x--;
            if (x == -1) {
                $(".article_in").css({
                    left: -(size - 1) * 560
                });
                x = size - 2;
            }
            $(".article_in").stop().animate({
                left: -x * 560
            }, 500);
            if (x == size - 1) {
                $(".article_in_3 li").eq(0).addClass("on").siblings().removeClass("on");
            } else {
                $(".article_in_3 li").eq(x).addClass("on").siblings().removeClass("on");
            }
        }

        // 点击底部那几个小按钮切换
        $(".article_in_3 li").click(function() {
            var index = $(this).index();
            x = index;
            $(this).addClass("on").siblings().removeClass("on");
            $(".article_in").stop().animate({
                left: -index * 560
            }, 500);
        });
        // 定时器
        var test = setInterval(function() {
            moveL();
        }, 2000)

        $(".article_c_1_1").hover(function() {
            clearInterval(test);
        }, function() {
            test = setInterval(function() {
                moveL();
            }, 2000)
        });
        // 当用户滑过banner时，箭头出现
        $(".article_c_1_1").hover(function() {
            $(".article_in_1,.article_in_2").css({
                display: "block"
            });
        }, function() {
            $(".article_in_1,.article_in_2").css({
                display: "none"
            });
        });


       // 当用户滑过banner下面3个dl时的效果	
		$(".article_c_1_2_in_r").click(function() {

            var lif4 = $(".article_c_1_2_in").find("dl:first"),
                outerWidth4 = $(".article_c_1_2_in").find("dl:first").outerWidth(true);

            $(".article_c_1_2_in").animate({
                left: -outerWidth4 + "px"
            }, 300, function() {

                $(".article_c_1_2_in").css({
                    left: 0 + "px"
                }).append(lif4);
            });

        });
		
		$(".article_c_1_2_in_l").click(function() {

            var lif5 = $(".article_c_1_2_in").find("dl:last"),
                outerWidth5 = $(".article_c_1_2_in").find("dl:last").outerWidth(true);

            $(".article_c_1_2_in").animate({
                left: outerWidth5 + "px"
            }, 300, function() {

                $(".article_c_1_2_in").css({
                    left: 0 + "px"
                }).prepend(lif5);
            });

        });

 		$(".article_c_1_2").hover(function(){
 			$(".article_c_1_2_in_l,.article_c_1_2_in_r").show();
 		},function(){
 			$(".article_c_1_2_in_l,.article_c_1_2_in_r").hide();
 		});

 		$(".article_c_1_2 dl dd").hover(function(){
 			$(this).css({
 				color:"#35b558"
 			});
 		},function(){
 			$(this).css({
 				color:""
 			});
 		});

 		$(".profession_b dl dd").hover(function(){
 			$(this).css({
 				color:"#35b558"
 			});
 		},function(){
 			$(this).css({
 				color:""
 			});
 		});






    }
    return index;
});
