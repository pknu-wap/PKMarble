function turn(){
}
function c(self){
  var x1 = document.querySelector('#Player1');
  var x2 = document.querySelector('#Player2');
  var x3 = document.querySelector('#Player3');
  var x4 = document.querySelector('#Player4');
  var y = document.querySelector('#a');
  if(y.value === "오른쪽"){
    x1.style.transform = 'translateX(35px)';
    self.value="왼쪽";
    x2.style.filter = 'blur(2px)';
    x3.style.filter = 'blur(2px)';
    x4.style.filter = 'blur(2px)';
  }
  else{
    x1.style.transform= 'translateX(0px)';
    self.value="오른쪽";
    x2.style.filter = 'blur(0px)';
    x3.style.filter = 'blur(0px)';
    x4.style.filter = 'blur(0px)';
  }
}
