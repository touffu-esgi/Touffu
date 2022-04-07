import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




window.addEventListener('resize', function(event){
  const container = document.getElementById("containerSelector");
  if(window.innerWidth < 1436){
    document.getElementById("SearchInput")!.style.left = "380px";
    container!.style.marginRight = "0";
    container!.style.position = "relative";
    container!.style.left = "25%";
    container!.style.width = "1000px";
  }else{
    container!.style.left = "";
    container!.style.maxWidth = "1000px";
  }
});


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
    document.getElementById("parentSelector")!.style.boxShadow = "2px 1px 10px rgb(0,0,0, 0.2)";
    document.getElementById("containerSelector")!.style.marginRight = "0";
    document.getElementById("SearchInput")!.style.left = "250px";
    document.getElementById("CitySelector")!.style.position = "relative";
    document.getElementById("CitySelector")!.style.left = "6vw";
    let htmlDocument = document.body.parentNode
    // @ts-ignore
    htmlDocument.style.backgroundColor = "white"
  }

}
