'use strict';

const CoffeeMachine = require('../src/js/CoffeeMachine.js');
const assert = require('chai').assert;

describe('Конструктор без параметров', function() {
  it(`Должен создать новый объект ошибок не ожидается`, function() {
    assert.doesNotThrow(function() {
      let testCoffeMachine = new CoffeeMachine();
    });
  });
});