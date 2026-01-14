// 1. Даний рядок тексту. Вивести його задом наперед

// 2. Написати функцію, яка приймає число з дрібною частиною і повертає тільки цілу частину

// 3. Прийняти від користувача (за допомогою prompt) його ім’я і вивести його у модальне вікно великими літерами (‘alex’ -> ‘ALEX’)

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
// isEqual(‘pApA’, ‘papa’)  //true
// isEqual(‘qwerty’, ‘QWErty’)  //true
// isEqual(‘aaa’, ‘EEE’) //false
