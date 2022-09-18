/**
 * Дедлайн сдачи проекта (switch)
 *
 * Выполни рефакторинг кода задачи номер  `switch`.
 *
 */
// const daysToDeadline = 2;

// if (0 === daysToDeadline) {
//     console.log("Сегодня");
// } else if (1 === daysToDeadline) {
//     console.log("Завтра");
// } else if (2 === daysToDeadline) {
//     console.log("Послезавтра");
// } else {
//     console.log("Дата в будущем");
// }

const daysToDeadline = 6;
switch (daysToDeadline) {
    case 0:
        console.log("Сегодня");
        break;

    case 1:
        console.log("Завтра");
        break;
    case 2:
        console.log("Послезавтра");
        break;

    default:
        console.log("Дата в будущем");
}
