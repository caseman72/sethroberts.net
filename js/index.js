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
