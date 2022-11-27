// let fruits = ['Apple', 'Banana'];
// console.log(fruits.length);

// let FirstFruits = fruits[0];
// console.log(FirstFruits);

// let LastFruits = fruits[fruits.length - 1];
// console.log(LastFruits);

// fruits.push('Mango');
// console.log(fruits);

// fruits.pop();
// console.log(fruits);

// fruits.unshift('Mango');

// let parm1 = fruits.shift();
// console.log(parm1);
// console.log(fruits);

// let spl = fruits.splice(1, 2);
// console.log(typeof (spl));

// let arr = [];
// let num1 = Number(prompt('Enter the number'));
// let num2 = Number(prompt('Enter the number'));
// let num3 = Number(prompt('Enter the number'));
// arr.push(num1, num2, num3);
// console.log(arr);

// let Style = ['Джаз', 'Блюз'];
// Style.push('Рок-н-ролл');
// Style[1] = 'Классика';
// Style.shift();
// let NewStyle = Style.shift();
// console.log(Style);
// Style.unshift('Рэп', 'Регги');
// console.log(Style);

// for (let num = 0; num < 10; num++){
//     if (num == 2 || num ==5) {
//         continue;
//     }
//     console.log(num);
// };

// let array = [5, -9, 18, 9, -6];
// for (let num = 0; num < array.length; num++){
//     if (array[num] > 0)
//         console.log(array[num]);
// }

let array = [5, -9, 18, 9, -6];
let sum = 0;
for (let num = 0; num < array.length; num++){
    if (array[num] > 0)
        sum += array[num];
}
console.log(sum);




