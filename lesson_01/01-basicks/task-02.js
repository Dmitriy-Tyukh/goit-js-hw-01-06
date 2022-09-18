/**
 * Ветвеления
 *
 * Напиши скрипт, который выводит в консоль строку "Это положительное число",
 * если в prompt пользователь ввел число больше нуля. Если был введен ноль,
 * выводи в консоль строку `"Это ноль"`. Если передали отрицательное число,
 * в консоли должна быть строка `"Это отрицательное число"`.
 */

// let inputFromUser = prompt('Введите число');
// inputFromUser = Number(inputFromUser);

// if (inputFromUser > 0) {
//     console.log("Это положительное число")
// } else if (0 === inputFromUser) {
//     console.log("Это ноль")
// } else if (0 > inputFromUser) {
//     console.log("Это отрицательное число")
// } else {console.log("Вы ввели не число")}

let inputFromUser = prompt("Введите число");

inputFromUser = Number(inputFromUser);

// if (inputFromUser) {
//   if (inputFromUser > 0) {
//     console.log("Это положительное число");
//   } else if (0 === inputFromUser) {
//     console.log("Это ноль");
//   } else if (0 > inputFromUser) {
//     console.log("Это отрицательное число");
//   } else {
//     console.log("Вы ввели не число");
//   }
// } else {
//     console.log('Вы нажали отмену или не ввели данные')
// }

function displayMsg(num) {
  if (0 === num) {
      console.log("Это ноль");
      return;
  }

  if (num) {
    if (num > 0) {
      console.log("Это положительное число");
    } else if (0 > num) {
      console.log("Это отрицательное число");
    } else {
      console.log("Вы ввели не число");
    }
  } else {
    console.log("Вы нажали отмену или не ввели данные");
  }
}

displayMsg(inputFromUser);
