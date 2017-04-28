$(document).ready(function() {
            $(".toggle").click(function() {
                $(this).toggleClass("active");
                $(".nav").slideToggle();
            });
            $(".nav > ul > li:has(ul) > a").append('<div class="arrow-bottom"></div>');

            $(".introIcon480").click(function(){
                $(".intro480").fadeIn(1500);
                $(".introIcon480").css({background:'#f77f7f', color:"#fff"});
                $(".makingIcon480").css({background:'#fff', color:"#f77f7f"});
                $(".workIcon480").css({background:'#fff', color:"#f77f7f"});
                $(".first_visit480").css({display:'none'});
                $(".making480").css({display:'none'});
                $(".work480").css({display:'none'});
            });
            $(".makingIcon480").click(function(){
                $(".making480").fadeIn(1500);
                $(".makingIcon480").css({background:'#f77f7f', color:"#fff"});
                $(".workIcon480").css({background:'#fff', color:"#f77f7f"});
                $(".introIcon480").css({background:'#fff', color:"#f77f7f"});
                $(".first_visit480").css({display:'none'});
                $(".work480").css({display:'none'});
                $(".intro480").css({display:'none'});
            });
            $(".workIcon480").click(function(){
                $(".work480").fadeIn(1500);
                $(".workIcon480").css({background:'#f77f7f', color:"#fff"});
                $(".makingIcon480").css({background:'#fff', color:"#f77f7f"});
                $(".introIcon480").css({background:'#fff', color:"#f77f7f"});
                $(".first_visit480").css({display:'none'});
                $(".intro480").css({display:'none'});
                $(".making480").css({display:'none'});
            });
        });