define(["jquery"], function($) {
    var index = function() {


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
        // 鼠标滑过职业路径图里的内容
        $(".profession_b dl").mouseover(function() {
            $(this).css({
                border: "1px solid #35b558"
            
                
            });
            $(this).children("input").css({
                background: "#35b558",
                color: "#fff",
            });
        }).mouseout(function() {
            $(this).css({
                border:""
         
            });
            $(this).children("input").css({
                background: "",
                color: ""
            });
        });
        // 鼠标滑过知识体系图显示
        // $(".knowledge_b dl").each(function() {
        // 	var t=$(this);
        // 	$(this).mouseover(function() {
        // 		timeoutid = setTimeout(function() {
        // 			t.children("div").show();
        // 		}, 300);
        // 	}).mouseout(function() {
        // 		clearTimeout(timeoutid);
        // 		// t.children("div").hide();
        // 	});

        // });
        var timeoutid;
        $(".knowledge_b dl").mouseover(function() {
            var dlNode = $(this);
            timeoutid = setTimeout(function() {
                dlNode.children("div").show();
            }, 500);
        }).mouseout(function() {
            clearTimeout(timeoutid);
            $(this).children("div").hide();
        });
        // $(".knowledge_b dl").mouseover(function(){
        // 	$(this).children("div").show();
        // }).mouseout(function(){
        // 	$(this).children("div").hide();
        // });

        // 鼠标滑过精品系列课程隐藏的内容
        $(".fine_b dl").mouseover(function() {
            $(this).css({
                border: "1px solid #35b558"
            });
            $(this).children("div").show();
        }).mouseout(function() {
            $(this).css({
                border: ""
            });
            $(this).children("div").hide();
        });
        // 鼠标滑过精品系列课程隐藏的内容里面的内容
        $(".fine_hide p").mouseover(function() {
            $(this).css({
                color: "#35b558"
            });
        }).mouseout(function() {
            $(this).css({
                color: ""
            });
        });
        $(".fine_hide input").mouseover(function() {
            $(this).css({
                background: "#48D870"
            });
        }).mouseout(function() {
            $(this).css({
                background: ""
            });
        });
        // 鼠标滑过wiki的内容
        var imgset;
        $(".wiki_l dt").mouseover(function() {
            var imgNode = $(this);
            imgset = setTimeout(function() {
                imgNode.css({
                    background: "#ddd"
                });
                imgNode.children("img").animate({
                    width: "132px",
                    height: "200px"
                });
            }, 300);
        }).mouseout(function() {
            clearTimeout(imgset);
            $(this).css({
                background: "#fff"
            });
            $(this).children("img").animate({
                width: "142px",
                height: "200px"
            });
        });
        $(".wiki_l").mouseover(function() {
            $(this).css({
                border: "1px solid #35b558"
            });
        }).mouseout(function() {
            $(this).css({
                border: ""
            });
        });
        $(".wiki_l").find("ul li,dl dd").mouseover(function() {
            $(this).css({
                color: "#35b558"
            });
        }).mouseout(function() {
            $(this).css({
                color: ""
            });
        });
        // 鼠标滑过内容导航时的效果
        $(".cnav_t").find("li").each(function(index) {
            var liNode1 = $(this);
            $(this).mouseover(function() {
                $(".cnav_lis").removeClass("cnav_lis");
                liNode1.addClass("cnav_lis");
                $(".canv_li_triangle").removeClass("canv_li_triangle");
                liNode1.children("div").addClass("canv_li_triangle");
                $(".cnav_show").removeClass("cnav_show");
                $(".cnav_b").eq(index).addClass("cnav_show");
            });
        });
        $(".cnav_out").hover(function() {
            $(this).children(".cnav_hove").css({
                display: "block",
            }).slideDown(1000);
        }, function() {
            $(this).children(".cnav_hove").css({
                display: "none",
            });
        });
        $(".cnav_hove dd").hover(function() {
            $(this).css({
                color: "#35b558"
            });
        }, function() {
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

        // 当用户滑过战略企业时的效果	
		$(".strategy_in_r").click(function() {

            var lif = $(".strategy_in").find("img:first"),
                outerWidth = $(".strategy_in").find("img:first").outerWidth(true);

            $(".strategy_in").animate({
                left: -outerWidth + "px"
            }, 300, function() {

                $(".strategy_in").css({
                    left: 0 + "px"
                }).append(lif);
            });

        });
		
		$(".strategy_in_l").click(function() {

            var lif1 = $(".strategy_in").find("img:last"),
                outerWidth1 = $(".strategy_in").find("img:last").outerWidth(true);

            $(".strategy_in").animate({
                left: outerWidth1 + "px"
            }, 300, function() {

                $(".strategy_in").css({
                    left: 0 + "px"
                }).prepend(lif1);
            });

        });

 		$(".strategy").hover(function(){
 			$(".strategy_in_l,.strategy_in_r").show();
 		},function(){
 			$(".strategy_in_l,.strategy_in_r").hide();
 		});

        // 当用户滑过媒体报道时的效果	
		$(".media_in_r").click(function() {

            var lif2 = $(".media_in").find("img:first"),
                outerWidth2 = $(".media_in").find("img:first").outerWidth(true);

            $(".media_in").animate({
                left: -outerWidth2 + "px"
            }, 300, function() {

                $(".media_in").css({
                    left: 0 + "px"
                }).append(lif2);
            });

        });
		
		$(".media_in_l").click(function() {

            var lif3 = $(".media_in").find("img:last"),
                outerWidth3 = $(".media_in").find("img:last").outerWidth(true);

            $(".media_in").animate({
                left: outerWidth3 + "px"
            }, 300, function() {

                $(".media_in").css({
                    left: 0 + "px"
                }).prepend(lif3);
            });

        });

 		$(".media").hover(function(){
 			$(".media_in_l,.media_in_r").show();
 		},function(){
 			$(".media_in_l,.media_in_r").hide();
 		});


        // 当用户滑过合作院校时的效果	
		$(".cooperation_in_r").click(function() {

            var lif4 = $(".cooperation_in").find("img:first"),
                outerWidth4 = $(".cooperation_in").find("img:first").outerWidth(true);

            $(".cooperation_in").animate({
                left: -outerWidth4 + "px"
            }, 300, function() {

                $(".cooperation_in").css({
                    left: 0 + "px"
                }).append(lif4);
            });

        });
		
		$(".cooperation_in_l").click(function() {

            var lif5 = $(".cooperation_in").find("img:last"),
                outerWidth5 = $(".cooperation_in").find("img:last").outerWidth(true);

            $(".cooperation_in").animate({
                left: outerWidth5 + "px"
            }, 300, function() {

                $(".cooperation_in").css({
                    left: 0 + "px"
                }).prepend(lif5);
            });

        });

 		$(".cooperation").hover(function(){
 			$(".cooperation_in_l,.cooperation_in_r").show();
 		},function(){
 			$(".cooperation_in_l,.cooperation_in_r").hide();
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





// $(document).ready(function() {




// });
