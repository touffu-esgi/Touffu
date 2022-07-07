import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../services/provider/provider.service';
import { AuthServiceMockImplementation } from '../services/auth/auth.service.mock.implementation';
import { Availability } from '../domaine/availability/availability';

@Component({
  selector: 'app-provider-availability-page',
  templateUrl: './provider-availability-page.component.html',
  styleUrls: ['./provider-availability-page.component.scss']
})
export class ProviderAvailabilityPageComponent implements OnInit {

  availabilities: Availability[] = [];
  constructor(private providerService: ProviderService, private authService: AuthServiceMockImplementation) { }

  ngOnInit(): void {
    this.getAvailability();
  }

  private getAvailability() {
    this.providerService.getProviderAvailability(this.authService.user!.id!).subscribe(availabilities => {
      this.availabilities = availabilities;
    })
  }
}
