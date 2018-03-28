var callback = function (){ 
  // do stuff after loaded

  var kw = $("#lst-ib").val();
  $("#rhs").prepend('<iframe src="https://www.marketingminer.com/cs/i-profiler/' + kw + '" width="100%" height="700px" frameborder="0" allowfullscreen=""></iframe>');
  $("#rhs").prepend('<a href="https://www.marketingminer.com/cs/login" taget="_blank">Prvně se přihlaste do Marketing Mineru.</a>');
  $( "#rhs" ).prepend( '<textarea id="kws"></textarea>'  );

  $( "div.g div .rc div div[class*='explore-main'] div div:not([class*='container'])" ).each(function( index ) {
    $( "#kws" ).append (  $( this ).text() + "\r\n" ) ;
  });
  
  
} 
    

setTimeout(function () {
    function l(u, i) {
        var d = document;
        if (!d.getElementById(i)) {
            var s = d.createElement('script');
            s.src = u;
            s.onload = callback;
            s.id = i;
            d.body.appendChild(s);
        }
    }
    l('//code.jquery.com/jquery-3.2.1.min.js', 'jquery')
}, 1000)();
