const getDeliveryPrice = (distance, total) => {
    if (total >= 3000) {
        return 0;
    }

    if (distance <= 3) {
        return 0;
    }

    if (distance <= 10) {
        return 200;
    }

    return 200 + 25 * (distance - 10);
};

const calculateDelivery = (distance, total) => {
    const price = getDeliveryPrice(distance, total);

    console.log(
        `Расстояние ${distance} км, заказ ${total} руб.: доставка ${price} руб.`,
    );
};

export const deliveryPrice = (rl) => {
    rl.question("Расстояние до клиента в километрах: ", (distanceAnswer) => {
        rl.question("Сумма заказа в рублях: ", (totalAnswer) => {
            calculateDelivery(Number(distanceAnswer), Number(totalAnswer));
            rl.close();
        });
    });
};
