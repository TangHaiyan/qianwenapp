
(function(){

	// $('.top-nav li').click(function(e){
	// 	console.log(1);
		// $('.top-nav').removeClass('.active');
		// $(this).addClass('active');

     //window.onresize=function(){
       // function adapt(designWidth, rem2px){
       //    var d = window.document.createElement('div');
       //    d.style.width = '1rem';
       //    d.style.display = "none";
       //    var head = window.document.getElementsByTagName('head')[0];
       //    head.appendChild(d);
       //    var defaultFontSize = parseFloat(window.getComputedStyle(d, null).getPropertyValue('width'));
       //    d.remove();
       //    document.documentElement.style.fontSize = window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';

       //    var x=window.innerWidth / designWidth * rem2px / defaultFontSize * 100 + '%';
       //    //console.log(x);

       //    var st = document.createElement('style');
       //    var portrait = "@media screen and (min-width: "+window.innerWidth+"px) {html{font-size:"+ ((window.innerWidth/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}";
       //    var landscape = "@media screen and (min-width: "+window.innerHeight+"px) {html{font-size:"+ ((window.innerHeight/(designWidth/rem2px)/defaultFontSize)*100) +"%;}}"
       //    st.innerHTML = portrait + landscape;
       //    console.log(st.innerHTML);
       //    head.appendChild(st);
       //    return defaultFontSize
       //  };
       //  var defaultFontSize = adapt(640, 100);
        //console.log(defaultFontSize);
	     //}
      
       //控制循环间隔时间
       $('#myCarousel').carousel({
        interval:2000,
       })

       //点击切换箭头方向
       $('.intros h3').on('click',function(){
          if ($(this).next().is(":hidden")) {
            $(this).removeClass('glyphicon-chevron-down');
            $(this).addClass('glyphicon-chevron-up');
          }else{
            $(this).addClass('glyphicon-chevron-down');
            $(this).removeClass('glyphicon-chevron-up');            
          }
       })
     

       var init = function(){
         //初次加载时，判断屏幕太小，是否显示详细信息，显示箭头方向
         if (window.innerWidth >= 768) {
            $('.intros .collapse').each(function(){
              $(this).addClass('in')
            })
            $('.intros h3').each(function(){
              $(this).addClass('glyphicon-chevron-up');
              $(this).removeClass('glyphicon-chevron-down');                
            })   
         }else{
            $('.intros .collapse').each(function(){
              $(this).removeClass('in')
            })
            $('.intros h3').each(function(){
              $(this).removeClass('glyphicon-chevron-up');
              $(this).addClass('glyphicon-chevron-down');                
            })
          }

       }
       //初始加载渲染
       init();
    
       //屏幕窗口变化时再判断
       $(window).resize(function(){
         init();
      })
})();

