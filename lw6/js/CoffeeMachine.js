class CoffeeMachine {
  constructor() {
    this.balance = 0;
    this.coffeeMenu = [ 
      { coffeeId: 1, coffeName: 'Американо', price: 10 },
      { coffeeId: 2, coffeName: 'Латте', price: 15 },
      { coffeeId: 3, coffeName: 'Каппучино', price: 20 }
    ];
    this.coffeeNumber = null;
  }
}