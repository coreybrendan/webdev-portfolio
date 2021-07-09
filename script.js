// screen 1: tattoo tally
const tattooProject = document.querySelector('.tattoo-screen');

tattooProject.addEventListener('click', handleTattooClick);

function handleTattooClick() {
  toggleTattooDetails();
}

const toggleTattooDetails = () => {
  const element = document.getElementsByClassName('hide-details');
  element[0].classList.toggle('show-details');
}

// screen 2: bootcamp diaries
const diariesProject = document.querySelector('.bootcamp-diaries-screen');

diariesProject.addEventListener('click', handleDiariesClick);

function handleDiariesClick() {
  toggleDiariesDetails();
}

const toggleDiariesDetails = () => {
  const element = document.getElementsByClassName('hide-details');
  element[1].classList.toggle('show-details');
}

// screen 3: word nerds
const nerdsProject = document.querySelector('.word-nerds-screen');

nerdsProject.addEventListener('click', handleNerdsClick);

function handleNerdsClick() {
  toggleNerdsDetails();
}

const toggleNerdsDetails = () => {
  const element = document.getElementsByClassName('hide-details');
  element[2].classList.toggle('show-details');
}

// screen 4: sanctuary helpers
const sanctuaryProject = document.querySelector('.sanctuary-screen');

sanctuaryProject.addEventListener('click', handleSanctuaryClick);

function handleSanctuaryClick() {
  toggleSanctuaryDetails();
}

const toggleSanctuaryDetails = () => {
  const element = document.getElementsByClassName('hide-details');
  element[3].classList.toggle('show-details');
}

// dark-mode toggle
const darkMode = () => {
  const element = document.body;
  element.classList.toggle('dark-mode');
}

const logoSwitch = document.querySelector('.logo');

logoSwitch.addEventListener('click', handleUserClick);

function handleUserClick() {
  darkMode();
}

// scroll to about section
const chevron = document.querySelector('.fa-chevron-down');

chevron.addEventListener('click', handleChevronClick);

function handleChevronClick() {
  const location = document.querySelector('.about');
  location.scrollIntoView();
}