const funFacts = [
  "Nyan Cat was created by Christopher Torres, also known as 'PRguitarman.'",
  "The original Nyan Cat animation was uploaded to the internet on April 2, 2011.",
  "Nyan Cat is a pixelated, gray Nyan Cat with a Pop-Tart body flying through space with a rainbow trail behind it.",
  "The name 'Nyan' comes from the Japanese word 'nyan-nyan,' which is the onomatopoeic word for a Nyan Cat's meow.",
  "The catchy background music accompanying the Nyan Cat animation is a song called 'Nyanyanyanyanyanyanya!' composed by Daniwell-P.",
  "Nyan Cat inspired numerous remixes, parodies, and fan art, leading to its widespread popularity on various online platforms.",
  "Nyan Cat was one of the first internet memes to cross over into the mainstream media and was featured in TV shows, commercials, and video games.",
  "In 2011, a Nyan Cat-themed game called 'Nyan Cat: Lost in Space' was released for iOS and Android devices.",
  "Nyan Cat's YouTube video has accumulated millions of views and is considered one of the most iconic internet memes of all time.",
  "Nyan Cat's popularity led to the creation of various merchandise, including plush toys, t-shirts, stickers, and even a Nyan Cat-themed keyboard.",
];

function getRandomFunFact() {
  return funFacts[Math.floor(Math.random() * funFacts.length)];
}

function typeWriter() {
  const funFactElement = document.getElementById("funFact");
  const typingSpeed = 25;
  let fact = getRandomFunFact();
  let i = 0;

  function typeCharacter() {
    if (i < fact.length) {
      let currentWord = fact.substring(i);
      let match = currentWord.match(/^(N|n)yan (C|c)at\b/);

      if (match) {
        let word = match[0];
        let link = `<a href="https://www.google.com/search?q=${word}&tbm=isch" target="_blank" class="nyan-cat-link">${word}</a>`;
        funFactElement.innerHTML += link;
        i += word.length - 1;
      } else {
        funFactElement.innerHTML += fact.charAt(i);
      }

      setTimeout(typeCharacter, typingSpeed);
      i++;
    } else {
      // After typing the full fact, wait for 4 seconds, then start deleting characters
      setTimeout(() => {
        deleteCharacters(fact.length);
      }, 4000);
    }
  }

  function deleteCharacters(count) {
    if (count >= 0) {
      // Delete characters one by one from the end of the fact
      funFactElement.innerHTML = fact.substring(0, count);
      setTimeout(() => {
        deleteCharacters(count - 1);
      }, 7);
    } else {
      // After deleting all characters, wait for 0.5 seconds and then start the typeWriter function again
      setTimeout(typeWriter, 500);
    }
  }

  // Start typing characters from the beginning of the fact
  typeCharacter();
}

// Call the typeWriter function to initiate the typing animation
typeWriter();
