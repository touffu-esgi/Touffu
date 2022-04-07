export function resize(event: Event){
  const container = document.getElementById("containerSelector");
  if(window.innerWidth < 1436){
    document.getElementById("SearchInput")!.style.left = "380px";
    container!.style.marginRight = "0";
    container!.style.position = "relative";
    container!.style.left = "25%";
    container!.style.width = "887px";

    document.getElementById("SearchInput")!.style.left = "270px";
  }else{
    container!.style.left = "";
    container!.style.maxWidth = "887px";
  }
}

export function updateCSSOfComponentSelector() {
  document.getElementById("containerSelector")!.style.minWidth = "887px";
  document.getElementById("containerSelector")!.style.maxWidth = "887px";
  document.getElementById("containerSelector")!.style.marginTop = "150px";
  document.getElementById("containerSelector")!.style.marginRight = "0";
  document.getElementById("parentSelector")!.style.boxShadow = "2px 1px 10px rgb(0,0,0, 0.2)";
  document.getElementById("SearchInput")!.style.left = "270px";
  document.getElementById("CitySelector")!.style.position = "relative";
  document.getElementById("CitySelector")!.style.left = "6vw";
  document.getElementById("animal")!.style.boxShadow = "2px 1px 10px rgb(0,0,0, 0.2)";

  let htmlDocument = document.body.parentNode
  // @ts-ignore
  htmlDocument.style.backgroundColor = "white"
}
