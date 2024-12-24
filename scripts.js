// Функция для генерации случайного цвета
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Получаем кнопку по ID и добавляем обработчик события
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("switch");
  const h1 = document.getElementById("colorText");

  button.addEventListener("click", () => {
    h1.style.color = getRandomColor();
  });
});
