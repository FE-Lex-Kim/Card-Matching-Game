let cardColor = [
  'red',
  'red',
  'orange',
  'orange',
  'yellow',
  'yellow',
  'green',
  'green',
  'blue',
  'blue',
  'purple',
  'purple',
];
// state
// 뒤집은 두카드의 요소 확인
let compareTwoBackgroundColor = [];
// 클릭을 두번했을때
let count = 0;

const $container = document.querySelector('.container');
const $cards = document.querySelectorAll('.card');
const $cardFronts = document.querySelectorAll('.card-front');
const $cardBack = document.querySelector('.card-back');
const $countStart = document.querySelector('.count-Start');
const $start = document.querySelector('.start');
const $scoreNumber = document.querySelector('.scoreNumber');
const $timeoutNumber = document.querySelector('.timeoutNumber');

// 로딩시 front backgroundColor 컬러에 색깔 대입
window.addEventListener('DOMContentLoaded' , () => {
  [...$cardFronts].forEach(cardFront => {
    color = cardColor.splice(Math.floor((Math.random() * cardColor.length - 1)), 1);
    cardFront.style.backgroundColor = color;
  });
});

window.onload = () => {
  // 화면 스타트 시간 구현
  const countStart = setInterval(() => {
    $countStart.textContent = +($countStart.textContent) - 1;
    if(+$countStart.textContent === -1) {
      clearInterval(countStart);
      $start.style.transform = `translate3d(9999px, 0, 0)`;
    }
  }, 1000);

  // 게임 시간제한 구현
  const count60 = setInterval(() => {
    $timeoutNumber.textContent = +($timeoutNumber.textContent) - 1;
    if(+$timeoutNumber.textContent === 0) {
      clearInterval(count60);
      window.location.href = 'http://127.0.0.1:55522/index.html';
    }
  }, 1000);
};

// 카트 클릭 이벤트
$container.onclick = ({ target }) => {
  // 카드 뒷장인지 확인후 맞으면 flipped 클래스 추가해서 뒤집어준다.
  if (count < 2 && target.classList.contains('card-back')){
    target.parentNode.classList.add('flipped');
    count += 1;
    // 뒤집은 카드의 요소를 할당
    compareTwoBackgroundColor = [...compareTwoBackgroundColor, target.previousElementSibling];
    
    // 두장의 카드가 같은 색깔인지 확인
    // 만약 뒤집은 카드가 2개이고 비교한 카드가 다른경우
    if (compareTwoBackgroundColor.length === 2 && compareTwoBackgroundColor[0].style.backgroundColor !== compareTwoBackgroundColor[1].style.backgroundColor) {
      // 카드를 다시 뒤집어 준다. class의 flopped를 뺴준다.
      setTimeout(() => {
        // 카드를 다시 뒤집어준다
        compareTwoBackgroundColor.forEach(element => {
          element.parentNode.classList.remove('flipped');
        });

        // 배열를 초기화 시켜준다.
        compareTwoBackgroundColor = [];

        // 클릭을 0번으로 초기화해준다
        count = 0;

        // 틀린경우 점수를 10점씩 감점시킨다.
        $scoreNumber.textContent = +$scoreNumber.textContent - 10;

        // 0점이 된경우 새로고침
        if($scoreNumber.textContent === '0'){
        }
      }, 500);
    } else if (compareTwoBackgroundColor.length === 2 && compareTwoBackgroundColor[0].style.backgroundColor === compareTwoBackgroundColor[1].style.backgroundColor) {
      compareTwoBackgroundColor = [];
      count = 0;
    };
    if($scoreNumber.textContent === '0'){
      window.location.href = 'http://127.0.0.1:55522/index.html';
    }
  }
};