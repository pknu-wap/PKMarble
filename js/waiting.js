function keydown(){
  if(event.keyCode===13){
    var x = document.querySelector('#nickname').value;
    /*x에 Player name 저장*/
    if(x === ""){
      alert("닉네임을 입력해 주세요");
    }
    else{
      location.href='waitingroom.html';
    }
  }
}
function clk(){
  var x = document.querySelector('#nickname').value;
  /*x에 Player name 저장*/
  location.href='waitingroom.html'
}
function BGM(){
  var x = document.querySelector('#audio');
  var y = document.querySelector('#BGMbtn');
  if(y.value === "BGM On"){
    y.value = "BGM Off";
    x.play();
  }
  else{
    y.value = "BGM On";
    x.pause();
  }
}
function startmusic(){
  var x = document.querySelector('#audio');
  x.play();
}
