let money = +prompt("Ваш бюджет на месяц?", '');
let time = +prompt("Введите дату в формате YYYY-MM-DD", '');
let firstAnswer1 = prompt('Введите обязательную статью расходов в этом месяце', '');
let firstAnswer2 = prompt('Введите обязательную статью расходов в этом месяце', '');
let secondAnswer1 = +prompt('Во сколько обойдется?', '');
let secondAnswer2 = +prompt('Во сколько обойдется?', '');

let appdata = {
    budget : money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

appdata.expenses.firstAnswer1 = secondAnswer1;
appdata.expenses.firstAnswer2 = secondAnswer2;


alert(appdata.budget / 30);