document.title.innerHTML = '<img src="/images/quick.png"></img>';
function noscrooll() {
  window.scrollTo(0, 0);
}
window.addEventListener("scroll", noscrooll);
// counters :
let msCounter = 0;
let sCounter = 0;
let minCounter = 0;
let startBool = false;
let lapCounter = 0;
/// spans
let ms = document.getElementById("ms");
let s = document.getElementById("s");
let min = document.getElementById("min");
// buttons
let lapButton = document.getElementById("left");
let startButton = document.getElementById("right");

startButton.addEventListener("click", function () {
  if (startBool === false) {
    startBool = true;
    lapButton.innerHTML = "Lap";
    startButton.innerHTML = "Stop";
    ////
    setCounter = setInterval(function () {
      msCounter += 9;
      ms.innerHTML = msCounter.toString().padStart(3, "0");

      if (msCounter >= 955) {
        msCounter = 0;
        if (sCounter === 59) {
          sCounter = 0;
          Boolean = true;
        } else {
          sCounter++; // increment minutes counter when ms counter reaches 1000 !!!
        }
        s.textContent = " " + sCounter.toString().padStart(2, "0") + " ";
      }
      if (Boolean === true) {
        minCounter++; // increment minutes counter when s counter reaches 59 + 1 !!!
        sCounter = 0;
        min.textContent = minCounter.toString().padStart(2, "0");
        Boolean = false;
      }
    }, 8.3);
  } else if (startBool === true) {
    startBool = false;
    lapButton.innerHTML = "Reset";
    startButton.innerHTML = "Resume";
    clearInterval(setCounter);
  }
});

lapButton.addEventListener("click", function () {
  let div = document.getElementById("div");

  if (lapButton.innerHTML === "Reset") {
    msCounter = 0;
    sCounter = 0;
    minCounter = 0;
    lapCounter = 0;
    min.textContent = minCounter.toString().padStart(2, "0");
    s.textContent = sCounter.toString().padStart(2, "0");
    ms.innerHTML = msCounter.toString().padStart(3, "0");
    startButton.innerHTML = "Start";
    lapButton.innerHTML = "Lap";
    let paragraphs = document.querySelectorAll("p");
    paragraphs.forEach(function (paragraph) {
      paragraph.remove();
    });
  } else if (lapButton.innerHTML === "Lap" && startBool === true) {
    let Lap = document.createElement("p");
    lapCounter++;
    Lap.innerHTML = "Lap " + lapCounter 
      + " ➦ " +
      minCounter.toString().padStart(2, "0") +
      " : " +
      sCounter.toString().padStart(2, "0") +
      " . " +
      msCounter.toString().padStart(3, "0");
    div.appendChild(Lap);
  }
});
