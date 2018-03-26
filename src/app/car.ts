import { Rent } from './rent';

export class Car {
  id: number;
  plateNumber: number;
  model: String;
  price: number;
  numberOfDays: number;
  rented: boolean;
  rents: Rent[];
}
