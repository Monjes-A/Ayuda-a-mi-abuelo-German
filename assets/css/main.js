// Porcentaje actual de la recaudación
var currentAmount = 450; // Actualiza este valor según el progreso real

// Monto objetivo
var targetAmount = 8000;

// Calcula el porcentaje
var percentage = (currentAmount / targetAmount) * 100;

// Actualiza la barra de carga y el texto
var progressBar = document.getElementById("progress");
progressBar.style.width = percentage + "%";

var progressText = document.getElementById("progress-text");
progressText.innerText = percentage.toFixed(2) + "%";
