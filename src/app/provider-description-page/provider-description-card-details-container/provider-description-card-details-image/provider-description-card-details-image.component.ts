import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../services/user/user.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-provider-description-card-details-image',
  templateUrl: './provider-description-card-details-image.component.html',
  styleUrls: ['./provider-description-card-details-image.component.scss']
})
export class ProviderDescriptionCardDetailsImageComponent implements OnInit {


  @Input() image?: string | ArrayBuffer | null = null;
  @Input() imagePath: string | null = null;
  constructor(private userService: UserService, private authService: AuthService) { }

  ngOnInit(): void {
    this.getProfileImage();
  }


  private getProfileImage() {
    const imagePath = this.imagePath ? this.imagePath : "default.png";
    this.userService.getFile(imagePath).subscribe(image => {
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
    });
  }
}
