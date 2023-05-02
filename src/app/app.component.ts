import {Component} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Reactive Form';
  loginForm = new FormGroup({
    name: new FormControl(''),
    password: new FormControl('')
  });

  userLogin(item: any) {
    console.warn(item);
  }

  loginUser() {
    console.warn(this.loginForm.value);
  }
}
