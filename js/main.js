// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User (id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let user = new User(1, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111);
console.log('User: ', user);
// створити пустий масив, наповнити його 10 об'єктами new User(....)
let userArr = [
    new User(2, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(3, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(7, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(4, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(1, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(6, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(8, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(9, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(10, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
    new User(5, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111),
];
console.log('User Array: ', userArr);
// --------------------------------
let userArr2 = [];
for (let i = 0; i < 10; i++) {
    let user = new User(1, 'Alexandr', 'Kazimir', 'kav29041984@gmail.com', 380671111111);
    user.id = Math.round(Math.random()*100);
    userArr2.push(user);
};
console.log('Наповнили масив з рандомними ID через цикл: ', userArr2)
// ---------------------------------
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
userArr.filter((value, index, array) => {
    if (value.id%2 === 0) {
        console.log('Par ID', value.id);
        document.write(`<p>Par ID: <b>${value.id}</b>  Ім'я: <b>${value.name}</b>  Прізвище: <b>${value.surname}</b>  Поштова адреса: <b>${value.email}</b>  Мобільний телефон: <b>${value.phone}</b></p>`);
    };
});

let sortedUserArr2 = userArr2.filter((value, index, array) => {
    if (value.id % 2 === 0) {
        console.log('Par ID', value.id);
        document.write(`<p>Par ID: <b>${value.id}</b>  Ім'я: <b>${value.name}</b>  Прізвище: <b>${value.surname}</b>  Поштова адреса: <b>${value.email}</b>  Мобільний телефон: <b>${value.phone}</b></p>`);
        return value.id;
    };
});
console.log('Відфільтрували sortedUserArr2, та залишили тільки об\'єкти з парними id', sortedUserArr2)

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
userArr.sort( function (a,b) {
    return a.id - b.id;
});
console.log('userArr Sorted by ID: ', userArr);
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id,
        this.name = name,
        this.surname = surname ,
        this.email = email,
        this.phone = phone,
        this.order = order
    };
};

let client1 = new Client(3, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
let client2 = new Client(1, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter', 'juce']);
let client3 = new Client(8, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk']);
let client4 = new Client(4, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread']);
let client5 = new Client(6, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'butter']);
let client6 = new Client(7, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter', 'sult', 'water']);
let client7 = new Client(2, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
let client8 = new Client(5, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
let client9 = new Client(9, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
let client10 =new Client(10, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);

// створити пустий масив, наповнити його 10 об'єктами Client
let client = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
    client9,
    client10,
];
console.log('Object of Users: ', client);
// ------------------------------------------
// створити пустий масив, наповнити його 10 об'єктами Client

let product2 = [];
for (let i = 0; i < 10; i++) {
    let client = new Client(10, 'Alex', 'Kazimir', 'kav29041984@gmail.com', 380672222, ['milk', 'bread', 'butter']);
    client.id = Math.round(Math.random()*100);
    product2.push(client);
}
console.log('Заповнили масив 10 об\'єктами Client', product2);
// ---------------------------------------------

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
console.log('Client', client);
let sortedProduct = client.sort(function (a, b) {
    return a.order.length - b.order.length;
});
console.log('sortedProduct', sortedProduct);