/**
 * Отображение времени (if...else)
 *
 * Напиши скрипт для отображения часов и минут в консоли браузера
 * в виде строки формата "14 ч. 26 мин.". Если значение переменной
 * `minutes` равно `0`, то выводи строку `"14 ч."`, без минут.
 */

const hours = 14;
const minutes = 46;

// if (minutes === 0) {

// if (0 === minutes) {
//     console.log(`${hours} ч.`);
// } else {
//     console.log(`${hours} ч. ${minutes} мин.`);
    
// }

// 0 === minutes ? console.log(`${hours} ч.`) : console.log(`${hours} ч. ${minutes} мин.`);

// function showTime(hours, minutes) {
//     if (0 === minutes) {
//     console.log(`${hours} ч.`);
// } else {
//     console.log(`${hours} ч. ${minutes} мин.`);
    
// }
// }

// function showTime(hours, minutes) {
//     if (0 === minutes) {
//         return(`${hours} ч.`);
//     } else {
//         return(`${hours} ч. ${minutes} мин.`);
    
//     }
// }



function showTime(hours, minutes) {
   return 0 === minutes ? `${hours} ч.` : `${hours} ч. ${minutes} мин.`;
    
}

console.log(showTime(14, 50));
console.log(showTime(10, 0));