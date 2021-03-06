var r = 0, g = 0, b = 0, a = 0, CPInterval;
var h = 0, e = 0, x = 0, hr = false, er = false, xr = false, CRInterval;

function CPUpdate() {
  var divs = document.getElementsByTagName("div");
  for(var i = 0; i < divs.length; i++){
    if(window.getComputedStyle(divs[i])["background-color"].startsWith('rgb(') || window.getComputedStyle(divs[i])["background-color"].startsWith('rgba(')) {
      var color = window.getComputedStyle(divs[i])["background-color"].replace('rgb(', '').replace(')', '').split(',');
      if(typeof(divs[i].attributes.trueColor) == 'undefined')
        divs[i].attributes.trueColor = color;
      else
        color = divs[i].attributes.trueColor;
      divs[i].style.backgroundColor = "rgba(" + Math.floor(parseInt(color[0]) * r) + ", " + Math.floor(parseInt(color[1]) * g) + ", " + Math.floor(parseInt(color[2]) * b) + ", " + Math.floor(a) + ")";
    } else if (window.getComputedStyle(divs[i])["background-color"].startsWith('#')) {
      divs[i].style.backgroundColor = "rgba(0,0,0,0)";
    }
  }
  
  var forms = document.getElementsByTagName("form");
  for(var i = 0; i < forms.length; i++){
    if(window.getComputedStyle(forms[i])["background-color"].startsWith('rgb(') || window.getComputedStyle(forms[i])["background-color"].startsWith('rgba(')) {
      var color = window.getComputedStyle(forms[i])["background-color"].replace('rgb(', '').replace(')', '').split(',');
      if(typeof(forms[i].attributes.trueColor) == 'undefined')
        forms[i].attributes.trueColor = color;
      else
        color = forms[i].attributes.trueColor;
      forms[i].style.backgroundColor = "rgba(" + Math.floor(parseInt(color[0]) * r) + ", " + Math.floor(parseInt(color[1]) * g) + ", " + Math.floor(parseInt(color[2]) * b) + ", " + Math.floor(a) + ")";
    } else if (window.getComputedStyle(forms[i])["background-color"].startsWith('#')) {
      forms[i].style.backgroundColor = "rgba(0,0,0,0)";
    }
  }
}

function rgb(r,g,b) {
  this.r = r/100;
  this.g = g/100;
  this.b = b/100;
  //console.log(r,g,b);
}

function rgba(r,g,b,a) {
  this.r = r/100;
  this.g = g/100;
  this.b = b/100;
  this.a = a;
  //console.log(r,g,b);
}

function hex(h,e,x) {
  this.h = h;
  this.e = e;
  this.x = x;
}

function turnOnColorPicker() {
  CPInterval = setInterval(CPUpdate,1);
}

turnOnColorPicker();

function turnOffColorPicker() {
  clearInterval(CPInterval);
  CPInterval = undefined;
}

function CRUpdate() {
  if(hr) h--; else h++;
  if(er) e--; else e++;
  if(xr) x--; else x++;
  
  if(h>=255) hr = true; else if(h<=0) hr = false;
  if(e>=255) er = true; else if(e<=0) er = false;
  if(x>=255) xr = true; else if(x<=0) xr = false;
  
  rgb(Math.abs(this.h % 256), Math.abs(this.e % 256), Math.abs(this.x % 256));
}

function turnOnColorRainbow() {
  CRInterval = setInterval(CRUpdate,1);
}

function turnOffColorRainbow() {
  clearInterval(CRInterval);
  CRInterval = undefined;
}
