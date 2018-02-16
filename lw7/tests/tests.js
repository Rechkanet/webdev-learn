'use strict';

const CoffeeMachine = require('../src/js/CoffeeMachine.js');
const assert = require('chai').assert;

describe('Конструктор без параметров', function() {
  it(`Cоздает новый объект, ошибок не ожидается`, function() {
    assert.doesNotThrow(function() {
      let test = new CoffeeMachine();
    });
  });
});

describe('Метод getCoffeeMenu', function() {
  it(`Выводить в консоли кофе меню, ошибок не ожидается`, function() {
    assert.doesNotThrow(function() {
      let test = new CoffeeMachine();
      test.getCoffeeMenu();
    });
  });
});

describe('Метод checkCash', function() {
  function makeTest(value, expected) {
    it(`принимает на вход ${value} и должен вернуть ${expected}`, function() {
      let test = new CoffeeMachine();
      let actual = test.checkCash(value);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: null, expected: false },
    { value: undefined, expected: false },
    { value: -1, expected: false },
    { value: -10, expected: false },
    { value: 0, expected: false },
    { value: 11, expected: false },
    { value: 6, expected: false },
    { value: 15, expected: false },
    { value: 13, expected: false },
    { value: 9, expected: false },
    { value: 1, expected: true },
    { value: 2, expected: true },
    { value: 5, expected: true },
    { value: 10, expected: true },
    { value: 50, expected: true },
    { value: 100, expected: true }
  ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод setCash', function() {
  function makeTest(value, expected) {
    it(`добавляет ${value.cash} к текущему балансу ${value.balance}, баланс должен быть: ${expected}`, function() {
      let test = new CoffeeMachine();
      test.currentBalance = value.balance;
      test.setCash(value.cash);
      let actual = test.currentBalance;
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: { balance: 0, cash: null }, expected: 0 },
    { value: { balance: 5, cash: null }, expected: 5 },
    { value: { balance: 0, cash: undefined }, expected: 0 },
    { value: { balance: 100, cash: undefined }, expected: 100 },
    { value: { balance: 10, cash: -1 }, expected: 10 },
    { value: { balance: 0, cash: -20 }, expected: 0 },
    { value: { balance: 5, cash: -20 }, expected: 5 },
    { value: { balance: 100, cash: 3 }, expected: 100 },
    { value: { balance: 0, cash: 51 }, expected: 0 },
    { value: { balance: 5, cash: 51 }, expected: 5 },
    { value: { balance: 10, cash: 51 }, expected: 10 },
  ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод checkCoffeeNumber', function() {
  function makeTest(value, expected) {
    it(`принимает на вход ${value} и должен вернуть ${expected}`, function() {
      let test = new CoffeeMachine();
      let actual = test.checkCoffeeNumber(value);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: null, expected: false },
    { value: undefined, expected: false },
    { value: -1, expected: false },
    { value: 4, expected: false },
    { value: 0, expected: false },
    { value: 1, expected: true },
    { value: 2, expected: true },
    { value: 3, expected: true }
  ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});

describe('Метод checkEnoughMoney', function() {
  function makeTest(value, expected) {
    it(`при текущем балансе ${value.balance} и выбраном номере кофе ${value.coffeeNumber} возвращает ${expected}`, function() {
      let testCoffeMachine = new CoffeeMachine();
      testCoffeMachine.currentBalance = value.balance;
      let actual = testCoffeMachine.checkEnoughMoney(value.coffeeNumber);
      assert.equal(expected, actual);
    });
  }
  let arranges = [
    { value: { balance: 0, coffeeNumber: 1 }, expected: false },
    { value: { balance: 2, coffeeNumber: 1 }, expected: false },
    { value: { balance: 0, coffeeNumber: 3 }, expected: false },
    { value: { balance: 10, coffeeNumber: 3 }, expected: false },
    { value: { balance: 15, coffeeNumber: 3 }, expected: false },
  ];
  arranges.forEach(function(arrange, i) {
    makeTest(arrange.value, arrange.expected);
  });
});