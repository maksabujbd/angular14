import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Style Binding';
  color = 'red';
  bgColor='green';

  updateColor(){
    this.color = 'white';
    this.bgColor="black";
  }
}
