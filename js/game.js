function PlaceBuilding(number, j){
  var x = document.querySelectorAll('.build');
  var y = x[number].children;
  y[j].style.visibility = "visible";

  y[j].style.animation = 'none';
  y[j].offsetHeight; /* trigger reflow, https://stackoverflow.com/questions/27637184/what-is-dom-reflow*/
  y[j].style.animation = null;
}
function PlaceLandmark(number){
  var x = document.querySelectorAll('.landmark');
  x[number].style.visibility = "visible";
}
function destroyLandmark(number){
  var x = document.querySelectorAll('.landmark');
  x[number].style.visibility = "hidden";
}
function cl(number){
  var x = document.querySelectorAll('.build');
  var y = x[number].children;
  for(var p = 0; p < 4; p++){
    y[p].style.visibility = "hidden";
  }
}

function slt(self){
  var x = document.querySelectorAll('.Player')
  var y = document.querySelector('#a');
  if(y.value === "오른쪽"){
    x[0].style.transform = 'translateX(35px)';
    self.value="왼쪽";
  }
  else{
    x[0].style.transform= 'translateX(0px)';
    self.value="오른쪽";
  }
}
function show(){
  document.querySelector('#dice').style.visibility = 'visible';
}
// function getland(i, j){
//   //i플레이어 컬러 가져오기
//   //j랜드를 i플레이어 컬러로 바꾸기
//   var b = document.querySelectorAll('.b');
//   var x = document.querySelectorAll('.Player');
//   b[j].style.backgroundColor = x[i].style.backgroundColor; //작동 안됨
// }
function clickland(i){
  var x = document.querySelectorAll('.name');
  var x1 = x[i].innerText;
  document.querySelector('.info_name').innerText = x1;

  var y = document.querySelectorAll('.price');
  var y1 = y[i].innerText;
  document.querySelector('.p7_m').innerText = y1;

  document.querySelector('.bb').style.visibility = "visible";
}
function keydown(){
  if(event.keyCode===27){
    document.querySelector('.bb').style.visibility = "hidden";
  }
}
function getmoney(self){
  var x = document.querySelector('.moneybag');
  var y = window.getComputedStyle(x).visibility;
  if(y === 'hidden'){
    x.style.visibility = "visible";
    self.value = "돈 강탈";
  }
  else{
    x.style.visibility = "hidden";
    self.value = "돈 없음";
  }
}
