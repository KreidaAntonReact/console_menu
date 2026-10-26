import readline from "node:readline";
import {stdin as input, stdout as output} from "node:process";
import { printTicketResult } from "./ticket-price.js";
import { deliveryPrice } from "./delivery-price.js";
import { printSteps } from "./steps.js";

const rl = readline.createInterface({
    input,
    output,
});

const messageStartMenu = `
Выберите задачу:
1 — билетная касса
2 — доставка заказа
3 — лестница
Ваш выбор:
`;


const checkAnswerMenu = (answer) => {
    const trimAnswer = answer.trim();

    switch(trimAnswer) {
        case "1": {
            printTicketResult(rl);
            return;
        }
        case "2": {
            deliveryPrice(rl);
            return;
        }
        case "3": {
            printSteps(rl);
            return;
        }
        default: {
            console.log(`Такой задачи нет: ${answer}`);
        }
    }

    rl.close();
}


export const run = () => {
    rl.question(messageStartMenu, (answer) => {
        checkAnswerMenu(answer);
    })
}

