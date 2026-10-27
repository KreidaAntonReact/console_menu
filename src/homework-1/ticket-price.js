const ticketPrice = (category) => {
    switch (category) {
        case "1":
            return 300;
        case "2":
            return 500;
        case "3":
            return 900;
        default:
            return 0;
    }
};

const maxTickets = (budget, price) => {
    let count = 0;
    let remaining = budget;

    while (price > 0 && remaining >= price) {
        remaining -= price;
        count += 1;
    }

    return count;
};

const showTicketResult = (category, budget, price, tickets) => {
    const message = `
Чек
----
Категория: ${category}
Бюджет: ${budget} руб.
Цена билета: ${price} руб.
Можно купить: ${tickets}
`;

    console.log(message);
};

const calculateTicketResult = (category, budget) => {
    if(isNaN(budget)) {
        console.log("некорректный бюджет");
        return;
    }

    const price = ticketPrice(category);

    if (price === 0) {
        console.log("неизвестная категория");
        return;
    }

    const tickets = maxTickets(budget, price);

    showTicketResult(category, budget, price, tickets);
};

export const printTicketResult = (rl) => {
    rl.question("Категория билета (1, 2 или 3): ", (category) => {
        rl.question("Бюджет в рублях: ", (budget) => {
            calculateTicketResult(category.trim(), Number(budget));
            rl.close();
        });
    });
};
