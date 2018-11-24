let money = +prompt("Ваш бюджет на месяц?", '');
let time = +prompt("Введите дату в формате YYYY-MM-DD", '');
let firstAnswer = prompt('Введите обязательную статью расходов в этом месяце', '');
firstAnswer = prompt('Введите обязательную статью расходов в этом месяце', '');
let secondAnswer = +prompt('Во сколько обойдется?', '');
secondAnswer = +prompt('Во сколько обойдется?', '');

let appdata = {
    budget : money,
    timeData: time,
    expenses: {
        firstAnswer: secondAnswer
    },
    optionalExpenses: {},
    income: [],
    savings: false
}

alert(appdata.budget/30);