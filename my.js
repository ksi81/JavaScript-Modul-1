'use strict';

//  Создайте скрипт турагенства, продающего поездки в 3-х группах: sharm, hurgada и taba.
//   Кол-во мест в группах ограничено: sharm - 15, hurgada - 25, taba - 6.

let sharm = 15;
let hurgada = 25;
let taba = 6;

const tabaTur = 0;
const sharmTur = 1;
const hurgadaTur = 2;

//   Когда пользователь посещает страницу, ему необходимо предложить ввести число необходимых мест,
const userInput = prompt('Мы агенстов продающие поездки в 3-х группах: sharm, hurgada и taba. Введите количество необходимых мест', 'от 1 до 25');
//   результат сохранить в переменную.
const countUserSeats = Number(userInput);
const isValidInput = userInput !== null && !Number.isNaN(countUserSeats) && userInput >0;
console.log(isValidInput);
// Необходимо проверить является ли введенные данные целым положительным числом. 
if (isValidInput) {
  if (countUserSeats) {
    if(countUserSeats <= taba){
    //   haveSeats = true;
     const userInput2 = prompt('Под ваш критерий подходят такие туры 0 - taba, 1 - sharm, 2 - hurgada. Введите цифру:', );   
    const turChoice = Number(userInput2);
    const isValidInput2 = userInput2 !== null && !Number.isNaN(turChoice);
      if (isValidInput2) {
        let haveTur;
        let tur;
          switch (turChoice) {
            case tabaTur:
              haveTur = true;
              console.log(haveTur);
              tur = "taba";
            break;
      
            case sharmTur:
              haveTur = true;
              console.log(haveTur);
              tur = "sharm";
            break;
            
            case hurgadaTur:
              haveTur = true;
              console.log(haveTur);
              tur = "hurgada";
            break;

            default:
              haveTur = false;
      }
        if (haveTur) {
              alert(`Вы заказали ${countUserSeats} мест в ${tur} .Приятного путешествия в группе!`);
          if (`${tur}` === "hurgada"){
            hurgada = (hurgada - countUserSeats);
              console.log(` ${tur} - Осталось количесво мест ${hurgada}`);
          } else if (`${tur}` === "taba"){
          taba = (taba - countUserSeats);
              console.log(`${tur} - Осталось количесво мест ${taba}`);
          } else if ("sharm"){
          sharm = (sharm - countUserSeats);
              console.log(`${tur} - Осталось количесво мест ${sharm}`);}
          else  {
              alert('Нам очень жаль, приходите еще!');}
        
}   
} 
}
    //////2 часть
     else if(countUserSeats > taba && countUserSeats <= sharm){
      // haveSeats = true;
     const userInput2 = prompt('под ваш критерий подходят 1 - sharm, 2 - hurgada', );   
const turChoice = Number(userInput2);
const isValidInput2 = userInput2 !== null && !Number.isNaN(turChoice);
if (isValidInput2) {
  let haveTur;
  let tur;
  switch (turChoice) {
      
      case sharmTur:
      haveTur = true;
      console.log(haveTur);
      tur = "sharm";
      break;
      
      case hurgadaTur:
      haveTur = true;
      console.log(haveTur);
      tur = "hurgada";
      break;

    default:
      haveTur = false;
  }
 
  if (haveTur) {
    alert(`Вы заказали ${countUserSeats} мест в ${tur} .Приятного путешествия в группе!`);
    if (`${tur}` === "hurgada"){
      hurgada = (hurgada - countUserSeats);
         console.log(` ${tur} - Осталось количесво мест ${hurgada}`);
    } else if (`${tur}` === "taba"){
    taba = (taba - countUserSeats);
         console.log(`${tur} - Осталось количесво мест ${taba}`);
    } else if ("sharm"){
    sharm = (sharm - countUserSeats);
         console.log(`${tur} - Осталось количесво мест ${sharm}`);}
  
   else  {
    alert('Нам очень жаль, приходите еще!');}
  
} 
  
} 
      
}
    /////конец 2 части
    ////3 часть
    else if(countUserSeats > sharm && countUserSeats <= hurgada){
      // haveSeats = true;
     const userInput2 = prompt('под ваш критерий подходит только hurgada - введите 2 если согластны  ', );   
const turChoice = Number(userInput2);
const isValidInput2 = userInput2 !== null && !Number.isNaN(turChoice);
if (isValidInput2) {
  let haveTur;
  let tur;
  switch (turChoice) {

      case hurgadaTur:
      haveTur = true;
      console.log(haveTur);
      tur = "hurgada";
      break;

    default:
      haveTur = false;
      alert ('Вы ввели не тот номер!');
  }
 
  if (haveTur) {
    alert(`Вы заказали ${countUserSeats} мест в ${tur} .Приятного путешествия в группе!`);
    if (`${tur}` === "hurgada"){
      hurgada = (hurgada - countUserSeats);
         console.log(` ${tur} - Осталось количесво мест ${hurgada}`);
    } else if (`${tur}` === "taba"){
    taba = (taba - countUserSeats);
         console.log(`${tur} - Осталось количесво мест ${taba}`);
    } else if ("sharm"){
    sharm = (sharm - countUserSeats);
         console.log(`${tur} - Осталось количесво мест ${sharm}`);}
  
   else  {
    alert('Нам очень жаль, приходите еще!');}
  
} 
}     
}  
    /////конец 3 части
    
    else {
  alert('Нет столько мест!!!');
}
  }
}
else {
  alert('Невалидный ввод!!!');
}  
   
  
      
