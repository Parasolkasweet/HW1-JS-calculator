

// Функция subtract() будет выполнять вычитание двух чисел и возвращать результат.

// Получает значения из двух input-полей

// Преобразует полученные значения в числа с помощью Number() или +.

// Выполняет вычитание (-) второго числа из первого и сохраняет результат в переменную result.

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат вычитания.

// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 - 4 = 4

function minus2(){
    let input1 = +document.querySelector(".input-1").value;
    let input2 = +document.querySelector(".input-2").value;
    let result = input2 - input1;

    // document.querySelector(".subtract").innerText = input1 + " - " + input2 + " = " + result;
    document.querySelector(".subtract").innerText = `${input2} - ${input1} = ${result}`;
}

// Функция multiply() будет выполнять умножение двух чисел и возвращать результат.


// Получает значения из двух input-полей

// Преобразует полученные значения в числа с помощью Number() или +.

// Выполняет умножение (*) первого числа на второе и сохраняет результат в переменную result.

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат умножения.

// Пример если input1 = 3, input2 = 4 то результат будет: Результат: 3 * 4 = 12

function multiply(){
    let input1 = +document.querySelector(".input-3").value;
    let input2 = +document.querySelector(".input-4").value;
    let result = input1 * input2;

    document.querySelector(".result2").innerText = input1 + " * " + input2 + " = " + result;
    document.querySelector(".result2").innerText = `${input1} * ${input2} = ${result}`;
}

// Функция divide() будет выполнять деление двух чисел и возвращать результат.

// Получает значения из двух input-полей

// Преобразует полученные значения в числа с помощью Number() или +.

// Выполняет деление (/) первого числа на второе и сохраняет результат в переменную result.

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат деления.

// Пример если input1 = 8, input2 = 4 то результат будет: Результат: 8 / 4 = 2

function divide(){
    let input1 = +document.querySelector(".input-5").value;
    let input2 = +document.querySelector(".input-6").value;
    let result = input1 / input2;

    // document.querySelector(".result3").innerText = input1 + " / " + input2 + " = " + result;
    document.querySelector(".result3").innerText = `${input1} / ${input2} = ${result}`;
}

// Функция getMinutes() будет получать количество часов и возвращать количество минут

// Получает значения из одного input-поле

// Преобразует полученные значение в число с помощью Number() или +.

// Преобразует введенное число в минуты

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат.

// Пример если input = 2 то результат будет: Результат: 2 часа = 120 минут

function getMinutes(){
    let input1 = +document.querySelector(".input-7").value;
   
    let result = input1 * 60;

    // document.querySelector(".result4").innerText = input1 + " * 60 " + " = " + result + " min";
    document.querySelector(".result4").innerText = `${input1} * 60 = ${result} min`;
}

// Функция calculateAverage() будет показывать среднее значение из трех чисел



// Эта функция получает значения из трех input-полей

// Преобразует полученные значение в число с помощью Number() или +.

// Вычисляет среднее значение, разделив сумму чисел на их количество

// Обновляет содержимое элемента с классом result, выводя в нем выражение и результат.

// Пример если input1 = 5, input2 = 2, input3 = 8 то результат будет: Среднее значение от: 5 + 2 + 8 = 15 / 3 = 5

function calculateAverage(){
    let input1 = +document.querySelector(".input-8").value;
    let input2 = +document.querySelector(".input-9").value;
    let input3 = +document.querySelector(".input-10").value;
    let result = (input1 + input2 + input3) / 3;

   // document.querySelector(".result5").innerText = "(" + input1 + " + " + input2 + " + " + input3 + ")" + " / 3 " + " = " + result;
   document.querySelector(".result5").innerText = `(${input1} + ${input2} + ${input3}) / 3 = ${result}`;
}
