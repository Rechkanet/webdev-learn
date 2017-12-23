function getRandomInt(min, max) {
  var possible = "абвгдежзийклмнопрстуфхцчшщъыьэюя";
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var arrLength = 10,
  array = [],
  searchKey, i;

for (i = 0; i < arrLength; i++) {
  array[i] = getRandomInt(0, 15);
}

alert("Заполненный случайный массив " + array.join(' '));

do {
  searchKey = prompt("Введите номер для поиска ");
  searchKey = parseInt(searchKey);
  if ((searchKey == "") || (isNaN(searchKey)) || (searchKey == null)) {
    alert("Ошибка!");
  }
} while ((searchKey == "") || (isNaN(searchKey)) || (searchKey == null));

if (array.indexOf(searchKey) !== -1) {
  alert("Элемент " + searchKey + " найден!");
} else {
  alert("Элемент " + searchKey + " не найден!");
}