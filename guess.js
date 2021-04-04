
const submitBtn = document.getElementById('submit');
let ourRandomNumber = 0;
let guessNumber = 0;

function randomNumber() {
  return Math.trunc(Math.random() * (100 - 1) + 1);
}

ourRandomNumber = randomNumber();

const inputForm = document.getElementById("guessform");

inputForm.addEventListener('submit', game);

function game() {

    guessNumber += 1;

    const guessMessage = document.getElementById("guessnum");
    guessMessage.innerHTML = `Number of attempts:<b>${guessNumber}</b>`;

    event.preventDefault();
    let playerNumber = document.getElementsByName("number")[0].value;

    let message = "";

      if (playerNumber == "") {
        message = "You must enter a number";
        setTimeout("location.reload(true);", 500);
      } else if (playerNumber < ourRandomNumber) {
        message = "GO UP";
      } else if (playerNumber > ourRandomNumber) {
        message = "GO DOWN";
      } else {
        message = "GOOD JOB. CONGRATULATIONS";
        submitBtn.disabled = true;
      }

    const adviceMessage = document.getElementById("advice");
    adviceMessage.innerHTML = `<b>${message}</b>`;

}
