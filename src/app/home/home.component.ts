import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../auth/user/current-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string;
  constructor(private currentUser: CurrentUserService) { }

  // TODO: user account page (change password, list permissions, etc.)
  // TODO: admin page to manage users - change permissions, reset password, etc.
  // TODO: About/Acknowledgements page
  ngOnInit() {
    this.name = this.currentUser.getUser().firstName;
  }

}
