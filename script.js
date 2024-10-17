﻿// Задание 1
// Описание задачи: Дан объект numbers. Необходимо вывести в консоль все значения,
// которые больше или равны 3.
console.log('======Задание 1=======================================================================');
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
    };

for (const item in numbers) {
    if(numbers[item] >= 3){
        console.log(numbers[item]);
    }
}
console.log('======Задание 2=======================================================================');

// Задание 2
// Описание задачи: Из объекта post, который задан в константе, выведите значения с
// комментариями в консоль.

const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

console.log(post.author);
console.log((post.comments[0]).rating.dislikes);
console.log((post.comments[1]).userId);
console.log((post.comments[1]).text);

console.log('======Задание 3=======================================================================');

// Задание 3
// Описание задачи: Дан массив products. Уменьшите цену каждого продукта на 15% с
// использованием метода forEach.

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

for (const item in products) {
    (products[item]).price = (products[item]).price * 0.85;
}
console.log(products);

console.log('======Задание 4=======================================================================');

// Задание 4
// Описание задачи:
// 1. Выведите в консоль массив продуктов, у которых есть хотя бы одна
// фотография, используя метод filter.
// 2. Отсортируйте массив products по цене в порядке возрастания и выведите
// отсортированный массив в консоль.

const products2 = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];

const products3 = products2.filter(product => product.photos
    && product.photos.length > 0);
    console.log(products3);

const products4 = products2.slice().sort((a, b) => a.price - b.price);
console.log(products4);

console.log('======Задание 5=========================================================================');

// Задание 5 Необязательное задание
// Описание задачи: Есть два массива en и ru. Объедините их в объект, где значения из
// первого массива будут ключами, а значения из второго массива — значениями.

const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

const week = {};
for (let i = 0; i < en.length; i++){
    week[en[i]] = ru[i];
}
console.log(week);