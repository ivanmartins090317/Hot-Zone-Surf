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
  addInfoScren();
  addElementWave1();
  addElementWave2();
  addElementWave3();
  addElementWave4();
}

function deleteRelated() {
  localStorage.clear();
  sessionStorage.clear();
  location.reload();
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
  span2.textContent = timeWave1;
  span2.style.fontWeight = "normal";
  span.appendChild(span2);

  if (waves01 == null) {
    span.textContent = "Nenhuma onda surfada na area 1";
  }
}

function addElementWave2() {
  const span = document.createElement("span");
  span.textContent = `${waves02} ondas surfadas area 2:\n`;
  span.style.fontWeight = "bold";

  document.querySelector(".wave02").appendChild(span);
  const span2 = document.createElement("span");
  span2.textContent = timeWave2;
  span2.style.fontWeight = "normal";
  span.appendChild(span2);

  if (waves02 == null) {
    span.textContent = "Nenhuma onda surfada na area 2";
  }
}
function addElementWave3() {
  const span = document.createElement("span");
  span.textContent = `${waves03} ondas surfadas area 3:\n`;
  span.style.fontWeight = "bold";

  document.querySelector(".wave03").appendChild(span);
  const span2 = document.createElement("span");
  span2.textContent = timeWave3;
  span2.style.fontWeight = "normal";
  span.appendChild(span2);

  if (waves03 == null) {
    span.textContent = "Nenhuma onda surfada na area 3";
  }
}
function addElementWave4() {
  const span = document.createElement("span");
  span.textContent = `${waves04} ondas surfadas area 4:\n`;
  span.style.fontWeight = "bold";

  document.querySelector(".wave04").appendChild(span);
  const span2 = document.createElement("span");
  span2.textContent = timeWave4;
  span2.style.fontWeight = "normal";
  span.appendChild(span2);

  if (waves04 == null) {
    span.textContent = "Nenhuma onda surfada na area 4";
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
