import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  firstname = ' ';
  lastname = ' ';
  users= [] as any;


  addUser(firstname: string, lastname: string) {
    
    this.users.push({x:firstname,y:lastname})
    console.log(this.users)
    this.firstname='';
    this.lastname='';
  }
}
