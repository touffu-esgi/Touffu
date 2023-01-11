import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../services/user/user.service';

@Component({
  selector: 'app-provider-image',
  templateUrl: './provider-image.component.html',
  styleUrls: ['./provider-image.component.scss']
})
export class ProviderImageComponent implements OnInit {

  @Input() imagePath?: string;
  image?: string | ArrayBuffer | null;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    if (this.imagePath && this.imagePath.length > 0){
        this.userService.getFile(this.imagePath).subscribe(image => {
          this.transformImage(image);
        });
    }else{
      this.userService.getFile("default.png").subscribe(image => {
        this.transformImage(image);
      });
    }
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
