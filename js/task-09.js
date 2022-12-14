// Задание 9
// Напиши скрипт, который изменяет цвета
//  фона элемента <body> через инлайн стиль при
//   клике на button.change-color и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерации случайного цвета используй функцию getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

const btn = document.querySelector(".change-color");
const spn = document.querySelector(".color");

btn.addEventListener("click", handleSubmit);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function handleSubmit(event) {
  spn.textContent=getRandomHexColor();
  spn.style.color=spn.textContent;
  document.body.style.background = spn.textContent;
}
  