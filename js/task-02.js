// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>.
//  Обзательно используй метод document.createElement().
// Добавит название ингредиента как его
//  текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну 
// операцию в список ul#ingredients.





const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

var ul = document.getElementById("ingredients");
const li_array = ingredients.map(item =>{
  const li = document.createElement('li');
  li.textContent=item;
  li.classList.add('.item');
  return li;
})
ul.append(...li_array);



