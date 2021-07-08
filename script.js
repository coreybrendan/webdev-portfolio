// find the img with class of .tattoo-screen
const projectScreen = document.querySelector('.tattoo-screen');

// add event listener
projectScreen.addEventListener('click', handleClick);

// click event
function handleClick() {
  console.log('I have been clicked!!');
  toggleProjectDetails();
}

// toggle class name from .hide-details to .show-details
const toggleProjectDetails = () => {
  const element = document.getElementsByClassName('hide-details');
  element[0].classList.toggle('show-details');
  // console.log(element[0].classList.toggle);
}



// document.querySelector('.tattoo-screen').onClick = function() {
//   const element = document.getElementsByClassName('hide-details');
//   element.classList.toggle('show-details');
// }