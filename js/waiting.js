//엔터 누르면 대기실로 이동
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
//start버튼 클릭시 대기실로 이동
function clk(){
  var x = document.querySelector('#nickname').value;
  /*x에 Player name 저장*/
  location.href='waitingroom.html'
}
//브금 실행 버튼
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
