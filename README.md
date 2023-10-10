# netflix
netfilx clone coding


1) 아코디언 메뉴를 제이쿼리가 아닌 자바스크립트로 구현하는 방법
var list = document.getElementsByClassName('question_list');
var question = document.getElementsByClassName('question_headline');
var answer = document.getElementsByClassName('question_txt');

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
  var activePanel = document.querySelector('.question_list.active .question_txt');
  activePanel.style.display = "block";
}

activateBody();
