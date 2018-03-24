import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import "rxjs/Rx";

import { Car } from './car';
import { CARS } from './mock-cars';

@Injectable()
export class CarService {

  cars: Car[];
  
  constructor(private http: HttpClient) {}

  getCarsWithPromise(): Promise<Car[]> {
    return Promise.resolve(CARS);
  }
  
  public getCarsWithObservable(): Observable<Car[]> {
    return this.http.get("http://localhost:8080/cars").map((response: Response) => response || []);
  }
  
  getCar(id: number): Promise<Car> {
	return Promise.resolve(CARS[id]);
  }

  rent(car) {
    car.rented = true;
  }

  getBack(car) {
    car.rented = false;
  }

}
