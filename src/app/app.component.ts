import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nested For Loop';
  users =[
    {name: 'kader', phone:'111', socialAccounts: ['facebook', 'insta']},
    {name: 'jannat', phone: '222', socialAccounts: ['youtube', 'yahoo']}
  ]
}
