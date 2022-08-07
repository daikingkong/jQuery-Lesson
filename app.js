$(function(){
  $('button').on('click',function(){
    $('ul').children().css('color','red');
  });
});

// $(function(){
//   $('.box1').on('click',function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// $(function(){
//   $('.box1').slideDown(2000,function(){
//     $('.box1').css({
//     'background-color': '#0000FF',
//     'height': '200px',
//     'width': '200px'
//     }).slideUp();
//   });
// });