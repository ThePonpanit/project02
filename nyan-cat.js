// Create a Nyan Cat at the top of the page on page load
window.addEventListener("load", function () {
  const nyanCat = document.createElement("img");
  nyanCat.src = "neon-cat-rainbow.gif";
  nyanCat.style.position = "absolute";
  nyanCat.style.left = "-500px";
  nyanCat.style.top = "10px";
  nyanCat.style.width = "430px";
  document.body.appendChild(nyanCat);

  animateNyanCat(nyanCat);
});

// Animate the Nyan Cat
function animateNyanCat(nyanCat) {
  let position = -500;
  const animate = () => {
    position += 5;
    nyanCat.style.left = `${position}px`;

    if (position > window.innerWidth) {
      position = -500;
    }

    requestAnimationFrame(animate);
  };

  animate();
}

// Create the Nyan cats
function createCats() {
  const catNumberInput = document.getElementById("cat-number");
  const catNumber = parseInt(catNumberInput.value);

  if (isNaN(catNumber) || catNumber <= 0) {
    // Display an error message or take appropriate action
    alert("Please enter a positive number.");
    return;
  }

  const delay = 500; // Delay in milliseconds between each cat

  for (let i = 0; i < catNumber; i++) {
    setTimeout(() => {
      // Create a new nyan cat
      const nyanCat = document.createElement("img");
      nyanCat.src = "neon-cat-rainbow.gif";
      nyanCat.style.position = "absolute";
      nyanCat.style.left = "-500px";
      nyanCat.style.top = `${Math.random() * window.innerHeight}px`; // Randomize the vertical position
      nyanCat.style.width = "150px"; // Adjust the size as desired

      // Add event listener to remove the cat when clicked
      nyanCat.addEventListener("click", function () {
        this.remove();
      });

      document.body.appendChild(nyanCat);

      // Animate the nyan cat
      let position = -500;
      setInterval(() => {
        position += 5;
        nyanCat.style.left = `${position}px`;

        if (position > window.innerWidth) {
          position = -500;
        }
      }, 20);
    }, i * delay);
  }
}

// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create a new YouTube player.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0",
    width: "0",
    videoId: "QH2-TGUlwu4",
    events: {
      onReady: onPlayerReady,
    },
    playerVars: {
      autoplay: 0,
      controls: 0,
    },
  });
}

// Play video when player ready
function onPlayerReady(event) {
  document
    .getElementById("speaker-icon")
    .addEventListener("click", function () {
      var isPlaying = player.getPlayerState() === 1;
      if (isPlaying) {
        player.pauseVideo();
      } else {
        player.playVideo();
      }
    });
}

let isSoundOn = false;

function toggleSound() {
  var isPlaying = player.getPlayerState() === 1;
  var speakerIcon = document.querySelector("#speaker-icon");
  var buttonText = document.querySelector(".button-text");

  if (isPlaying) {
    player.pauseVideo();
    buttonText.innerHTML = "Play the Nyan Cat song";
    speakerIcon.classList.remove("fa-volume-up");
    speakerIcon.classList.add("fa-volume-mute");
    // Remove the breathing animation class
    speakerIcon.classList.remove("breathing");
  } else {
    player.playVideo();
    buttonText.innerHTML = "Stop the Nyan Cat song";
    speakerIcon.classList.remove("fa-volume-mute");
    speakerIcon.classList.add("fa-volume-up");
    // Add the breathing animation class
    speakerIcon.classList.add("breathing");
  }
}
