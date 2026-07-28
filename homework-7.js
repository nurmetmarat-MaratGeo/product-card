//Вывод в консоль лог: город и температуру
function infTemperCity(city, temperature) {
  console.log(`Сейчас в городе ${city} температура — ${temperature} градусов по Цельсию`);
}
infTemperCity('Дербент', 36)

//Вывод в консоль лог: по заднному параметру вывод скорости света
const speedLight = 299792;
function checkSpeed(speed) {
  if (speed > speedLight) {
    console.log('Сверхсветовая скорость');
  } else {
    console.log('Субсветовая скорость');
  }
}
checkSpeed(390000)
checkSpeed(90000)

//Вывод в консоль лог: покупка геодезического оборудования
const productName = 'Тахеомерт Sokkia FX201';
let productPrice = 2_500_000;

function buyProduct(myBalance) {
  if (productPrice <= myBalance) {
    console.log(`${productName} приобретён. Спасибо за покупку!`);
  } else {
    const difference = productPrice - myBalance;
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}
buyProduct(250_000)
buyProduct(2_500_000)

//Функция проверки соотвествия цвета (Создать 1 функцию и именовать её по своему усмотрению)

const myFavoriteColor = 'red'
function buyThings(colore) {
  if (colore === myFavoriteColor) {
    console.log('Отлично! Покупаю, мой любимы цвет');
  } else {
    console.log('Нет, нет! Уберите(((');
  }
}
buyThings('blue')
buyThings('red')

//Создать 3 переменных

//productName = 'Гель';
//productPrice = 2_500;
//myFavoriteColor = 'red'