"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createCar(manufacturer, model, ...options) {
    const car = {
        manufacturer,
        model,
    };
    options.forEach(option => {
        const [key, value] = Object.entries(option)[0];
        car[key] = value;
    });
    return car;
}
const myCar = createCar('Toyota', 'Camry', { color: 'Red' }, { sunroof: true });
console.log(myCar);
