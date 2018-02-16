'use strict';

const CoffeeMachine = require('../src/js/CoffeeMachine.js');
const assert = require('chai').assert;

describe('Конструктор без параметров', function() {
  it(`Cоздает новый объект, ошибок не ожидается`, function() {
    assert.doesNotThrow(function() {
      let testCoffeMachine = new CoffeeMachine();
    });
  });
});

describe('Метод getCoffeeMenu', function() {
  it(`Выводить в консоли кофе меню, ошибок не ожидается`, function() {
    assert.doesNotThrow(function() {
      let testCoffeMachine = new CoffeeMachine();
      testCoffeMachine.getCoffeeMenu();
    });
  });
});

describe('Метод checkCash', function() {
  function makeTest(value, expected) {
    it('принимает на вход ' + value + ' и должен вернуть ' + expected, function() {
      let testCoffeMachine = new CoffeeMachine();
      let actual = testCoffeMachine.checkCash(value);
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

