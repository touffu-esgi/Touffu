import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Agreement} from "../../domaine/agreement/agreement";
import { ProviderService } from '../../services/provider/provider.service';
import { Recipient } from '../../domaine/recipient/recipient';

@Component({
  selector: 'app-agreement-card',
  templateUrl: './agreement-card.component.html',
  styleUrls: ['./agreement-card.component.scss']
})
export class AgreementCardComponent implements OnInit {
  @Input() agreement?: Agreement;
  recipient: Recipient = new Recipient('','','','','','','');
  @Output() displayAgreement: EventEmitter<Agreement> = new EventEmitter();

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    // @ts-ignore
    this.providerService.getOneByUrl(this.agreement!.recipient).subscribe(recipient => {
      // @ts-ignore
      this.recipient = recipient;
    })
  }

  displayAgreementClick() {
    if(this.agreement){
      this.displayAgreement.emit(this.agreement)
    }
  }
}