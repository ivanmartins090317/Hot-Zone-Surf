function getValue() {
  const event = document.querySelector("#event").value;
  const heat = document.querySelector("#heat").value;

  const time = document.querySelector("#time").value;

  localStorage.setItem("event_name", event);
  localStorage.setItem("heat_name", heat);
  localStorage.setItem("valueTime", time);

  console.log(heat);
}
