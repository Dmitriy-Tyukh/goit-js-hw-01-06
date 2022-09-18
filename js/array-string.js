// Задача 1 - Базовые операции с массивом

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива. Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggy» в начало массива.

// =======================================================

// const genres = ['Jazz', 'Blues'];
// genres.push('Рок-н-ролл');
// console.log(genres[0]);
// console.log(genres[genres.length - 1]);
// console.log(genres.shift());
// genres.unshift('Country', 'Reggy');
// console.log(genres);

// =======================================================

// Задача 2 - Массивы и строки
// Напиши скрипт для вычисления площади прямоугольника со сторонами, значения которых хранятся в переменной values в виде строки. Значения гарантированно разделены пробелом.

// let values = '2 6';
// let valuesArr = values.split(' ');
// let total = 2 * (valuesArr[0] + valuesArr[1]);
// total = Number(total);
// console.log( typeof total);

// console.log(document);

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'lowercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);

// const listWithClass = document.querySelector('.menu');
// console.log(listWithClass);

// const menuItemsByTagName = document.querySelectorAll('li');
// console.log(menuItemsByTagName);

// const menuItemsByClass = document.querySelectorAll('.menu-item');
// console.log(menuItemsByClass);

// const firstMenuItem = document.querySelector('.menu-item');
// firstMenuItem.style.color = 'tomato';
// console.log(firstMenuItem);

//=========================================
// Задача 3 - Перебор массива
// Напиши скрипт для перебора массива fruits циклом for. Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента. Нумерация элементов должна начинаться с 1.

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];

// for (let i = 0; i < fruits.length; i+=1) {
//     const elem = fruits[i];
//     const idxElem = i + 1;
//     console.log(`${idxElem} : ${elem} `);
// }

// ============================================
// Задача 4 - Массивы и циклы
// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя. В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми. Порядковый номер имен и телефонов в строках указывают на соответствие. Количество имен и телефонов гарантированно одинаковое.

// const names = ' Vova, Sara, Ira ';
// const phone = ' 111, 222, 333';

// const nameArr = names.split(',');
// const phoneArr = phone.split(",");

// for (let i = 0; i < nameArr.length; i++) {
//   const element = nameArr[i];
//   const phonEL = phoneArr[i];
//   console.log(`${element}: ${phonEL};`);
// }

// ============================================
// Задача 5 - Массивы и строки
// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего. Результирующая строка не должна начинаться или заканчиваться пробельным символом. Скрипт должен работать для любой строки.

// const str = " Vova, Sara, Ira, Cola, Roma "
// const newStr = str.split(",").slice(1, - 1).join(",");

// console.log('newStr', newStr);

// ==============================================
// Задача 6 - Массивы и строки
// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = "Welcome to the future";
// const newStr = string.split(" ").reverse().join(" ");
// console.log('newStr', newStr);

// ===============================================
// Задача 7 - Поиск элемента
// Напиши скрипт поиска самого маленького числа в массиве. Код должен работать для любого массива чисел. Используй цикл для решения задачи.

// const numbers = [ 1, 17, -1, 2, 94, -23, 37];

// ===== Min

// const minNum = Math.min(...numbers);
// console.log(Math.min(...numbers));

// ===== Min

// numbers.sort((a, b) => a - b);
// console.log('numbers', numbers[0]);

// ===== Min

// let minNum = numbers[0];

// for (const num of numbers) {
//     if (num < minNum) {
//         minNum = num;
//     }
// }
// console.log('minNum', minNum);

// ====== Max

// let maxNum = numbers[0];

// for (const num of numbers) {
//   if (num > maxNum) {
//     maxNum = num;
//   }
// }
// console.log('minNum', maxNum);

// ==========================================
// Задача 8 - использование includes
// const emails = ["user@gmail.com", "admin@gmail.com", "student@gmail.com"];
// const userMail = prompt("Enter your email");
