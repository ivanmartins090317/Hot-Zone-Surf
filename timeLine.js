const timeHeat = localStorage.getItem("valueTime") + "000";
const timeWave1 = sessionStorage.getItem("timeWave1");
console.log(timeWave1);
let arr = [];
arr.push(timeWave1);
console.log(arr);
const createLi = setInterval(function () {
  const ul = document.querySelector(".timeLine");
  const li = document.createElement("li");
  ul.appendChild(li);
  const span = document.createElement("span");
  li.appendChild(span);
  const info = document.createElement("p");
  info.classList.add("infoTime");
  info.innerText = arr[1];
  span.appendChild(info);
}, 1000);

setTimeout(() => {
  console.log("encerra createLi");
  clearInterval(createLi);
}, `${timeHeat}`);
