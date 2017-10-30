<<<<<<< HEAD
var dialogLib = {
  alert:{
		_okClicked: function(){
			  _okCB();
			  dialogLib.alert.hide();  
			},
		_okCB: function(){},
    show: function(msg, label, callback){
		_okCB =callback = callback || function(){};
      label = label || "OK";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<button onclick='dialogLib.alert._okClicked()'>" + label + "</button>"+
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
            "<h3>" + x + "</h3>"+
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
	
	
	
    show: function(msg, label, exitLabel){
      label = label || "Submit";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
			"<input type='text' id='inputField' class='input'>"+
            "<button onclick='dialogLib.prompt._submitted()'>" + label + "</button>"+
			"<button onclick='dialogLib.prompt.hide()'>" + exitLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
	  $(".wrapper .frame .input").focus();
	  //_getField = "Entered: " + document.getElementById("inputField").value;
    },
	
	
	
    hide: function(){
      $(".wrapper").remove();
    }
  },
  
  login:{
	_getUsername: function(x){
		var out = "";
		out += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h3>" + x + "</h3>"+
            "<button onclick='dialogLib.prompt.hide()'> Login </button>"+
          "</div>"+
        "</div>";
      $("body").append(out);
	},
	
	_getPassword: function(x){
		var out = "";
		out += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h3>" + x + "</h3>"+
            "<button onclick='dialogLib.login.hide()'> Login </button>"+
          "</div>"+
        "</div>";
      $("body").append(out);
	},
	
	_submitted: function()
	{
		var x = document.getElementById("uName").value;
		var y = document.getElementById("passwd").value;
		//dialogLib.prompt.hide();
	},
	
	
	
    show: function(msg, label1, exitLabel){
      label1 = label1 || "Login";
	  exitLabel = exitLabel || "Cancel";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h4>" + msg + "</h4>" +
			"Username: " + "<input type='text' id='uName' class='userInput'> <br>" +
			"Password: " + "<input type='password' id='passwd'> <br><br>" +
            "<button onclick='dialogLib.login._submitted()'>" + label1 + "</button>"+
			"<button onclick='dialogLib.login.hide()'>" + exitLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
	  $(".wrapper .frame .userInput").focus();
	  //_getField = "Entered: " + document.getElementById("inputField").value;
    },
	
	
	
    hide: function(){
      $(".wrapper").remove();
    }
  },
  
  signup:{
	_getUsername: function(x){
		var out = "";
		out += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h3>" + x + "</h3>"+
            "<button onclick='dialogLib.prompt.hide()'> OK </button>"+
          "</div>"+
        "</div>";
      $("body").append(out);
	},
	
	_getPassword: function(x){
		var out = "";
		out += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h3>" + x + "</h3>"+
            "<button onclick='dialogLib.signup.hide()'> OK </button>"+
          "</div>"+
        "</div>";
      $("body").append(out);
	},
	
	_submitted: function()
	{
		var x = document.getElementById("uName").value;
		var y = document.getElementById("passwd1").value;
		var z = document.getElementById("passwd2").value;
		var pWord = "";
		if(z == y)
		{
			pWord = z;
		}
		//dialogLib.prompt.hide();
	},
	
	
	
    show: function(msg, label1, exitLabel){
      label1 = label1 || "Login";
	  exitLabel = exitLabel || "Cancel";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h4>" + msg + "</h4>" +
			"Choose your username: " + "<input type='text' id='uName' class='userInput'> <br>" +
			"Choose a password: " + "<input type='password' id='passwd1'> <br>" +
			"Reenter your password: " + "<input type='password' id='passwd2'> <br><br>" +
            "<button onclick='dialogLib.signup._submitted()'>" + label1 + "</button>"+
			"<button onclick='dialogLib.signup.hide()'>" + exitLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
	  $(".wrapper .frame .userInput").focus();
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
=======
var dialogLib = {
  alert:{
		_okClicked: function(){
			  _okCB();
			  dialogLib.alert.hide();  
			},
		_okCB: function(){},
    show: function(msg, label, callback){
		_okCB =callback = callback || function(){};
      label = label || "OK";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
            "<button onclick='dialogLib.alert._okClicked()'>" + label + "</button>"+
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
            "<h3>" + x + "</h3>"+
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
	
	
	
    show: function(msg, label, exitLabel){
      label = label || "Submit";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h1>" + msg + "</h1>"+
			"<input type='text' id='inputField' class='input'>"+
            "<button onclick='dialogLib.prompt._submitted()'>" + label + "</button>"+
			"<button onclick='dialogLib.prompt.hide()'>" + exitLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
	  $(".wrapper .frame .input").focus();
	  //_getField = "Entered: " + document.getElementById("inputField").value;
    },
	
	
	
    hide: function(){
      $(".wrapper").remove();
    }
  },
  
  login:{
	_getFields: function(x, y){
		var out = "";
		out += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h3>" + x + " " + y + "</h3>"+
            "<button onclick='dialogLib.login.hide()'> OK </button>"+
          "</div>"+
        "</div>";
      $("body").append(out);
	},
	
	_submitted: function()
	{
		var x = document.getElementById("uName").value;
		var y = document.getElementById("passwd").value;
		//dialogLib.login._getFields(x, y);
		dialogLib.login.hide();
	},
	
    show: function(msg, label1, exitLabel){
      label1 = label1 || "Login";
	  exitLabel = exitLabel || "Cancel";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h4>" + msg + "</h4>" +
			"Username: " + "<input type='text' id='uName' class='userInput'> <br>" +
			"Password: " + "<input type='password' id='passwd'> <br>" +
            "<button onclick='dialogLib.login._submitted()'>" + label1 + "</button>"+
			"<button onclick='dialogLib.login.hide()'>" + exitLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
	  $(".wrapper .frame .userInput").focus();
	  //_getField = "Entered: " + document.getElementById("inputField").value;
    },
	
	
	
    hide: function(){
      $(".wrapper").remove();
    }
  },
  
  signup:{
	_getUsername: function(x){
		var out = "";
		out += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h3>" + x + "</h3>"+
            "<button onclick='dialogLib.login.hide()'> OK </button>"+
          "</div>"+
        "</div>";
      $("body").append(out);
	},
	
	_getPassword: function(x, y)
	{
		var out = "";
		if(x != y)
		{
			out += "<div class='wrapper'>" +
			  "<div class='frame'>" +
				"<h4>Passwords do not match. Try again.</h4>" +
				"Choose your username: " + "<input type='text' id='uName' class='userInput'> <br>" +
				"Choose a password: " + "<input type='password' id='passwd1'> <br>" +
				"Reenter your password: " + "<input type='password' id='passwd2'> <br><br>" +
				"<button onclick='dialogLib.signup._submitted()'> OK </button>"+
				"<button onclick='dialogLib.signup.hide()'> Cancel </button>"+
			  "</div>"+
			"</div>";
		}
		
		else
		{
			dialogLib.signup.hide();
		}
		
		//var x =  "Entered: " + document.getElementById("passwd1").value;
      $("body").append(out);
	},
	
	_submitted: function()
	{
		var x = document.getElementById("uName").value;
		var y = document.getElementById("passwd1").value;
		var z = document.getElementById("passwd2").value;
		dialogLib.signup._getPassword(y, z);
		//dialogLib.prompt.hide();
	},
	
	
	
    show: function(msg, label1, exitLabel){
      label1 = label1 || "Login";
	  exitLabel = exitLabel || "Cancel";
      var outS = "";
      outS += "<div class='wrapper'>" +
          "<div class='frame'>" +
            "<h4>" + msg + "</h4>" +
			"Choose your username: " + "<input type='text' id='uName' class='userInput'> <br>" +
			"Choose a password: " + "<input type='password' id='passwd1'> <br>" +
			"Reenter your password: " + "<input type='password' id='passwd2'> <br><br>" +
            "<button onclick='dialogLib.signup._submitted()'>" + label1 + "</button>"+
			"<button onclick='dialogLib.signup.hide()'>" + exitLabel + "</button>"+
          "</div>"+
        "</div>";
      $("body").append(outS);
	  $(".wrapper .frame .userInput").focus();
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
>>>>>>> b8d238ec14318a2e1e0ddbef48edd7f9456dfd56
}