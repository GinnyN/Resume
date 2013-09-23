$(document).on("ready",function(){
	var colors = ["magenta","yellow","cyan","green","purple"];
	var i = 0;

	setInterval( function(){
		$(".jumbotron").removeClass(colors[i]);
		i++;
		if(i < colors.length);
		else
			i = 0;
		$(".jumbotron").addClass(colors[i]);

	},4000)
});