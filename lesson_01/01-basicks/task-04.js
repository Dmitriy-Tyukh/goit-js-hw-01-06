/**
 * Форматирование ссылки (endsWith)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ. Используй конструкцию `if...else`.
 * https://my-site.com/about
 * https://my-site.com/about/
 */


/*'Hello Ihor and World'.startsWith('Hello')
true
'Hello Ihor and World'.startsWith('Pizza')
false
'Hello Ihor and World'.endsWith('Pizza')
false
'Hello Ihor and World'.endsWith('World')
true
'Hello Ihor and World'.endsWith('world')
false*/


let link = 'https://my-site.com/about'

// if (!link.endsWith('/')) {
//     link += '/'
// }    
// console.log(link)

function createUrl(link) {
    
if (!link.endsWith('/')) {
    link += '/'
}    
 return link
}

console.log(createUrl(link))