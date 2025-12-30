const user = { name: "Tapas", budget: 5000 };

const expenses = [
  //{ id: 1, amount: 200, category: "Food", description: "Lunch" },
  //{ id: 2, amount: 500, category: "Shopping", description: "New Shoes" },
];

function createExpenseTracker({ name, budget }) {
  let id = 0;

  return {
    addExpense: (amount, category, description) => {
      id++;
      expenses.push({
        id: id,
        amount: amount,
        category: category,
        description: description,
      });
      console.log(`Expense added successfully:`);
      console.log(expenses.at(-1));
    },
    removeExpense: (id) => {
      expenses.splice(id - 1, id - 1);
      console.log(`Expense removed successfuly for id: ${id}`);
    },
    updateExpense: (existingID, amount, category, description) => {
      let returnValue = expenses.find((exp) => {
        return exp.id === existingID;
      });
      returnValue.amount = amount;
      returnValue.category = category;
      returnValue.description = description;
      console.log(
        `You have successfully updated the expense for id number ${existingID}. The new entry is:`
      );
      console.log(returnValue);
    },
    getTotalExpense: () => {
      const totalExp = expenses.reduce((acc, currExp) => {
        return acc + currExp.amount;
      }, 0);
      console.log(`Total expense so far is Rs${totalExp}.`);
    },
    expenseByCategory: (category) => {
      const filtCat = expenses.filter((exp) => {
        return exp.category === category;
      });
      console.log(`All the expenses by category ${category} are:`);
      console.log(filtCat);
    },
    highestExpense: () => {
      const highestExpense = expenses.toSorted((prvExp, nexExp) => {
        return prvExp - nexExp;
      });
      console.log("Highest expense is:");
      console.log(highestExpense.at(-1));
    },
    lowestExpense: () => {
      const lowestExpense = expenses.toSorted((prvExp, nexExp) => {
        return prvExp - nexExp;
      });
      console.log("Lowest expense is:");
      console.log(lowestExpense[0]);
    },
    getUserInfo: () => {
      console.log(
        `This expense tracker tracks expenses entered by ${name}. ${name}'s total budget is Rs${budget}`
      );
    },
    showAllExpenses: () => {
      console.log(`All expenses entered by ${name} are:`);
      console.log(expenses);
    },
    updateUser: (name, budget) => {
      (user.name = name), (user.budget = budget);
      console.log("New user details are:");
      console.log(user);
    },
  };
}

let expenseTracker = createExpenseTracker(user);

expenseTracker.addExpense(200, "Food", "Lunch ");
expenseTracker.addExpense(100, "Food", "Dinner ");
expenseTracker.addExpense(550, "Dress", "For Carol");

expenseTracker.expenseByCategory("Food");

expenseTracker.updateExpense(1, 50, "Drink", "Juice");

expenseTracker.highestExpense();

expenseTracker.lowestExpense();

expenseTracker.showAllExpenses();

expenseTracker.updateUser("Justina", 10000);

console.log(`
    *******The actual expense array for testing:*******
    `);
console.log(expenses);
