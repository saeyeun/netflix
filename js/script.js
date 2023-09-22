// $(document).ready(function(){
//   $('.question').click(function(){
//     $(this).next().slideToggle();
//     $(this).next().siblings('.answer').slideUp();

//   })

// })
var list = document.getElementsByClassName('question-list');
var question = document.getElementsByClassName('question-headline');
var answer = document.getElementsByClassName('question-txt');

for (var i = 0; i < question.length; i++) {
  question[i].addEventListener('click', function (e) {
    for (var a = 0; a < list.length; a++) {
      list[a].classList.remove('active');
      e.target.parentNode.classList.add('active');
      activateBody();
    }
  })
}

function activateBody() {
  for (var b = 0; b < answer.length; b++) {
    answer[b].style.display = 'none';
  }
  var activePanel = document.querySelector('.question-list.active .question-txt');
  activePanel.style.display = "block";
}

activateBody();