import { Component, EventEmitter, Input , Output } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { DUMMY_USERS } from './dummy-users';
import {type  User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css',
    imports: [CardComponent]
})
export class UserComponent {
 
@Input({required:true}) user!: User;
@Input({required:true}) selected!:boolean;
    @Output() select = new EventEmitter();  //it has been using for a long time --> so use this instead

    // select = output<string>();  //this is not used though it is new 

    get imagePath(){
           return 'assets/users/' + this.user.avatar;
     }
     onSelectUser(){
        this.select.emit(this.user.id);
     }
}
