/*-------------------nav position fixed start-------------------- */
/*-------------------nav position fixed end-------------------- */
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".manu").addClass("fix-menu")
  }else{
    $(".manu").removeClass("fix-menu")
  }
})
/*-------------------banner typing js start-------------------- */
var typed = new Typed('.mytypejs', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
      'Freelancer',
      'Web Designer',
      'Web Developer',
      'Digital Marketer'
    ],
  
    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: true,
    loopCount: Infinity,
  
    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: true,
    cursorChar: '',
    autoInsertCss: true,
  
   
  });
/*-------------------banner typing js end-------------------- */
/*-------------------about typing js start-------------------- */
var typed = new Typed('.about-typejs', {
    /**
     * @property {array} strings strings to be typed
     * @property {string} stringsElement ID of element containing string children
     */
    strings: [
      'Freelancer',
      'Web Designer',
      'Web Developer',
      'Digital Marketer'
    ],
  
    /**
     * @property {boolean} loop loop strings
     * @property {number} loopCount amount of loops
     */
    loop: true,
    loopCount: Infinity,
  
    /**
     * @property {boolean} showCursor show cursor
     * @property {string} cursorChar character for cursor
     * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
     */
    showCursor: true,
    cursorChar: '',
    autoInsertCss: true,
  
   
  });
/*-------------------about typing js end-------------------- */
/*-------------------counterup js start-------------------- */
$('.count').counterUp({
  delay: 5,
  time: 3000
});
/*-------------------counterup js end-------------------- */
/*-------------------client slider start-------------------- */
$('.client-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  fade:true,
  asNavFor:(".ima-slider"),
});
/*-------------------client slider end-------------------- */
/*-------------------client review start-------------------- */
$('.ima-slider').slick({
  infinite: true,
  vertical: true,
  verticalSwiping:true,
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: "0",
  prevArrow: '<i class="fas fa-chevron-up prev"></i>',
  nextArrow: '<i class="fas fa-chevron-down next"></i>',
  asNavFor:(".client-slider"),
});
/*-------------------client review end-------------------- */
/*-------------------btt start-------------------- */
$(".btt").click(function(){
  $("html,body").animate({
    scrollTop:0
  },2000)
})
$(window).scroll(function(){
  if($(window).scrollTop() > 700){
    $(".btt").fadeIn()
  }else{
    $(".btt").fadeOut()
  }
})
/*-------------------btt end-------------------- */