import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from '../auth/user/current-user.service';
import { EnrichmentService } from '../shared/main/enrichment.service';
import { MatSnackBar } from '@angular/material';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name: string;
  homepageImage: SafeUrl;
  constructor(
    private currentUser: CurrentUserService,
    private service: EnrichmentService,
    private snackbar: MatSnackBar,
    private sanitization: DomSanitizer) { }

  ngOnInit() {
    this.name = this.currentUser.getUser().firstName;
    this.getHomepageImage();
  }

  getHomepageImage() {
    this.service.getHomepageImage().subscribe((data: any) => {
      this.homepageImage = this.sanitization.bypassSecurityTrustUrl(data);
    }, (err: any) => {
      this.snackbar.open('ERROR: HTTP error when getting homepage image', 'OK', {
        duration: 3000
      });
      console.error('Error getting homepage image:');
      console.error(err);
    });
  }

}
