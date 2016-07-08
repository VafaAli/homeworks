
// $(document).ready(function(){
// 	$("#input").keypress(function(){
// 		var element = $(this).val();
// 		var span = element.substr(element.length -1, 1);
// 		var colorCode1 = Math.floor(Math.random() * 255);
// 		var colorCode2 = Math.floor(Math.random() * 255);
// 		var colorCode3 = Math.floor(Math.random() * 255);
// 		$(".emptyText").append('<span style="color:rgb('+colorCode1+','+colorCode2+','+colorCode3+')">' + span + '</span>');


// 	});
// });

// $(".upside").hover(function(){
// 	$(this).slideUp(3000,function(){
// 		$(".downside").slideDown(3000)
// 	});
// })


$(document).ready(function(){
    $(".btn").click(function(){
        $(".sld").slideUp("slow",function(){
        	$(".circle").fadeIn("1000", function(){
        		$(this).animate({left: '250px'});
                $(this).animate({top: '+=250px'});
                $(this).animate({left: '0px'});
                $(this).animate({top: '-=250px'});
        	});
        });
    });
});