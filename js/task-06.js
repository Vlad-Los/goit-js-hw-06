// Задание 6
// Напиши скрипт, который при потере фокуса на инпуте (событие blur),
//  проверяет его содержимое на правильное количество введённых символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Сколько символов должно быть в инпуте, 
// указывается в его атрибуте data-length.
// Если введено подходящее количество символов,
//  то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, 
// используй CSS-классы valid и invalid, 
// которые мы уже добавили в исходные файлы задания.


// /____________________________________________

// document.getElementById("validation-input").onblur = function() {
//     console.log(this.value.length);
//     if (this.getAttribute('data-length') > this.value.length) { 
//     this.classList.remove('valid');
//     this.classList.add('invalid');
//     } else {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
//     }
//     };

const textInput = document.getElementById("validation-input");


textInput.addEventListener("blur", () => {
        //console.log(textInput.value.length);
        if (textInput.getAttribute('data-length') > textInput.value.length) { 
            textInput.classList.remove('valid');
            textInput.classList.add('invalid');
        } else {
            textInput.classList.remove('invalid');
            textInput.classList.add('valid');
        }
    });
// /______________________________________________

// const validationInput = document.querySelector('#validation-input');
// const validationInputValid = document.querySelector('#validation-input.valid');
// const validationInputInvalid = document.querySelector('#validation-input.invalid');


// removeFocusBtn.addEventListener("click", () => {
//     textInput.blur();
//     });



// const textInput = document.querySelector(".text-input");
// const setFocusBtn = document.querySelector('[data-action="set"]');
// const removeFocusBtn = document.querySelector('[data-action="remove"]');

// setFocusBtn.addEventListener("click", () => {
// textInput.focus();
// });

// removeFocusBtn.addEventListener("click", () => {
// textInput.blur();
// });

// textInput.addEventListener("focus", () => {
// textInput.value = "This input has focus";
// });

// textInput.addEventListener("blur", () => {
// textInput.value = "";
// });