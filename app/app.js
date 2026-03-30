const button = document.getElementById("workout-btn");
const logContainer = document.getElementById("log");

button.addEventListener("click", () => {
  const today = new Date().toLocaleDateString();

  let logs = JSON.parse(localStorage.getItem("workoutLogs")) || [];

  logs.push({ date: today });

  localStorage.setItem("workoutLogs", JSON.stringify(logs));

  renderLogs();
});

function renderLogs() {
  let logs = JSON.parse(localStorage.getItem("workoutLogs")) || [];

  logContainer.innerHTML = "";

  logs.forEach((log) => {
    const p = document.createElement("p");
    p.textContent = `Entrenaste: ${log.date}`;
    logContainer.appendChild(p);
  });
}

const clearButton = document.getElementById("clear-btn");

clearButton.addEventListener("click", () => {
  const confirmClear = confirm("¿Seguro que quieres borrar todos los registros?");

  if (confirmClear) {
    localStorage.removeItem("workoutLogs");
    renderLogs();
    logContainer.innerHTML = "<p>No hay registros aún</p>";
  }
});