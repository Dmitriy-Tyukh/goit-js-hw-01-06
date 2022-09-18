/**
 * Форматирование ссылки (includes и логическое «И»)
 *
 * Напиши скрипт который проверяет заканчивается ли значение
 * переменной `link` символом `/`. Если нет, добавь в конец
 * значения `link` этот символ, но только в том случае, если
 * в `link` есть подстрока `"my-site"`. Используй конструкцию `if...else`.
 * https://my-site.com/about
 */



let link = 'https://my-site.com/about'

function createUrl(link) {
    
if (link.includes('my-site') && !link.endsWith('/')) {
    link += '/'
}    
 return link
}

console.log(createUrl(link))