import { Component, OnInit } from '@angular/core';
import {AuthServiceMockImplementation} from "../../../services/auth/auth.service.mock.implementation";

@Component({
  selector: 'app-provider-description-title-report-image',
  templateUrl: './provider-description-title-report-image.component.html',
  styleUrls: ['./provider-description-title-report-image.component.scss']
})
export class ProviderDescriptionTitleReportImageComponent implements OnInit {


  constructor(private authService: AuthServiceMockImplementation) { }

  ngOnInit(): void {
  }

  getUserId(): string | undefined {
    return this.authService.user?.id
  }

}
