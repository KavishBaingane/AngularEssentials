import { Component, EventEmitter, Input , Output } from '@angular/core';
import { RequiredValidator } from '@angular/forms';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

@Input({required:true}) user!: {
  id:string;
  avatar: string;
  name: string;
};
    @Output() select = new EventEmitter();  //it has been using for a long time --> so use this instead

    // select = output<string>();  //this is not used though it is new 

    get imagePath(){
           return 'assets/users/' + this.user.avatar;
     }
     onSelectUser(){
        this.select.emit(this.user.id);
     }
}
