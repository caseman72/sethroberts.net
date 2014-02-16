var FlashDetect = new function() {
  var c = this;
  c.installed = false;
  var e = [{name:"ShockwaveFlash.ShockwaveFlash.7", version:function(a) {
    return d(a)
  }}, {name:"ShockwaveFlash.ShockwaveFlash.6", version:function(a) {
    var b = "6,0,21";
    try {
      a.AllowScriptAccess = "always", b = d(a)
    }catch(c) {
    }
    return b
  }}, {name:"ShockwaveFlash.ShockwaveFlash", version:function(a) {
    return d(a)
  }}], d = function(a) {
    var b = -1;
    try {
      b = a.GetVariable("$version")
    }catch(c) {
    }
    return b
  };
  c.FlashDetect = function() {
    if(navigator.plugins && navigator.plugins.length > 0) {
      var a = navigator.mimeTypes;
      if(a && a["application/x-shockwave-flash"] && a["application/x-shockwave-flash"].enabledPlugin && a["application/x-shockwave-flash"].enabledPlugin.description) {
        c.installed = true
      }
    }else {
      if(navigator.appVersion.indexOf("Mac") == -1 && window.execScript) {
        for(a = 0;a < e.length;a++) {
          var b = -1;
          try {
            b = new ActiveXObject(e[a].name)
          }catch(d) {
            b = {activeXError:true}
          }
          if(!b.activeXError) {
            c.installed = true
          }
        }
      }
    }
  }()
};
FlashDetect.JS_RELEASE = "1.0.4.1";

$(document).ready(function(){
  var quotes = $("#quoteBox1").find("p").hide()
    , lastQ = quotes.length
    , index = Math.floor(Math.random()*(lastQ--));

  for(var i=0; i<4; i++) {
    quotes.eq(index).show();
    if(++index > lastQ) index = 0;
  }

  if(window.FlashDetect && FlashDetect.installed) {
    $("#mp3_player").html([
      "<span>The Dennis Prager Show interview with Seth Roberts:</span>"
      , '<embed type="application/x-shockwave-flash" flashvars="audioUrl=http://media.sethroberts.net/reviews/dennispragermay3interview.mp3" src="http://www.google.com/reader/ui/3523697345-audio-player.swf" width="360" height="27" quality="best"></embed>'
    ].join(""));
  }
});
