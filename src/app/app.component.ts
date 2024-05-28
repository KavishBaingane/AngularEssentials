import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';

import { DUMMY_USERS } from './user/dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ HeaderComponent, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  users = DUMMY_USERS;
  title = 'AngularEssentials';

  onSelectUser(id:string){
    console.log("Selected user with Id"+ id );
  }
}

