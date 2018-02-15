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

  setCash(cash) {
    if (this.checkCash(cash)) {
      this.balance += cash;
      return true;
    }
    return false;
  }

  checkCash(cash) {
    return cash === 1 || cash === 2 || cash === 5 || 
           cash === 10 || cash === 50 || cash === 100;
  }

  getCoffeeMenu() {
    this.coffeeMenu.forEach(function(item, i) {
      console.log(item.coffeeId + ' - ' + item.coffeName + ' (' + 
                  item.price + ' руб.)');
    }, this);
  }
}