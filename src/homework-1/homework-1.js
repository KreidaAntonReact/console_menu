import readline from "node:readline";
import {stdin as input, stdout as output} from "node:process";
import { printTicketResult } from "./ticket-price.js";

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
            console.log(`Вы ввели: ${answer}`);
            break;
        }
        case "3": {
            console.log(`Вы ввели: ${answer}`);
            break;
        }
        default: {
            console.log(`Такого пункта нет: ${answer}`);
        }
    }

    rl.close();
}


export const run = () => {
    rl.question(messageStartMenu, (answer) => {
        checkAnswerMenu(answer);
    })
}

