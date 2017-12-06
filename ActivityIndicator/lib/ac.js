var acInd = {
	show:function()
	{
        var outS = "";
        outS += "<div class='wrapper'>" +
            "<div class='spinner'>" +
            "</div>"+
			"</div>";
        $("body").append(outS);
	},
	
	hide:function()
	{
        $(".wrapper").remove();
	}
}