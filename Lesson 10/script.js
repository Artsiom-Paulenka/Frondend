// let elements = document.querySelectorAll('li');
// // console.log(elements[0].innerHTML);
//  for(let elem of elements){
// console.log(elem.innerText);
//  }
// let elements = document.querySelectorAll('ul > li:last-child');
// for(let elem of elements){
// console.log(elem.innerText);
// }

// let elements = document.querySelector('li');
// console.log(elements);

// let parag = document.querySelector('.P');
// parag.innerText = 'привет';
// console.log(parag.innerText);

let elements = document.querySelectorAll('p');
for (let elem of elements){
    elem.innerText = 'привет';
    console.log(elem);
}