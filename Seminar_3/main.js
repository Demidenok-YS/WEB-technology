/*alert('hello');

let num = 5;  //если переменная будет меняться
const num = 5; //если переменная не будет меняться, сейчас в основном указывается именно const
console.log(num);

num = 10;
console.log(num);
*/

// Задача 2:
//Получить от пользователя два числа и вывести в диалоговое 
//окно сумму значений, которые ввел пользователь. 
//Пример, Результат сложения 5 и 2 равен 7.

// const a = Number.parseInt(prompt('Введите первое число ')); // Number.parseFloat для вещественных чисел
// const b = Number.parseInt(prompt('Введите второе чило '));  //+prompt('Введите второе чило '); 2 вариант
// //alert(`Результат сложения ${a} и ${b} равен ${a + b}.`);
// function sum(n, m){
//     return n + m;
// }

// alert(`Результат сложения ${a} и ${b} равен ${sum(a,b)}.`);

// Задача 4:
// Вывести на экран в диалоговом окне текст с сообщением "Вам хорошо живется?" 
// и кнопками ОК и Отмена , для чего необходимо использовать confirm. 
// При нажатии на кнопку Ок вывести в диалоговом окне текст с сообщением "Тогда мы идем к Вам!". 
// При нажатии на кнопку Отмена вывести в диалоговом окне текст с сообщением "Ну , Вы держитесь там!".

// const userQue = confirm('Вам хорошо живется?');
// if (userQue) {             //if (userQue == true) {     
//     alert("Тогда мы идем к Вам!");
// }
// else {
//     alert("Ну , Вы держитесь там!");
// }

// Задача 5:
// Перепишите код , используя конструкцию switch-case, запрашивая продукт через диалоговое окно

// let product = "Бананы";

// if (product == "Мандарины") {
//     alert("Мандарины стоят 100 руб/кг");
// } else if (product == "Бананы") {
//     alert("Бананы и груши стоят 70 руб/кг");
// } else if (product == "Груши") {
//     alert("Бананы и груши стоят 70 руб/кг");
// } остальное {
//     alert("Нет такого продукта");
// }

// const product = prompt("Какой продукт Вас интересует? ");
// switch(product.toLowerCase()){
//     case "мандарины":
//         alert("Мандарины стоят 100 руб/кг");
//         break;
//     case "бананы":
//         // alert("Бананы и груши стоят 70 руб/кг");
//         // break;
//     case "груши":
//         alert("Бананы и груши стоят 70 руб/кг");
//         break;
//     default:
//         alert("Нет такого продукта");
// }

// Задача:
// Функция getMaxEvenElement принимает массив с целыми числами , необходимо реализовать
// функцию так, чтобы она возвращала значение большего элемента массива, который записан в четном индексе , 
// включая 0.

function getMaxEvenElement(arr) {
    let max = arr[0];
    for(let i = 2; i < arr.length; i+=2) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxEvenElement([5, 7, -1, 12, 3, 0])); //5
console.log(getMaxEvenElement([4, -12, 29, 6, 31, 92, -50])); //31