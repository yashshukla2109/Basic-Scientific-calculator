const display = document.getElementById("display");
let current = "";
let isDegrees = false;
let isInverseMode = false;

function append(value) {
  current += value;
  display.value = current;
}

function clearDisplay() {
  current = "";
  display.value = "";
}

function backspace() {
  current = current.slice(0, -1);
  display.value = current;
}

function toRadians(deg) { return deg * (Math.PI / 180); }
function toDegrees(rad) { return rad * (180 / Math.PI); }

document.getElementById("angleToggle").onclick = () => {
  isDegrees = !isDegrees;
  document.getElementById("angleToggle").textContent = isDegrees ? "DEG" : "RAD";
};

let darkMode = true;
document.getElementById("themeToggle").onclick = () => {
  display.classList.toggle("display-light");
  darkMode = !darkMode;
  document.getElementById("themeToggle").textContent = darkMode ? "🌙" : "☀️";
};

function mode() {
  isInverseMode = !isInverseMode;
  const btns = ["sinBtn","cosBtn","tanBtn"];
  btns.forEach(id => {
    const btn = document.getElementById(id);
    if(!btn) return;
    const base = id.replace("Btn","");
    btn.textContent = isInverseMode ? base + "⁻¹" : base;
    btn.onclick = () => append(isInverseMode ? `a${base}(` : `${base}(`);
  });
}

function calculate() {
  try {
    let expr = current
      .replace(/π/g,"Math.PI")
      .replace(/e/g,"Math.E")
      .replace(/√\(/g,"Math.sqrt(")
      .replace(/log\(/g,"Math.log10(")
      .replace(/ln\(/g,"Math.log(")
      .replace(/\^/g,"**");

    // Define functions in the local scope
    const sin  = x => isDegrees ? Math.sin(toRadians(x)) : Math.sin(x);
    const cos  = x => isDegrees ? Math.cos(toRadians(x)) : Math.cos(x);
    const tan  = x => isDegrees ? Math.tan(toRadians(x)) : Math.tan(x);
    const asin = x => isDegrees ? toDegrees(Math.asin(x)) : Math.asin(x);
    const acos = x => isDegrees ? toDegrees(Math.acos(x)) : Math.acos(x);
    const atan = x => isDegrees ? toDegrees(Math.atan(x)) : Math.atan(x);

    const result = eval(expr); // Use eval in safe scoped environment

    display.value = Number.isFinite(result) ? +result.toFixed(10) : "Error";
    current = result.toString();
  } catch {
    display.value = "Error";
    current = "";
  }
}

document.addEventListener("keydown", e => {
  if(e.key === "Enter") calculate();
});
