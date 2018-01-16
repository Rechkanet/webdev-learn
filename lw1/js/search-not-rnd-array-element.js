function getRandomInt(min, max) {
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
  searchKey = prompt("Vvedite № dla poiska ");
  searchKey = parseInt(searchKey);
  if ((searchKey == "") || (isNaN(searchKey)) || (searchKey == null)) {
    alert("Errrror!");
  }
} while ((searchKey == "") || (isNaN(searchKey)) || (searchKey == null));

if (array.indexOf(searchKey) !== -1) {
  alert("Element " + searchKey + " naiden!");
} else {
  alert("Element " + searchKey + " ne naiden!");
}