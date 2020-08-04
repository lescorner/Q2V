//Создать массив чисел. Найти максимальное и вывести в консоль
let a = [17, 69, 124, 235, 43, 46, 47];
console.log(a);
let q = -1e-100;
for (let i = 0; i < a.length; i++) {
    if (q < a[i]) q = a[i];
}
console.log('MAX -' + q); 


//создать массив строк. Посчитать общее количество букв во всех строках. Вывести в консоль
let b = ['Ukraine', 'Poland', 'Montenegro', 'Serbia', 'USA', 'Portugal', 'Poland', 'Ukraine'];
console.log(b);
let s = 0;
for (let i = 0; i < b.length; i++) {
    s = s + b[i].length
}
console.log('Total length - ' + s);   
    
    
//Создать массив чисел. Найти среднее арифметическое и вывести в консоль    
let c = [17, 69, 124, 235, 43, 46, 47];    
let m = 0;
for (let i = 0; i < c.length; i++) {
    m = m + c[i]
}
console.log('average - ' + m / c.length);  
  


//создать массив строк. Соединить их в одну строку через пробел и вывести результирующую строку в консоль
let d = ['Ukraine', 'Poland', 'Montenegro', 'Serbia', 'USA', 'Portugal', 'Poland', 'Ukraine'];
let t = ' ';
for (let i = 0; i < d.length; i++) {
    t = t + d[i] + ' '
}
console.log(t);



//создать массив строк. Посчитать количество букв e во всех строках и вывести в консоль
let e = ['Ukraine', 'Poland', 'Montenegro', 'Serbia', 'USA', 'Portugal', 'Poland', 'Ukraine'];
for (let i = 0; i < e.length; i++) {
    console.log(e[i] + '-' + e[i].length);
}





//создать массив чисел. Увеличить в цикле каждое число на 5. Вывести массив в консоль.
let f = [17, 69, 124, 235, 43, 46, 47];
for (let i = 0; i < f.length; i++) {
    f[i] = f[i] + 5
}
console.log('plus 5 -' + f);  