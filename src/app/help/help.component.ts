import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../auth/user/current-user.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {
  isAdmin = false;
  constructor(private currentUser: CurrentUserService) { }

  ngOnInit() {
    this.isAdmin = this.currentUser.getUser().admin;
  }

}
