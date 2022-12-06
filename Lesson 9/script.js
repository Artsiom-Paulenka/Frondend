//ОБЪЕКТЫ(Object)

// let user1 = { // присвоить переменной user1 объект {}
    // name: "John", // ключ: название ключа
    // age: 30,
    // isAdmin: true,
    // "likes car": true // так пишется ключ с двумя и более словами
// };
// user1.isMarried = false; // добавить свойство isMarried
// user1["likes car"] = false; // чтобы изменить значение надо ставить [ ]
// delete user1["likes car"]
// delete user1.isAdmin;
// console.log(user1.name); // вывести в консоль в объекте user1 ключ name
// console.log(user1.age);
// console.log(user1);
// const == let  // в объектах равны

// for (let key in user1) {
    // console.log(key); //когда нужно вывести ключи
    // console.log(user1[key]); // когда нужно вывыести значения ключей
// }
// let codes = {
//     "49": "Германия",
//     "41": "Швейцария",
//     "44": "Великобритания"
// }
//     for (let code in codes) {
//         console.log(+code); //ставим плюс и все ключи идут по порядку
// }
// let user = {};
//  console.log(typeof (user));

// user.name = 'John';
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log(user);
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }
// let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

// function имя(параметры) {
//     ...тело...
// }
// function showMessage() {
//     console.log('hello World');
// }

// showMessage();
// showMessage();
// function showMessage(from, text) {
//     console.log(from + " " + text);
// }
// showMessage('John', 'Hello');
// showMessage('Lily', 'how are you');

// function sum(a, b) {
//     console.log(a + b);
// }
// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));
// sum(num1, num2);

// function sum(a, b) {
//     return a + b;
// }
// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));
// console.log(sum(num1, num2));

function checkAge(age) {
    if (age > 18) {
        return true;
    }
    else {
        return false;
    }
}
let userAge = Number(prompt('Сколько вам лет'));
if (checkAge(userAge)) {
    console.log('Доступ получен');
}
else {
    console.log('Доступ закрыт');  
}

