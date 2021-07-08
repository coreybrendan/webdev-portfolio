// screen 1: tattoo tally
const tattooProject = document.querySelector('.tattoo-screen');

tattooProject.addEventListener('click', handleTattooClick);

function handleTattooClick() {
  console.log('I have been clicked!!');
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
  console.log('I have been clicked!!');
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
  console.log('I have been clicked!!');
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
  console.log('I have been clicked!!');
  toggleSanctuaryDetails();
}

const toggleSanctuaryDetails = () => {
  const element = document.getElementsByClassName('hide-details');
  element[3].classList.toggle('show-details');
}