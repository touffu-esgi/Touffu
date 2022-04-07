import { Component, OnInit } from '@angular/core';
import {resize, updateCSSOfComponentSelector} from "../../homePage/provider-selector/readjustCSSOfSelector";

window.addEventListener('resize', resize);

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['../../homePage/provider-selector/find-provider-selector.component.css','./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    updateCSSOfComponentSelector();
  }



}
