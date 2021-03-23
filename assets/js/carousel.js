$(document).ready(function(){
  // Activate Carousel
  $("#carouselExampleControls").carousel();
    
  // Enable Carousel Indicators
  $(".carousel-item").click(function(){
    $("#myCarousel").carousel(0);
  });
  $(".carousel-item").click(function(){
    $("#myCarousel").carousel(1);
  });
  $(".carosel-item").click(function(){
    $("#myCarousel").carousel(2);
  });
    
  // Enable Carousel Controls
  $(".carousel-control-prev").click(function(){
    $("#carouselExampleControls").carousel("prev");
  });
  $(".carouselExampleControls").click(function(){
    $("#myCarousel").carousel("next");
  });
});