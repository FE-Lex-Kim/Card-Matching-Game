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

const randomCards = () => {
  cardColor.forEach(() => {
    cardColor += [
      ...cardColor.splice(Math.floor(Math.random() * cardColor.length), 1),
      ...cardColor,
    ];
  });
};

randomCards();
console.log(cardColor);

// [...$cardFront].map();
