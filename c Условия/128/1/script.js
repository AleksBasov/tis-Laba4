let num = 56;

if (num >= 10 && num <= 99) {
  let sumDigits = Math.floor(num / 10) + (num % 10);
  if (sumDigits <= 9) {
    console.log("Сумма цифр однозначна");
  } else {
    console.log("Сумма цифр двухзначна");
  }
} else {
  console.log("Ошибка: число не попадает в диапазон от 10 до 99");
}

