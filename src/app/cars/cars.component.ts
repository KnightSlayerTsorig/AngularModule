import {Component, OnInit} from '@angular/core';
import {cars} from '../../db/database';
import {ICar} from '../interfaces';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars: ICar[] = cars;

}
