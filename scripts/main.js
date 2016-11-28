
(function(){

	// $('.top-nav li').click(function(e){
	// 	console.log(1);
		$('.top-nav').removeClass('.active');
		$(this).addClass('active');


		   function adapt(designWidth, rem2px){
          var d = window.document.createElement('div');
          d.style.width = '1rem';
          d.style.display = "none";
          var head = window.document.getElementsByTagName('head')[0];
          head.appendChild(d);
          var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
          d.remove();
          document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';

          var x=window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
          console.log(x);

          var st = document.createElement('style');
          var portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+ ((window.innerWidth/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}";
          var landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+ ((window.innerHeight/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}"
          st.innerHTML = portrait + landscape;
          console.log(st.innerHTML);
          head.appendChild(st);
          return defaultFontSize
        };
        var defaultFontSize = adapt(640, 100);
        console.log(defaultFontSize);
	
})();

