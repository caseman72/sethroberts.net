$(document).ready(function(){
  var quotes = $("#quoteBox1").find("p").hide()
    , lastQ = quotes.length
    , index = Math.floor(Math.random()*(lastQ--));

  for(var i=0; i<4; i++) {
    quotes.eq(index).show();
    if(++index > lastQ) index = 0;
  }
});
