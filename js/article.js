define(["jquery"], function($) {
    var index = function() {



 
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
        // var timeoutid;
        // $(".knowledge_b dl").mouseover(function() {
        //     var dlNode = $(this);
        //     timeoutid = setTimeout(function() {
        //         dlNode.children("div").show();
        //     }, 500);
        // }).mouseout(function() {
        //     clearTimeout(timeoutid);
        //     $(this).children("div").hide();
        // });

        $(".knowledge_out").each(function(){
            var thisData=$(this);
            thisData.hover(function(){
                thisData.find("dl").css({
                    transform: "rotateY(180deg)"
                });
                thisData.find(".knowledge_hide").css({
                    transform: "rotateY(0deg)"
                });
            },function(){
                thisData.find("dl").css({
                    transform: "rotateY(0deg)"
                });
                thisData.find(".knowledge_hide").css({
                    transform: "rotateY(180deg)"
                });
            });
        });
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
                imgNode.find(".wiki_hide").show();
            }, 300);

        }).mouseout(function() {
            clearTimeout(imgset);
            $(this).css({
                background: "#ddd"
            });
            $(this).children("img").animate({
                width: "142px",
                height: "200px"
            });
            $(this).find(".wiki_hide").hide();
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
            });
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

 







    }
    return index;
});





// $(document).ready(function() {




// });
