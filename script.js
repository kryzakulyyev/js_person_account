// 1 -
let personAccount = {
  firstName : 'Kasym',
  lastName : 'Jan',
  incomes : [3000, 4000, 5000],
  expenses : [3000, 3000, 1200, 50, 60],

  //2
  totalIncome(){
    let total = 0;
    for(let i of this.incomes) {
      total += i;
    }
    return total;
  },

  //3 
  totalExpense(){
    let total = 0;
    for(let i of this.expenses) {
      total += i;
    }
    return total;
  },

  //4
  addIncome(){
    if(Array.isArray(income)) {
      this.incomes.push(...income);
    } else {
      this.incomes.push(income);
    }
  },

  //5
  addExpense(){
    if(Array.isArray(expense)) {
      this.expenses.push(...expense);
    } else {
      this.expenses.push(expense);
    }
  },

  //6
  accountInfo(){
    let profit = this.totalIncome() - this.totalExpense();
    return 'Total profit of the person is' + profit;
  }
  },

  //7
//personAccount.addIncome(2000);
personAccount.addExpress([10, 25, 80, 90]);
console.log("Person's total income: "+ personAccount.totalIncome()});
// Person's total income: 14000$
console.log(`Person's total expense: ${personAccount.totalExpense()}$`);
// Person's total expense: 7515$

// 8 -
console.log(`Person's total profit is ${personAccount.accountInfo()}$ today.`);
// Person's total profit is Total profit of the person is 6485$ today.

