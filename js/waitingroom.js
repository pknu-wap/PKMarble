function keydown(i, self){
  var t = document.querySelectorAll('.showready');
  var u = window.getComputedStyle(t[i]).visibility;
  if(u === 'hidden'){
    t[i].style.visibility = 'visible';
    self.value='준비해제(R)';
    self.style.backgroundColor='green';
  }
  else{
    t[i].style.visibility = 'hidden';
    self.value='준비하기(R)';
    self.style.backgroundColor='red';
  }
}

function active(){
  var t = document.querySelectorAll('.showready');
  if(window.getComputedStyle(t[0]).visibility==='visible'){
    if(window.getComputedStyle(t[1]).visibility==='visible'){
      if(window.getComputedStyle(t[2]).visibility==='visible'){
        if(window.getComputedStyle(t[3]).visibility==='visible'){
          location.href='game.html';
        }
      }
    }
  }
}
