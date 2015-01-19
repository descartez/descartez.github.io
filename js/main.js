// $(document).ready(function() {

//     // initial animation
//     // console.log( "ready!" );
//     // $('.title').fadeIn(2000, function(){
//     //   console.log('animation 1 should run!')
//     // });
//     // $('.nav-bar').fadeIn(2000, function(){
//     //   console.log('animation 2 should run!')
//     // });
//     // $('#about').fadeIn(2000, function(){
//     //   console.log('animation 3 should run!')
//     // });

//   // tile animation
//   (function($) {

//   *
//    * Copyright 2012, Digital Fusion
//    * Licensed under the MIT license.
//    * http://teamdf.com/jquery-plugins/license/
//    *
//    * @author Sam Sehnert
//    * @desc A small plugin that checks whether elements are within
//    *     the user visible viewport of a web browser.
//    *     only accounts for vertical position, not horizontal.


//   $.fn.visible = function(partial) {

//       var $t            = $(this),
//           $w            = $(window),
//           viewTop       = $w.scrollTop(),
//           viewBottom    = viewTop + $w.height(),
//           _top          = $t.offset().top,
//           _bottom       = _top + $t.height(),
//           compareTop    = partial === true ? _bottom : _top,
//           compareBottom = partial === true ? _top : _bottom;

//     return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

//   };

// })(jQuery);

// $(window).scroll(function(event) {

//   $(".module").each(function(i, el) {
//     var el = $(el);
//     if (el.visible(true)) {
//       el.addClass("come-in");
//     }
//   });

// });
// });

$(document).ready(function(){
  $(window).scroll(function() {
    $('.skill-bar').each(function(){
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+700) {
        $(this).addClass("stretchRight");
      }
    });
  });
  // initial animation
    console.log( "ready!" );
    $('.title').fadeIn(2000, function(){
      console.log('animation 1 should run!')
    });
    $('.nav-bar').fadeIn(2000, function(){
      console.log('animation 2 should run!')
    });
    $('#about').fadeIn(2000, function(){
      console.log('animation 3 should run!')
    });
})

