var callback = function (){
  // do stuff after loaded

  $( "#rhs" ).prepend( '<textarea id="kws"></textarea>'  );

  $( "div.g div .rc div div[class*='explore-main'] div div:not([class*='container'])" ).each(function( index ) {
    $( "#kws" ).append (  $( this ).text() + "\r\n" ) ;
  });

  console.log(data);
}


javascript:(function() {
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
})();
