		$(document).ready(function(){
            $("#icon1").click(function(){
                $("#first_visit").css({display:'none',});
                $("#icon1").attr("src", "images/icon_intro_click.png");
                $("#icon2").attr("src", "images/icon_mak.png");
                $("#icon3").attr("src", "images/icon_work.png");
                $("#icon1_down").slideDown(500);
                $("#icon2_down").slideUp(500);
                $("#icon3_down").slideUp(500);
                $("#int").fadeIn(2000);
                $("#int").css({
                display:'block',
                height:'400px'
            	},1250);
            	$("#mak").css({
                display:'none',
                height:'400px'
            	},1250);
            	$("#wor").css({
                display:'none',
                height:'none'
            	},1250);
            });
	        $("#icon2").click(function(){
                $("#first_visit").css({display:'none',});
                $("#icon2").attr("src", "images/icon_mak_click.png");
                $("#icon1").attr("src", "images/icon_intro.png");
                $("#icon3").attr("src", "images/icon_work.png");
                $("#icon2_down").slideDown(500);
                $("#icon1_down").slideUp(500);
                $("#icon3_down").slideUp(500);
                $("#mak").fadeIn(2000);
                $("#mak").css({
                display:'block',
                height:'400px'
            	},1250);
            	$("#int").css({
                display:'none',
                height:'400px'
            	},1250);
            	$("#wor").css({
                display:'none',
                height:'none'
            	},1250);
	        	});
	        $("#icon3").click(function(){
                $("#first_visit").css({display:'none',});
                $("#icon3").attr("src", "images/icon_work_click.png");
                $("#icon2").attr("src", "images/icon_mak.png");
                $("#icon1").attr("src", "images/icon_intro.png");
                $("#icon3_down").slideDown(500);
                $("#icon2_down").slideUp(500);
                $("#icon1_down").slideUp(500);
                $("#wor").fadeIn(2000);
                $("#wor").css({
                display:'block',
                height:'400px'
            	},1250);
            	$("#mak").css({
                display:'none',
                height:'400px'
            	},1250);
            	$("#int").css({
                display:'none',
                height:'none'
            	},1250);
	        	});
 		});