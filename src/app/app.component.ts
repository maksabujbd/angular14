import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'For Loop';
  users = ['kader', 'jannat', 'alifa', 'sujan'];
  userDetails=[
    {name: 'kader', email:'kader@example.com', phone:'000'},
    {name: 'jannat', email: 'jannat@example.com', phone: '111'},
    {name: 'alifa', email: 'alifa@example.com', phone: '222'},
    {name: 'sujan', email: 'sujan@example.com', phone: '444'}
  ]
}
