//준비하기 단축키
function keydown(i, self){
  var x = document.querySelectorAll('.showready');
  var y = window.getComputedStyle(x[i]).visibility;
  if(y === 'hidden'){
    x[i].style.visibility = 'visible';
    self.value='준비해제(R)';
    self.style.backgroundColor='#F2F1F0';
    self.style.color='#261C18';
  }
  else{
    x[i].style.visibility = 'hidden';
    self.value='준비하기(R)';
    self.style.backgroundColor='#261C18';
    self.style.color = "#F2F1F0";
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
//등장 효과
function join(i, self){
  var x = document.querySelectorAll('.flip-card');
  var y = window.getComputedStyle(x[i]).visibility;
  var z = document.querySelectorAll('.flip-front');
  var w = document.querySelectorAll('.flip-back');
  var t = document.querySelectorAll('.showready')
  if(y === 'hidden'){
    x[i].style.visibility = 'visible';
    self.value='나가기';
    self.style.backgroundColor='green';

    z[i].style.animation = 'none';
    z[i].offsetHeight;
    z[i].style.animation = null;
    w[i].style.animation = 'none';
    w[i].offsetHeight;
    w[i].style.animation = null;
  }
  else{
    x[i].style.visibility = 'hidden';
    t[i].style.visibility = 'hidden';
    self.value='참가';
    self.style.backgroundColor='red';
  }
}
//장면 전환 효과
function scrtrs(){
  document.querySelector(".cover1").style.animationPlayState = "running";
  document.querySelector(".cover2").style.animationPlayState = "running";
}
//게임화면으로 넘어가기
function link(){
  location.href='game.html';
}
var btn = document.querySelector('.test');
btn.addEventListener("click", function(){setTimeout(function(){link()}, 1200)});
