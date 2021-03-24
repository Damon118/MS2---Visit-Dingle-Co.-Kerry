$(document).ready(function(){

  $(".carousel").carousel();
    
  $(".carousel-inner").click(function(){
    $(".carousel-item").carousel(0);
  });
  $(".carousel-inner").click(function(){
    $(".carousel-item").carousel(1);
  });
  $(".carosel-inner").click(function(){
    $(".carousel-item").carousel(2);
  });
    
  $(".carousel-control-prev").click(function(){
    $("#carouselExampleControls").carousel("prev");
  });
  $(".carouselExampleControls").click(function(){
    $("#myCarousel").carousel("next");
  });
});