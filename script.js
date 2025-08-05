let display = document.getElementById("display");

function appendValue(val) {
  if (display.value === "0") {
    display.value = val;
  } else {
    display.value += val;
  }
}

function clearDisplay() {
  display.value = "0";
}

function deleteLast() {
  if (display.value.length > 1) {
    display.value = display.value.slice(0, -1);
  } else {
    display.value = "0";
  }
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch (e) {
    display.value = "Error";
  }
}

// Toggle theme
const themeSwitch = document.getElementById("themeSwitch");
themeSwitch.addEventListener("change", function () {
  document.body.classList.toggle("light");
});
