function keydown(i, self){
  var x = document.querySelectorAll('.showready');
  var y = window.getComputedStyle(x[i]).visibility;
  if(y === 'hidden'){
    x[i].style.visibility = 'visible';
    self.value='준비해제(R)';
    self.style.backgroundColor='green';
  }
  else{
    x[i].style.visibility = 'hidden';
    self.value='준비하기(R)';
    self.style.backgroundColor='red';
  }
}

function active(){
  var x = document.querySelectorAll('.showready');
  if(window.getComputedStyle(x[0]).visibility==='visible'){
    if(window.getComputedStyle(x[1]).visibility==='visible'){
      if(window.getComputedStyle(x[2]).visibility==='visible'){
        if(window.getComputedStyle(x[3]).visibility==='visible'){
          location.href='game.html';
        }
      }
    }
  }
}

function join(i, self){
  var x = document.querySelectorAll('.Player');
  var y = window.getComputedStyle(x[i]).visibility;
  if(y === 'hidden'){
    x[i].style.visibility = 'visible';
    self.value='나가기';
    self.style.backgroundColor='green';
    x[i].style.animation = 'none';
    x[i].offsetHeight;
    x[i].style.animation = null;
  }
  else{
    x[i].style.visibility = 'hidden';
    self.value='참가';
    self.style.backgroundColor='red';
  }
}
