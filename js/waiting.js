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
