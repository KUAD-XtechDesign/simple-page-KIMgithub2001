$(function(){
  
  $("#slide").slick({dots:true});

  // $(".btn").on("click",()=>{
  //   $("#slide").slideToggle();
  // })

});

$('.one-time').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});