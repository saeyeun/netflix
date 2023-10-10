$(document).ready(function(){
  $('.question_headline').click(function(){
    $(this).next().slideToggle();
    $(this).next().siblings('.question_txt').slideUp();
  })
})
