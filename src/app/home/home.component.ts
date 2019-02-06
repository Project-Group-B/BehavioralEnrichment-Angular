import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  // TODO: user account page (change password, list permissions, etc.)
  // TODO: admin page to manage users - change permissions, reset password, etc.
  // TODO: About/Acknowledgements page
  ngOnInit() {
  }

}
