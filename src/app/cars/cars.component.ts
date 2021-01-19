import { Component, OnInit } from '@angular/core';
import {cars} from '../../db/database';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  cars = cars;

}
