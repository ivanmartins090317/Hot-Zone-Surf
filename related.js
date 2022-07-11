// informações da pagina inicial
const nameEvent = localStorage.getItem("event_name");
const heat = localStorage.getItem("heat_name");
const time = localStorage.getItem("valueTime");
// informações da pagina principal
// comprimento total de cada db
const waves01 = sessionStorage.getItem("area01");
const waves02 = sessionStorage.getItem("area02");
const waves03 = sessionStorage.getItem("area03");
const waves04 = sessionStorage.getItem("area04");
// onda e tempo de cada area
const timeWave1 = sessionStorage.getItem("timeWave1");
const timeWave2 = sessionStorage.getItem("timeWave2");
const timeWave3 = sessionStorage.getItem("timeWave3");
const timeWave4 = sessionStorage.getItem("timeWave4");

function relatedScreen() {
  console.log("area1", timeWave1);
  console.log("area2", timeWave2);
  console.log("area3", timeWave3);
  console.log("area4", timeWave4);

  console.log(contClickarea01);
  addInfoScren();
  addElementWave1();
}
function addInfoScren() {
  // informações da pagina de relatorio
  const showEvent = document.querySelector(".event");
  const showHeat = document.querySelector(".name_heat");
  const showTime = document.querySelector(".time_heat");

  const teste = document.querySelector(".testewaves");

  showEvent.textContent = `Event ${nameEvent}`;
  showHeat.textContent = `Round-heat ${heat}`;
  showTime.textContent = `Heat time ${time} minutes`;
}
// criando lista com status de ondas
function addElementWave1() {
  const span = document.createElement("span");
  span.textContent = `${waves01} ondas surfadas area 1:\n`;
  span.style.fontWeight = "bold";

  document.querySelector(".wave01").appendChild(span);
  const span2 = document.createElement("span");
  span2.textContent = `waves and time: ${timeWave1}`;
  span2.style.fontWeight = "normal";
  span.appendChild(span2);

  if (waves01 == null) {
    span.textContent = "sem ondas surfadas na area2";
  }
}
// const li2 = document.createElement("li");
// li2.textContent = `${waves02} ondas surfadas area 2 ${timeWave2}`;
// li.appendChild(li2);
// if (waves02 == null) {
//   li2.textContent = "sem ondas surfadas na area2";
// }
// const li3 = document.createElement("li");
// li2.textContent = `${waves03} ondas surfadas area 2 ${timeWave3}`;
// li2.appendChild(li3);
// if (waves02 == null) {
//   li3.textContent = "sem ondas surfadas na area2";
// }

// // arvore dom principal
// const ul = document.querySelector(".waves").appendChild(li);

// ** criar função para cada li , inserir no html ul e chamarvas funcoes na função principal de script
