
$(document).ready(function(){
	$('.main').click(function (e) {  
        console.log(e.pageX + ' , ' + e.pageY);
        var top = e.pageY - 10;
        var left = e.pageX -10;
        var letter = ($("<div></div>").text("x").addClass("point").css({'top': top, 'left': left, position:'absolute'}));
        $("body").append(letter);
	});
	$(".point").click(function(){
		$(this).remove();
	});
	$('#btn').click(function(){ 
		location.reload();
	});
});
