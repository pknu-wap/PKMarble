//건물 세우기
//땅 번호=number, 건물 몇개세울지 - 1 = j

function PlaceBuilding(number, j) {
    var x = document.querySelectorAll('.build');
    var y = x[number].children;
    for (let i = 0; i <= j; i++) {
        PB(i);
    }

    function PB(n) {
        y[n].style.visibility = "visible";
        /* trigger reflow, https://stackoverflow.com/questions/27637184/what-is-dom-reflow*/
        y[n].style.animation = 'none';
        y[n].offsetHeight;
        y[n].style.animation = null;
    }
}
//랜드마크 세우기, 애니메이션은 아직 추가안함
function PlaceLandmark(number) {
    var x = document.querySelectorAll('.landmark');
    x[number].style.visibility = "visible";
}
//랜드마크 파괴, 애니메이션은 아직 추가안함
function destroyLandmark(number) {
    var x = document.querySelectorAll('.landmark');
    x[number].style.visibility = "hidden";
}
//건물 지우기
function cl(number) {
    var x = document.querySelectorAll('.build');
    var y = x[number].children;
    for (let i = 0; i < 4; i++) {
        y[i].style.visibility = "hidden";
    }
}
//자기 차례에 오른쪽으로 살짝 이동
function slt(self) {
    var x = document.querySelectorAll('.PlayerCard')
    var y = document.querySelector('#a');
    if (y.value === "오른쪽") {
        x[0].style.transform = 'translateX(35px)';
        self.value = "왼쪽";
    } else {
        x[0].style.transform = 'translateX(0px)';
        self.value = "오른쪽";
    }
}

function playericon_move(player, line, cell) {
    //땅정보 들고 오기, line, cell, n번째 칸
    var x = document.querySelectorAll('.chess');
    if (line == 1) {
        x[player].style.transform = 'translateX('+(cell-1)*120+'px)';
    }
    if (line == 2) {
        x[player].style.transform = 'translate(840px, '+(cell-1)*80+'px)';
    }
    if (line == 3) {
        x[player].style.transform = 'translate('+(840 - (cell-1)*120)+'px, 560px)';
    }
    if (line == 4) {
        x[player].style.transform = 'translate(0px, '+(560 - (cell-1)*80)+'px)';
    }
}
//자기 차례에 주사위 버튼 보이게 하기
function dice_show() {
    var x = document.querySelector('#rollbtn');
    var y = window.getComputedStyle(x).visibility;
    if (y === 'hidden') {
        x.style.visibility = 'visible';
    } else {
        x.style.visibility = "hidden";
    }
}


//땅 클릭시 information 창 띄우기
function clickland(i){
  //땅 이름 정보 가져오기
  var x = document.querySelectorAll('.name');
  var x1 = x[i].innerText;
  document.querySelector('.info_name').innerText = x1;
  //건물 가격
  document.querySelector('.p2_m').innerText = build[i].build_cost[0];
  document.querySelector('.p3_m').innerText = build[i].build_cost[1];
  document.querySelector('.p4_m').innerText = build[i].build_cost[2];
  document.querySelector('.p5_m').innerText = build[i].build_cost[3];
  //인수비용
  document.querySelector('.p6_m').innerText = build[i].acquisition_cost;
  //통행료 정보 가져오기
  var y = document.querySelectorAll('.price');
  var y1 = y[i].innerText;
  document.querySelector('.p7_m').innerText = y1;

  document.querySelector('.bb').style.visibility = "visible";
}
//esc누르면 information끄기
function keydown() {
    if (event.keyCode === 27) {
        document.querySelector('.bb').style.visibility = "hidden";
    }
}
//특수지역 돈 뺏은거 표시
function getmoney(self) {
    var x = document.querySelector('.moneybag');
    var y = window.getComputedStyle(x).visibility;
    if (y === 'hidden') {
        x.style.visibility = "visible";
        self.value = "돈 강탈";
    } else {
        x.style.visibility = "hidden";
        self.value = "돈 없음";
    }
}
//roll  dice animation
function rolldice() {
    var x = document.querySelector('.dice');
    x.style.visibility = "visible";
    x.style.animation = 'none';
    x.offsetHeight;
    x.style.animation = null;
    main();
    //시간
    x.style.visibility = 'hidden';

}
//플레이어 이동 에니매이션    ---미구현
function playermove() {

}
//test
var btn = document.querySelector('.test');
btn.addEventListener("click", function() { cl(1) });
btn.addEventListener("click", function() { destroyLandmark(0) });
//게임 기록 함수, 문자열 string추가 시킴, 나중에 바꿔야함
function record(string) {
    var x = document.querySelector('.record');
    x.innerHTML = x.innerHTML + "<br>" + string;
}
//총재산, 돈, 등수 바꾸는 함수
function record_player(){
  var x = document.querySelectorAll('.allmoney');
  var y = document.querySelectorAll('.money');
  var z = document.querySelectorAll('.P_rank');
  for(let i=0; i<4; i++){
    x[i].innerHTML = players[i].assets;
    y[i].innerHTML = players[i].money;
    z[i].innerHTML = players[i].assets_rank;
  }
}
//건물 통행료 바꾸는 함수
function land_price(i){
  var x = document.querySelectorAll('.price');
  x[i].innerHTML = build[i].current_entrancefee;
}
//능력 입력 함수
function avility(i){
    
}
//땅 색 바꾸기
function get_land(i, j){
    var x = document.querySelectorAll('b');
    if(j == 0){
         b[i].style.backgroundImage = "linear-gradient(to right, #FF837E, #FFBFB4, #FF837E)";
    }
    if(j == 1){
         b[i].style.backgroundImage = "linear-gradient(to right, #F2E527, #F2E085, #F2E527)";
    }
    if(j == 2){
         b[i].style.backgroundImage = "linear-gradient(to right, #9ABF75, #EFF299, #9ABF75)";
    }
    if(j == 3){
         b[i].style.backgroundImage = "linear-gradient(to right, #3270A6, #36ABD9, #3270A6)";
    }
}