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

const $container = document.querySelector('.container');
const $cards = document.querySelectorAll('.card');
const $cardFront = document.querySelectorAll('.card-front');
const $cardBack = document.querySelectorAll('.card-back');

const randomColor = () => {
  cardColor = [
    ...cardColor.splice(Math.floor(Math.random() * cardColor.length), 1),
    ...cardColor,
  ];

  return cardColor;
};

const addColor = () => {
  const randomTemp = randomColor();
  [...$cardFront].forEach((card, index) => {
    card.style.backgroundColor = randomTemp[index];
  });
};

window.onload = addColor;
