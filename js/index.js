/**
 * Created by Merrier on 2016/4/2.
 */
$(function(){
    //-----------------------������---------------------
    $(".header_nav_item").hover(function(){
        $(this).addClass("header_item_hover");
    },function(){
        $(this).removeClass("header_item_hover");
    });


    $(".teaqua_box_arrow").hover(
        function () {
            $(this).children(".teaqua_arrow_gray").hide();
            $(this).children(".teaqua_arrow_blue").show();
        },
        function () {
            $(this).children(".teaqua_arrow_gray").show();
            $(this).children(".teaqua_arrow_blue").hide();
        }
    );

    var index=0;
    $(".teaqua_box_arrow").click(function(){
        if($(this).hasClass("teaqua_arrow_left")){
            if(index == 1){
                $(".teaqua_cer_show").animate({
                    left:"0"
                });
                index = 0;
            }else{
                return false;
            }
        }else{
            if(index == 0){
                $(".teaqua_cer_show").animate({
                    left:"-1060px"
                });
                index = 1;
            }else{
                return false;
            }
        }
    })
});