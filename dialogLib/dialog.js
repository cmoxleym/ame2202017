var dialogLib = {
  alert:{
    show: function(msg, label){
      label = label || "OK";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<button onclick='dialogLib.alert.hide()'>" + label + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
    },
    hide: function(){
      $(".wrapper").remove();
    }
  },
  
   prompt:{
	_getField: function(x){
		var out = "";
		out += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + x + "</h1>"+
            "<button onclick='dialogLib.prompt.hide()'> OK </button>"+
          "</div>"+
        "</div>";
      $("body").append(out);
	},
	_submitted: function()
	{
		var x =  "Entered: " + document.getElementById("inputField").value;
		var y = dialogLib.prompt._getField(x);
		//dialogLib.prompt.hide();
	},
	
	
	
    show: function(msg, label){
      label = label || "Submit";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
			"<input type='text' id='inputField'>"+
            "<button onclick='dialogLib.prompt._submitted()'>" + label + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
	  //_getField = "Entered: " + document.getElementById("inputField").value;
    },
	
	
	
    hide: function(){
      $(".wrapper").remove();
    }
  },

  confirm:{
    _yesClicked: function(){
      _yCB();
      dialogLib.confirm.hide();  
    },
    _noClicked: function(){
      _nCB();
      dialogLib.confirm.hide();  
    },
    _yCB: function(){},
    _nCB: function(){},
    show: function(msg, yesLabel, noLabel, yesCB, noCB){
      yesLabel = yesLabel || "OK";
      noLabel = noLabel || "Cancel";
      _yCB = yesCB = yesCB || function(){};
      _nCB = noCB = noCB || function(){};

      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<button onclick='dialogLib.confirm._noClicked()'>" + noLabel + "</button>"+
            "<button onclick='dialogLib.confirm._yesClicked()'>" + yesLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
    },
    hide: function(){
      $(".wrapper").remove();
    }
  }
}