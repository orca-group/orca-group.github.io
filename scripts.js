const changingText = document.getElementById('changing-text');
const text = ['developers', 'artists', 'entrepreneurs', 'innovators'];

const animateText = () => {
  let i = 0;

  setInterval(() => {
    changingText.textContent = text[i];

    i > 4 ? i++ : i = 4;
  }, 5000)
};

animateText();