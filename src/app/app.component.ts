import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Reactive Form';
  loginForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  get name(){
    return this.loginForm.get('name');
  }

  get password(){
    return this.loginForm.get('password');
  }

  userLogin(item: any) {
    console.warn(item);
  }

  loginUser() {
    console.warn(this.loginForm.value);
  }

}
