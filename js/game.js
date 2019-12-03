//건물 세우기
//땅 번호=number, 건물 몇개세울지 - 1 = j

function PlaceBuilding(number, j) {
    var x = document.querySelectorAll('.build');
    var y = x[number].children;
    var z = document.querySelectorAll('.landmark');
    if(j <= 3){
        if (j == 3) {
        y[0].style.visibility = 'hidden';
        y[1].style.visibility = 'hidden';
        y[2].style.visibility = 'hidden';
        z[number].style.visibility = "visible";
        } 
        else {
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
    }
    else{
        y[0].style.visibility = 'hidden';
        y[1].style.visibility = 'hidden';
        y[2].style.visibility = 'hidden';
        z[number].style.visibility = "hidden";
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
function slt(i) {
    var x = document.querySelectorAll('.PlayerCard')
    for (let j = 0; j < 4; j++) {
        x[j].style.transform = 'translateX(0px)';
    }
    x[i].style.transform = 'translateX(35px)';
}

function playericon_move(player, line, cell) {
    //땅정보 들고 오기, line, cell, n번째 칸
    var x = document.querySelectorAll('.chess');
    if (line == 1) {
        x[player].style.transform = 'translateX(' + (cell - 1) * 120 + 'px)';
    }
    if (line == 2) {
        x[player].style.transform = 'translate(840px, ' + (cell - 1) * 80 + 'px)';
    }
    if (line == 3) {
        x[player].style.transform = 'translate(' + (840 - (cell - 1) * 120) + 'px, 560px)';
    }
    if (line == 4) {
        x[player].style.transform = 'translate(0px, ' + (560 - (cell - 1) * 80) + 'px)';
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
function clickland(i) {
    //땅 이름 정보 가져오기
    var x = document.querySelectorAll('.name');
    var x1 = x[i].innerText;
    document.querySelector('.info_name').innerText = x1;
    //이미지 가져오기
    var z = document.querySelectorAll('.landmark');
    document.querySelector('.info_image').src = z[i].src;
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
function getmoney() {
    var x = document.querySelector('.moneybag');
    var y = window.getComputedStyle(x).visibility;
    if (y === 'hidden') {
        x.style.visibility = "visible";
    } 
    else {
        x.style.visibility = "hidden";
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
function record_player() {
    var x = document.querySelectorAll('.allmoney');
    var y = document.querySelectorAll('.money');
    var z = document.querySelectorAll('.P_rank');
    for (let i = 0; i < 4; i++) {
        x[i].innerHTML = players[i].assets;
        y[i].innerHTML = players[i].money;
        z[i].innerHTML = players[i].assets_rank;
    }
}
//건물 통행료 바꾸는 함수
function land_price(i) {
    var x = document.querySelectorAll('.price');
    x[i].innerHTML = build[i].current_entrancefee;
}
//능력 입력 함수
function avility() {
    var x = document.querySelectorAll('.PlayerInfo');
    for(let i = 0; i < 4; i++){
        switch (players[i].item) {
        case 1:
        x[i].innerHTML = "내 땅 밟을 때 10퍼센트 확률로<br>그 지역에서 세계여행";
            break;
        case 2:
        x[i].innerHTML = "상대 땅 밟을 때 5퍼센트 확률로<br>통행세 면제";
            break;
        case 3:
        x[i].innerHTML = "통행세가 건물 값 1.5배 되는 패시브<br>( 축제가 겹치면 1.2 * 1.5배 처리됨 )";
            break;
        case 4:
        x[i].innerHTML = "상대 땅 도착 시 10퍼센트 확률로<br>해당 건물주 돈 10퍼센트 뜯기";
            break;
        default:
            // statements_def
            break;
        }
    }
}
//땅 색 바꾸기
//i가 건물 번호 배열값
//플레이어 번호 0부터
function get_land(i, j) {
    var x = document.querySelectorAll('.b');
    switch (j) {
        case 0:
        x[i].style.backgroundImage = "linear-gradient(to right, #FF837E, #FFBFB4, #FF837E)";
            break;
        case 1:
        x[i].style.backgroundImage = "linear-gradient(to right, #F2E527, #F2E085, #F2E527)";
            break;
        case 2:
        x[i].style.backgroundImage = "linear-gradient(to right, #9ABF75, #EFF299, #9ABF75)";
            break;
        case 3:
        x[i].style.backgroundImage = "linear-gradient(to right, #3270A6, #36ABD9, #3270A6)";
            break;
        case 4:
        x[i].style.backgroundImage = "none";
            break;
        default:
            // statements_def
            break;
        }
    // if (j == 0) {
    //     x[i].style.backgroundImage = "linear-gradient(to right, #FF837E, #FFBFB4, #FF837E)";
    // }
    // if (j == 1) {
    //     x[i].style.backgroundImage = "linear-gradient(to right, #F2E527, #F2E085, #F2E527)";
    // }
    // if (j == 2) {
    //     x[i].style.backgroundImage = "linear-gradient(to right, #9ABF75, #EFF299, #9ABF75)";
    // }
    // if (j == 3) {
    //     x[i].style.backgroundImage = "linear-gradient(to right, #3270A6, #36ABD9, #3270A6)";
    // }
    // else{
    //     x[i].style.backgroundImage = "none";
    // }
}
//축제시 땅 빛나게 하기
function festivalevent(player) {
    var x = document.querySelectorAll('.b');
    for (let i = 0; i < 28; i++) {
        x[i].style.animation = "none";
        x[i].style.WebkitAnimation = "none";
    }
    if(player <= 4){
        for(let j = 0; j < 28; j++) {
            if(build[j].owner == player){
                x[j].style.animation = "glowing_b 1s linear infinite";
                x[j].style.WebkitAnimation = "glowing_b 1s linear infinite";
            }
        }
    }
}