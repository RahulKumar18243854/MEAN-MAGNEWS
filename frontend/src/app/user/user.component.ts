import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

constructor(private router:Router){}

logout(){
  localStorage.removeItem("userId");
  this.router.navigateByUrl("user/login")
}

}

