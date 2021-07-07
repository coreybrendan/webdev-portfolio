const tattoo = document.querySelector('.tattoo-screen');
const bootcampDiaries = document.querySelector('.bootcamp-diaries-screen');
const wordNerds = document.querySelector('.word-nerds-screen');
const sanctuary = document.querySelector('.sanctuary-screen');

function handleClick() {
  this.style.display = 'inline-block';
}

tattoo.addEventListener('click', function() {
  console.log('Whoop! A click has been registered on tattoo screen');
});

bootcampDiaries.addEventListener('click', function () {
  console.log('Whoop! A click has been registered on bootcamp diaries screen');
});

wordNerds.addEventListener('click', function () {
  console.log('Whoop! A click has been registered on word nerds screen');
});

sanctuary.addEventListener('click', function () {
  console.log('Whoop! A click has been registered on sanctuary screen');
});