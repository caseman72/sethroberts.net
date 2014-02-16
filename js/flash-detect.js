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

