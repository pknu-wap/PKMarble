function dp(number, j){
  var x = document.querySelectorAll('.build');
  var y = x[number].childNodes;
  y[j].style.visibility = "visible";
}

function cl(number){
  var x = document.querySelectorAll('.build');
  var y = x[number].childNodes;
  for(var p = 1; p < 6; p++) {
    y[p].style.visibility = "hidden";
     //왜 한번만 반복되지?
  }
}

function c(self){
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
