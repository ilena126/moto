const toggleButton = document.getElementById("theme-toggle");

// Проверяем сохраненную тему или системные настройки
const isDarkMode = localStorage.getItem("theme") !== "light";

// Устанавливаем начальную тему
if (!isDarkMode) {
  document.body.classList.add("light-theme");
  toggleButton.textContent = "☀️";
}

