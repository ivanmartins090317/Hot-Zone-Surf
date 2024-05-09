function startTimer(duration, display_time) {
  var time = duration,
    minutes,
    seconds;

  setInterval(function () {
    minutes = parseInt(time / 60, 10);

    seconds = parseInt(time % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display_time.textContent = minutes + ":" + seconds;

    if (--time < 0) {
      time = duration;
      time = "";
    }
  }, 1000);
}

function timeBateri() {
  event.preventDefault();
  const tempo = localStorage.getItem("valueTime");
  const duration = 60 * tempo;
  const display_time = document.querySelector(".timeDisplay");
  const nameEvent = localStorage.getItem("event_name");
  startTimer(duration, display_time);
}
// function create() {
//   let canvas = document.createElement("canvas");
//   canvas.style.position = "absolute";
//   const area01 = document.getElementById("area01").prepend(canvas);

//   const dot = canvas.getContext("2d");

//   canvas.addEventListener("click", (event) => {
//     const x = event.clientX;
//     const y = event.clientY;
//     console.log({ x, y });
//     dot.fillStyle = "red";

//     dot.fillRect(x, y, 10, 10);
//   });
// }
// create();
document.addEventListener("click", function (event) {
  var x = event.clientX;
  var y = event.clientY;

  var ponto = document.createElement("div");
  ponto.style.position = "absolute";
  ponto.style.left = x + "px";
  ponto.style.top = y + "px";
  ponto.style.width = "10px";
  ponto.style.height = "10px";
  ponto.style.backgroundColor = "red";

  var area = document.querySelector("#area01");
  area.appendChild(ponto);
});

function area01(fn) {
  const related = document.querySelector(".related_1");
  const buttonName = document.querySelector("#area01").getAttribute("name");
  const zona = document.querySelector(".cliks");
  const numeroClick = parseInt(zona.textContent) + 1;

  const display_time = document.querySelector(".timeDisplay").textContent;
  zona.textContent = numeroClick;
  const timeWave = `onda ${numeroClick}(${display_time})`;

  contClickarea01.push(timeWave);
  const arrayLength = contClickarea01.length;

  sessionStorage.setItem("timeWave1", contClickarea01);
  sessionStorage.setItem("area01", arrayLength);

  related.textContent = `${buttonName} = ${arrayLength} ondas`; //insere na tela
}

function area02() {
  const related = document.querySelector(".related_2");
  const buttonName = document.querySelector("#area02").getAttribute("name");
  const zona = document.querySelector(".cliks");
  const numeroClick = parseInt(zona.textContent) + 1;

  const display_time = document.querySelector(".timeDisplay").textContent;
  zona.textContent = numeroClick;
  const timeWave = `onda ${numeroClick}-${display_time}`;

  contClickarea02.push(timeWave);
  const arrayLength = contClickarea02.length;

  sessionStorage.setItem("timeWave2", contClickarea02);
  sessionStorage.setItem("area02", arrayLength);

  related.textContent = `${buttonName} = ${arrayLength} ondas`;
}
function area03() {
  const related = document.querySelector(".related_3");
  const buttonName = document.querySelector("#area03").getAttribute("name");
  const zona = document.querySelector(".cliks");
  const numeroClick = parseInt(zona.textContent) + 1;

  const display_time = document.querySelector(".timeDisplay").textContent;
  zona.textContent = numeroClick;
  const timeWave = `onda ${numeroClick}-${display_time}`;

  contClickarea03.push(timeWave);
  const arrayLength = contClickarea03.length;

  sessionStorage.setItem("timeWave3", contClickarea03);
  sessionStorage.setItem("area03", arrayLength);

  related.textContent = `${buttonName} = ${arrayLength} ondas`;
}
function area04() {
  const related = document.querySelector(".related_4");
  const buttonName = document.querySelector("#area04").getAttribute("name");
  const zona = document.querySelector(".cliks");

  const numeroClick = parseInt(zona.textContent) + 1;

  const display_time = document.querySelector(".timeDisplay").textContent;
  zona.textContent = numeroClick;
  const timeWave = `onda ${numeroClick}-${display_time}`;

  contClickarea04.push(timeWave);
  const arrayLength = contClickarea04.length;

  sessionStorage.setItem("timeWave4", contClickarea04);
  sessionStorage.setItem("area04", arrayLength);

  related.textContent = `${buttonName} = ${arrayLength} ondas`;
}
