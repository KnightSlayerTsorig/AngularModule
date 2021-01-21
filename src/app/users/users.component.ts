import { Component, OnInit } from '@angular/core';
import {IUser} from '../interfaces';
import {users} from '../../db/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: IUser[] = users;

}
