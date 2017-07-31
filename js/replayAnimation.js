var animationName = "animated fadeInUp";
var animationEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
var targetClass = ".animated-element"
var scrolledDown = true;
var enteredElement = false;

$(function(){
    var lastScrollTop = 0, delta = 5;
    $(window).scroll(function(event){
       var st = $(this).scrollTop();

       if(Math.abs(lastScrollTop - st) <= delta)
          return;
       if (st > lastScrollTop){
           scrolledDown = true;
       } else {
          scrolledDown = false;
       }
       lastScrollTop = st;
    });
});

inView.threshold(0.5);

inView('.animated-element').on('enter', function(el){
  if(scrolledDown){
  $(el).addClass(animationName).one(animationEnd, function(){
    $(this).removeClass(animationName);
  });
  }
  $(el).css("visibility", "visible");
});
inView('.animated-element').on('exit', function(el){
if(!scrolledDown){
  $(el).css("visibility", "hidden");
}
});
