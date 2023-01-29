import { elements } from './elements.js';
import Sound from "./sounds.js";

const {
  minutesDisplay,
  secondsDisplay,
  buttonPlay,
  buttonStop,
  buttonMoreTime,
  buttonLessTime,
  buttonForest,
  buttonRain,
  buttonCoffeShop,
  buttonFireplace,
  buttonSun,
  buttonMoon
} = elements;

let seconds = Number(secondsDisplay.textContent);
let minutes = Number(minutesDisplay.textContent);
let minutesDefinedWhenStart;
let timerTimeOut;

const sound = Sound();

function countDown() {
  timerTimeOut = setTimeout(function() {
    if (seconds <= 0) {
      seconds = 60;
      minutes--;
    }

    secondsDisplay.textContent = seconds--;

    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');

    if (minutes <= 0 && seconds == 1) {
      buttonStop.setAttribute('disabled', true);
      buttonStop.classList.add('disabled');
      buttonPlay.removeAttribute('disabled');
      buttonPlay.classList.remove('disabled');
      reset();
      sound.timeEnd();
      return;
    }

    if (minutes <= 5) {
      buttonLessTime.setAttribute('disabled', true);
      buttonLessTime.classList.add('disabled');
    } else {
      buttonLessTime.removeAttribute('disabled', true);
      buttonLessTime.classList.remove('disabled');
    }

    countDown();
  }, 1000);
};

function reset() {
  clearTimeout(timerTimeOut);

  minutes = minutesDefinedWhenStart;
  seconds= 0;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');
  secondsDisplay.textContent = String(seconds).padStart(2, '0');
};

buttonPlay.addEventListener('click', function() {
  minutesDefinedWhenStart = minutes;

  buttonPlay.setAttribute('disabled', true);
  buttonPlay.classList.add('disabled');
  buttonStop.removeAttribute('disabled');
  buttonStop.classList.remove('disabled');

  sound.pressButton();

  countDown();
});

buttonStop.addEventListener('click', function() {
  buttonStop.setAttribute('disabled', true);
  buttonStop.classList.add('disabled');
  buttonPlay.removeAttribute('disabled');
  buttonPlay.classList.remove('disabled');

  sound.pressButton();

  reset();

  if (minutes >= 5) {
    buttonLessTime.removeAttribute('disabled', true);
    buttonLessTime.classList.remove('disabled');
  }
});

buttonMoreTime.addEventListener('click', function() {
  minutes += 5;
  minutesDisplay.textContent = String(minutes).padStart(2, '0');

  buttonLessTime.removeAttribute('disabled');
  buttonLessTime.classList.remove('disabled');

  if (minutes == 5) {
    buttonPlay.removeAttribute('disabled', true);
    buttonPlay.classList.remove('disabled');
  } 

  sound.pressButton();
});

buttonLessTime.addEventListener('click', function() {
  console.log(minutes)
  
  if(minutes > 5) {
    minutes -= 5;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
  }
  else if(minutes <= 5) {
    minutes -= 5;
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    buttonLessTime.setAttribute('disabled', true);
    buttonLessTime.classList.add('disabled');
  };

  if (minutes < 5) {
    buttonPlay.setAttribute('disabled', true);
    buttonPlay.classList.add('disabled');

    buttonLessTime.setAttribute('disabled', true);
    buttonLessTime.classList.add('disabled');
  } 

  sound.pressButton();
});

buttonForest.addEventListener('click', function() {
  sound.stopAudios();
  sound.forestSound.play();

  if (buttonForest.classList.contains('selected') || buttonForest.classList.contains('selectedDark')) {
    sound.stopAudios();
  };

  if (buttonMoon.classList.contains('hide')){
    buttonForest.classList.toggle('selected');
    forestControl.classList.toggle('selected');

    buttonRain.classList.remove('selected');
    rainControl.classList.remove('selected');
    buttonCoffeShop.classList.remove('selected');
    coffeControl.classList.remove('selected');
    buttonFireplace.classList.remove('selected');
    fireplaceControl.classList.remove('selected');
  } else {
    buttonForest.classList.toggle('selectedDark');
    forestControl.classList.toggle('selectedDark');

    buttonRain.classList.remove('selectedDark');
    rainControl.classList.remove('selectedDark');
    buttonCoffeShop.classList.remove('selectedDark');
    coffeControl.classList.remove('selectedDark');
    buttonFireplace.classList.remove('selectedDark');
    fireplaceControl.classList.remove('selectedDark');
  }
});

buttonRain.addEventListener('click', function() {
  sound.stopAudios();
  sound.rainSound.play();

  if (buttonRain.classList.contains('selected') || buttonRain.classList.contains('selectedDark')) {
    sound.stopAudios();
  };

  

  if (buttonMoon.classList.contains('hide')){
    buttonRain.classList.toggle('selected');
    rainControl.classList.toggle('selected');

    buttonForest.classList.remove('selected');
    forestControl.classList.remove('selected');
    buttonCoffeShop.classList.remove('selected');
    coffeControl.classList.remove('selected');
    buttonFireplace.classList.remove('selected');
    fireplaceControl.classList.remove('selected');
  } else {
    buttonRain.classList.toggle('selectedDark');
    rainControl.classList.toggle('selectedDark');

    buttonForest.classList.remove('selectedDark');
    forestControl.classList.remove('selectedDark');
    buttonCoffeShop.classList.remove('selectedDark');
    coffeControl.classList.remove('selectedDark');
    buttonFireplace.classList.remove('selectedDark');
    fireplaceControl.classList.remove('selectedDark');
  }
});

buttonCoffeShop.addEventListener('click', function() {
  sound.stopAudios();
  sound.coffeShopSound.play();

  if (buttonCoffeShop.classList.contains('selected') || buttonCoffeShop.classList.contains('selectedDark')) {
    sound.stopAudios();
  };

  

  if (buttonMoon.classList.contains('hide')){
    buttonCoffeShop.classList.toggle('selected');
    coffeControl.classList.toggle('selected');

    buttonForest.classList.remove('selected');
    forestControl.classList.remove('selected');
    buttonRain.classList.remove('selected');
    rainControl.classList.remove('selected');
    buttonFireplace.classList.remove('selected');
    fireplaceControl.classList.remove('selected');
  } else {
    buttonCoffeShop.classList.toggle('selectedDark');
    coffeControl.classList.toggle('selectedDark');

    buttonForest.classList.remove('selectedDark');
    forestControl.classList.remove('selectedDark');
    buttonRain.classList.remove('selectedDark');
    rainControl.classList.remove('selectedDark');
    buttonFireplace.classList.remove('selectedDark');
    fireplaceControl.classList.remove('selectedDark');
  }
});

buttonFireplace.addEventListener('click', function() {
  sound.stopAudios();
  sound.fireplaceSound.play();

  if (buttonFireplace.classList.contains('selected') || buttonFireplace.classList.contains('selectedDark')) {
    sound.stopAudios();
  };

  
  
  if (buttonMoon.classList.contains('hide')){
    buttonFireplace.classList.toggle('selected');
    fireplaceControl.classList.toggle('selected');

    buttonForest.classList.remove('selected');
    forestControl.classList.remove('selected');
    buttonRain.classList.remove('selected');
    rainControl.classList.remove('selected');
    buttonCoffeShop.classList.remove('selected');
    coffeControl.classList.remove('selected');
  } else {
    buttonFireplace.classList.toggle('selectedDark');
    fireplaceControl.classList.toggle('selectedDark');

    buttonForest.classList.remove('selectedDark');
    forestControl.classList.remove('selectedDark');
    buttonRain.classList.remove('selectedDark');
    rainControl.classList.remove('selectedDark');
    buttonCoffeShop.classList.remove('selectedDark');
    coffeControl.classList.remove('selectedDark');
  }
});

const body = document.querySelector('body');
const soundButtons = document.querySelectorAll('.soundButton');
const soundInputRanges = document.querySelectorAll('.volume-control');
const forestControl = document.querySelector('.forestControl');
const rainControl = document.querySelector('.rainControl');
const coffeControl = document.querySelector('.coffeControl');
const fireplaceControl = document.querySelector('.fireplaceControl');

buttonSun.addEventListener('click', function() {
  buttonSun.classList.add('hide');
  buttonMoon.classList.remove('hide');

  body.style.backgroundColor = 'var(--dark-bg-color)';
  body.style.color = 'var(--dark-text-color)';
  for(let i = 0; i < soundButtons.length; i++ ){
    soundButtons[i].classList.add('darkStyle');
    soundInputRanges[i].classList.add('darkStyle');
  };

  if(buttonForest.classList.contains('selected')) {
    buttonForest.classList.remove('selected');
    buttonForest.classList.add('selectedDark');
    forestControl.classList.remove('selected');
    forestControl.classList.add('selectedDark');
  } else if(buttonRain.classList.contains('selected')) {
    buttonRain.classList.remove('selected');
    buttonRain.classList.add('selectedDark');
    rainControl.classList.remove('selected');
    rainControl.classList.add('selectedDark');
  } else if(buttonCoffeShop.classList.contains('selected')) {
    buttonCoffeShop.classList.remove('selected');
    buttonCoffeShop.classList.add('selectedDark');
    coffeControl.classList.remove('selected');
    coffeControl.classList.add('selectedDark');
  } else if(buttonFireplace.classList.contains('selected')) {
    buttonFireplace.classList.remove('selected');
    buttonFireplace.classList.add('selectedDark');
    fireplaceControl.classList.remove('selected');
    fireplaceControl.classList.add('selectedDark');
  };

  buttonPlay.classList.add('darkMode');
  buttonStop.classList.add('darkMode');
  buttonMoreTime.classList.add('darkMode');
  buttonLessTime.classList.add('darkMode');
});

buttonMoon.addEventListener('click', function() {
  buttonMoon.classList.add('hide');
  buttonSun.classList.remove('hide');

  body.style.backgroundColor = 'var(--bg-color)';
  body.style.color = 'var(--text-color)';
  for(let i = 0; i < soundButtons.length; i++ ){
    soundButtons[i].classList.remove('darkStyle');
    soundInputRanges[i].classList.remove('darkStyle');
  };

  if(buttonForest.classList.contains('selectedDark')) {
    buttonForest.classList.remove('selectedDark');
    buttonForest.classList.add('selected');
    forestControl.classList.remove('selectedDark');
    forestControl.classList.add('selected');
  } else if(buttonRain.classList.contains('selectedDark')) {
    buttonRain.classList.remove('selectedDark');
    buttonRain.classList.add('selected');
    rainControl.classList.remove('selectedDark');
    rainControl.classList.add('selected');
  } else if(buttonCoffeShop.classList.contains('selectedDark')) {
    buttonCoffeShop.classList.remove('selectedDark');
    buttonCoffeShop.classList.add('selected');
    coffeControl.classList.remove('selectedDark');
    coffeControl.classList.add('selected');
  } else if(buttonFireplace.classList.contains('selectedDark')) {
    buttonFireplace.classList.remove('selectedDark');
    buttonFireplace.classList.add('selected');
    fireplaceControl.classList.remove('selectedDark');
    fireplaceControl.classList.add('selected');
  };

  buttonPlay.classList.remove('darkMode');
  buttonStop.classList.remove('darkMode');
  buttonMoreTime.classList.remove('darkMode');
  buttonLessTime.classList.remove('darkMode');
});


