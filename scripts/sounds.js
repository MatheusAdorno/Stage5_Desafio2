export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");
  const forestSound = new Audio("../audios/forest.wav");
  const rainSound = new Audio("../audios/rain.wav");
  const coffeShopSound = new Audio("../audios/coffeShop.wav");
  const fireplaceSound = new Audio("../audios/fireplace.wav");

  const volumeControl = document.querySelectorAll('.volume-control');

  forestSound.loop = true;
  rainSound.loop = true;
  coffeShopSound.loop = true;
  fireplaceSound.loop = true;

  function pressButton() {
    buttonPressAudio.play();
  };

  function timeEnd() {
    kitchenTimer.play();
  }

  function stopAudios() {
    forestSound.pause();
    rainSound.pause();
    coffeShopSound.pause();
    fireplaceSound.pause();
  }

  volumeControl[0].addEventListener('change', function() {
    forestSound.volume = this.value;
  });

  volumeControl[1].addEventListener('change', function() {
    rainSound.volume = this.value;
  });

  volumeControl[2].addEventListener('change', function() {
    coffeShopSound.volume = this.value;
  });

  volumeControl[3].addEventListener('change', function() {
    fireplaceSound.volume = this.value;
  });

  return {
    pressButton,
    timeEnd,
    forestSound,
    rainSound,
    coffeShopSound,
    fireplaceSound,
    stopAudios
  }
};