// Функция для генерации случайного цвета
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("switch");
  const h1 = document.getElementById("colorText_h1");
  const h3 = document.getElementById("colorText_h3");

  button.addEventListener("click", () => {
    h1.style.color = getRandomColor();
    h3.style.color = getRandomColor();
  });
});
