// 1. Даний рядок тексту. Вивести його задом наперед
const someText = "Даний рядок тексту. Вивести його задом наперед";
const reversedText = someText.split("").toReversed().join("");
console.log(reversedText);
// or
// const result = someText.split("").reverse().join("");
// console.log(result);

// 2. Написати функцію, яка приймає число з дрібною частиною і повертає тільки цілу частину
// function decimalpoint(number) {
//   return Math.trunc(number);
// }
// console.log(decimalpoint(3.5643));
// or
function decimalpoint(number) {
  return Number(number.toString().split(".")[0]);
}
console.log(decimalpoint(31.863));

// 3. Прийняти від користувача (за допомогою prompt) його ім’я і вивести його у модальне вікно великими літерами (‘alex’ -> ‘ALEX’)
const userName = prompt("What is your name?");
function toCapital(text) {
  if (text) {
    return text.toUpperCase();
  }
  return "";
}
alert(toCapital(userName));

// 4. Написати функцію, яка приймає рядок тексту з датою у форматі “2021-22-09” і повертає її у вигляді “22.09.2021”
const userDate = prompt("Please type the date (YYYY-DD-MM)");

function formatDate(date) {
  const parts = date.split("-");

  const year = parts[0];
  const day = parts[1];
  const month = parts[2];
  return day + "." + month + "." + year;
}

console.log(formatDate("2021-22-09"));

// 5. Написати функцію, яка приймає два рядки, написані у різному регістрі та порівнює їх незалежно від регістру.
function isEqual(string1, string2) {
  return string1.toLowerCase() === string2.toLowerCase();
}
console.log(isEqual("pApA", "papa"));
console.log(isEqual("qwerty", "QWErty"));
console.log(isEqual("aaa", "EEE"));
