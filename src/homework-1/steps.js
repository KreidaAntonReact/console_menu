const calculateSteps = (height) => {
    let built = 0;

    for (let step = 1; step <= height; step += 1) {
        if (step === 4) {
            continue;
        }

        if (step > 10) {
            console.log("Дальше лестница не построена");
            break;
        }

        console.log(step);
        built += 1;
    }

    console.log(`Всего построено: ${built}`);
};

export const printSteps = (rl) => {
    rl.question("Высота лестницы: ", (heightAnswer) => {
        calculateSteps(Number(heightAnswer));
        rl.close();
    });
};
