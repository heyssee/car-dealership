import { Car } from "src/cars/interfaces/car.interface";
import { v4 as uuid } from 'uuid';
export const CARS_SEED: Car[] = [
    {
        id: uuid(),
        brand: "toyota",
        model: "corolla"
    },
    {
        id: uuid(),
        brand: "Vw",
        model: "Jetta"
    },
    {
        id: uuid(),
        brand: "Nissan",
        model: "Ranger"
    },
    {
        id: uuid(),
        brand: "Honda",
        model: "Civic"
    }
]