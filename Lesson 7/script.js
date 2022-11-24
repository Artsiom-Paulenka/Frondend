// // alert('Hello');

// // console.log('Hello world');

// console.log('Hello world');

// let FirstName = "Anna";

// let num = 5;

// let question = true;

// num = 3;

// const pi = 3.14;

// console.log(num);

// let result = prompt("Enter the number");

// console.log(typeof (result));

// let str1 = "Hello";
// let str2 = `Hello ${num}`;

// РЕШАЛ САМОСТОЯТЕЛЬНО
// Задача на возраст
// Написать программу, которая запрашивает у пользователя его возраст (в годах) и выводит,
// сколько ему минут.
// let age = Number(prompt('Сколько вам лет?'));
// console.log('Your age is ' + (age * 525960) + ' minutes');

// Задача: Написать программу, которая считывает через prompt число и выводит в консоль ее квадрат.
// let age = Number(prompt('Enter the number', 'number'));
// console.log('Your number is ' + age ** 2);

// Написать программу, которая считывает два числа (объявляем две переменные и
//     записываем туда результат работы двух вызовов prompt) и выводит их сумму. Не забудьте
//     преобразовать полученные значения в число.
// let FirstNum = +prompt('Enter first number');
// let SecondNum = +prompt('Enter second number');
// console.log(`"Sum two number's is" ${FirstNum + SecondNum}`);
// let FirstNum = +prompt('Enter first number');
// let SecondNum = +prompt('Enter second number');
// if (FirstNum > SecondNum) {
//     console.log(`Biggest number is ${FirstNum}`);
// }
// else {
//     console.log(SecondNum );
// }
// Задача. Написать программу, которая считывает через prompt одно число и выводит одну из строк
// “число положительное”, “число отрицательное”, “число равно нулю”
let Number = +prompt('Введите число');
if (Number > 0) {
    console.log('число положительное');
}
if (Number == 0) {
    console.log('число равно нулю');
}
        if (Number < 0) {
            console.log('число отрицательное');
        }