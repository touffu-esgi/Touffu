import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['../../homePage/provider-selector/find-provider-selector.component.css','./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    this.updateCSSOfComponentSelector()
  }

  private updateCSSOfComponentSelector() {

    document.getElementById("containerSelector")!.style.maxWidth = "1000px";
    document.getElementById("SearchInput")!.style.left = "15vw";
    document.getElementById("CitySelector")!.style.position = "relative";
    document.getElementById("CitySelector")!.style.left = "6vw";

  }

}
