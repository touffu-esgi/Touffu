import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { UserService } from '../../services/user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-actions',
  templateUrl: './header-actions.component.html',
  styleUrls: ['./header-actions.component.scss']
})
export class HeaderActionsComponent implements OnInit {
  @Input() userId: string | null = null;
  @Input() userEmail: string | null = null;
  @Input() userType: string | null = null;
  image?: string | ArrayBuffer | null;

  constructor(private authService: AuthService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.getProfileImage();
  }

  signOut(){
    this.authService.signOut();
    this.userId = null;
    this.userEmail = null;
    this.userType = null;
    this.router.navigate(['/'])
  }

  private getProfileImage() {
    this.userService.getFileFromUrl(this.authService.user?.profilePic!).subscribe(image=> {
      this.transformImage(image)
    });
  }

  private transformImage(image: object) {
    let reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        this.image = reader.result;
      }, false
    );
    if (image) {
      // @ts-ignore
      reader.readAsDataURL(image);
    }
  }
}
