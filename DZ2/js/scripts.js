console.log('//Задание 1');

let firstName = prompt('Ваше имя?'),
age = prompt('Ваш возраст?'),
city = prompt('Ваш город проживания?'),
phone = prompt('Ваш телефон?'),
email = prompt('Ваша эл. почта?'),
company = prompt('Ваше место работы?');

console.log('Меня зовут ' + firstName + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные ' + phone + ', Почта ' + email + '.');

console.log('//Задание 2. Определите по введенному возрасту (исп. значение из задания 1) год рождения.');

let year =2021 - age;

console.log(firstName + ' родился в' + year + 'году');

console.log('//Задание 3');

let numTask = prompt('Введите целое шестизначное число');

if (numTask > 99999 && numTask <= 999999) {

let numder1 = parseInt(numTask / 100000);
    numder2 = parseInt((numTask - numder1 * 100000) / 10000);
    numder3 = parseInt((numTask - numder1 * 100000 - numder2 * 10000) / 1000);
    numder4 = parseInt((numTask - numder1 * 100000 - numder2 * 10000 - numder3 * 1000) / 100);
    numder5 = parseInt((numTask - numder1 * 100000 - numder2 * 10000 - numder3 * 1000 - numder4 * 100) / 10);
    numder6 = parseInt(numTask - numder1 * 100000 - numder2 * 10000 - numder3 * 1000 - numder4 * 100 - numder5 * 10 );

        firstSumm = numder1 + numder2 + numder3;
        lastSumm = numder4 + numder5 + numder6;

        console.log('Введенное число ' + numTask);
        console.log('Полученные числа: "' + numder1 +'", "' + numder2 +'", "' + numder3 +'", "' + numder4 +'", "' + numder5 +'", "' + numder6 +'",' );

        (firstSumm == lastSumm) ? console.log('ДА') : console.log('НЕТ');

        } else {
            alert('Вы ввели не правильное число');
            console.log('err');
        }

console.log('//Задание 4.');

let a = 1;

if (a > 0) {
    console.log('Верно');
} else {
    console.log('Неверно');
}
    
console.log('//Задание 5');

    a = 10;

    let b = 2;
    summ = a + b;
    diff = a - b;
    multiple = a * b;
    div = a / b;

    console.log('Сумма - ' + summ + ', разность - ' + diff + ', произведение - ' + multiple + ', частное - ' + div +'');

    if (summ > 1) {
        summ2 = summ ** 2;
        console.log('Квадрат суммы: ' + summ2);
    }

console.log('//Задание 6.');

((a > 2 && a < 11) || (b >= 6 && b < 14)) ? console.log('Верно') : console.log('Неверно'); 


console.log('//Задание 7.');

let n = prompt('Введите число от 0 до 59'),
    nStatus;

if (n > 0 && n <= 59) {

    if (n > 0 && n < 15) {
        nStatus = 'в первую четвердь';
    }
    if (n >= 15 && n < 30) {
        nStatus = 'в вторую четвердь';
    }
    if (n >= 30 && n < 45) {
        nStatus = 'в третью четвердь';
    } else {
        nStatus = 'в четвёртую четвердь';
    }
    console.log('Число "n" = ' + n + ' попадает ' + nStatus + ' часа');

} else { 
    alert('Ввели неправильное число');
    console.log('err');

}

console.log('//Задание 8.');

let inDay = prompt('Введите целое число от 1 до 31'),
    day = parseInt(inDay),
    dayStatus;

if (day >=1 && day <= 31) {

    if (day < 11 ) {
        dayStatus = 'В первую';
    } else if (day >= 11 && day <21 ) {
        dayStatus = 'Во вторую';
    } else {
        dayStatus = 'В третью';

    }

    console.log('День ' + day + ' попадает ' + dayStatus + ' декаду месяца');

} else {
    alert('Введи неправильное число');
    console.log('err');
}

console.log('//Задание 9');

let entDays = prompt('Введите количество дней'),
    Years = entDays / 365;
    Months = entDays / 31,
    Weeks = entDays / 7,
    Hours = entDays / 24,
    Minutes = entDays / 1440,
    Seconds = entDays / 86400;

if (entDays > 0) {

    if (Years < 1) Years = 'Меньше года';
    if (Months < 1) Months = 'Меньше месяца';
    if (Weeks < 1) Weeks = 'Меньше недели';

    console.log(entDays + ' дней это лет: ' + Years +', месяцев: ' + Months + ', недель: ' + Weeks + ', часов: ' + Hours + ', минут: ' + Minutes + ', секунд: ' + Seconds + '');
} else {
    alert('Ввели неправильное число.');
}

console.log('//Задание 10.');

let calcDay = prompt('Введите номер дня от 1 до 365'),
calcStatus,
timeYear;

calcDay = parseInt(calcDay);

if (calcDay >= 1 && calcDay <= 365) {

    if (calcDay >= 1 && calcDay <= 31) {
        calcStatus = 1;
    } else if (calcDay >= 32 && calcDay <= 59) {
        calcStatus = 2;
    } else if (calcDay >= 60 && calcDay <= 90) {
        calcStatus = 3;
    } else if (calcDay >= 91 && calcDay <= 120) {
        calcStatus = 4;
    } else if (calcDay >= 121 && calcDay <= 151) {
        calcStatus = 5;
    } else if (calcDay >= 152 && calcDay <= 181) {
        calcStatus = 6;
    } else if (calcDay >= 182 && calcDay <= 212) {
        calcStatus = 7;
    } else if (calcDay >= 213 && calcDay <= 243) {
        calcStatus = 8;
    } else if (calcDay >= 244 && calcDay <= 273) {
        calcStatus = 9;
    } else if (calcDay >= 274 && calcDay <= 304) {
        calcStatus = 10;
    } else if (calcDay >= 305 && calcDay <= 334) {
        calcStatus = 11;
    } else {
        calcStatus = 12;
    }



switch (calcStatus) {
    case 1:
    case 2:
    case 12:
        timeYear = 'Зима';
    break;
    case 3:
    case 4:
    case 5:
        timeYear = 'Весна';
    break;
    case 6:
    case 7:
    case 8:
        timeYear = 'Лето';
    break;
    case 9:
    case 10:
    case 11:
        timeYear = 'Осень';
    break;
}

console.log('День № ' + calcDay + ' - это ' + calcStatus + ' месяц, пора года - ' + timeYear);

}   else {
    alert('Ввели неправильное число');
    console.log('err');

}








