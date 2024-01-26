let array = [5, -3, 10, -8, 2, 0, -4, 7, 9, -1, 3, -6, 11, 4, -2];
let max = Math.max(...array);
console.log("Максимальное число: " + max);

let sum = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] > 0) {
    sum += array[i];
  }
}
console.log("Сумма положительных чисел: " + sum);


let count = 0;
for (let i = 0; i < array.length; i++) {
  if (array[i] < 0) {
    count++;
  }
}
console.log("Количество отрицательных чисел: " + count);