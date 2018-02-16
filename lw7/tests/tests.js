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