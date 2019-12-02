    //import {build, player} from './object.js';
    var build = [{
            'id': 1,
            'name': "START",
            'owner': 0,
            'build_cost': [1, 3, 6, 10],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 1,
            'cell': 1,

        },
        {
            'id': 2,
            'name': "양어장",
            'owner': 0,
            'build_cost': [60000, 180000, 300000, 300000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 1,
            'cell': 2,
        },
        {
            'id': 3,
            'name': "테니스장",
            'owner': 0,
            'build_cost': [80000, 240000, 320000, 320000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 1,
            'cell': 3,

        },
        {
            'id': 4,
            'name': "미래관",
            'owner': 0,
            'build_cost': [1, 3, 6, 10],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 1,
            'cell': 4,
            'stack_of_money': 0,

        },
        {
            'id': 5,
            'name': "세종관",
            'owner': 0,
            'build_cost': [100000, 300000, 500000, 500000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 1,
            'cell': 5,


        },
        {
            'id': 6,
            'name': "장보고관",
            'owner': 0,
            'build_cost': [110000, 330000, 550000, 550000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 1,
            'cell': 6,
        },
        {
            'id': 7,
            'name': "한결관",
            'owner': 0,
            'build_cost': [120000, 360000, 600000, 600000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 1,
            'cell': 7,


        },

        {
            'id': 8,
            'name': "대학휴학",
            'owner': 0,
            'build_cost': [1, 3, 6, 10],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 2,
            'cell': 1,


        },
        {
            'id': 9,
            'name': "수산과학관",
            'owner': 0,
            'build_cost': [150000, 450000, 750000, 750000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 2,
            'cell': 2,
        },
        {
            'id': 10,
            'name': "경영관",
            'owner': 0,
            'build_cost': [160000, 480000, 800000, 800000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 2,
            'cell': 3,


        },
        {
            'id': 11,
            'name': "자연과확관",
            'owner': 0,
            'build_cost': [170000, 510000, 850000, 850000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 2,
            'cell': 4,


        },
        {
            'id': 12,
            'name': "호연관",
            'owner': 0,
            'build_cost': [1, 3, 6, 10],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 2,
            'cell': 5,


        },
        {
            'id': 13,
            'name': "아름관",
            'owner': 0,
            'build_cost': [170000, 510000, 850000, 850000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 2,
            'cell': 6,

        },
        {
            'id': 14,
            'name': "건축관",
            'owner': 0,
            'build_cost': [180000, 540000, 900000, 900000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 2,
            'cell': 7,


        },
        {
            'id': 15,
            'name': "대학축제",
            'owner': 0,
            'build_cost': [1, 3, 6, 10],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 3,
            'cell': 1,


        },
        {
            'id': 16,
            'name': "위드센터",
            'owner': 0,
            'build_cost': [200000, 600000, 1000000, 1000000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 3,
            'cell': 2,


        },
        {
            'id': 17,
            'name': "수위실",
            'owner': 0,
            'build_cost': [1, 3, 6, 10],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 3,
            'cell': 3,


        },
        {
            'id': 18,
            'name': "충무관",
            'owner': 0,
            'build_cost': [210000, 630000, 1050000, 1050000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 3,
            'cell': 4,

        },
        {
            'id': 19,
            'name': "청운관",
            'owner': 0,
            'build_cost': [220000, 660000, 1100000, 1100000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 3,
            'cell': 5,


        },
        {
            'id': 20,
            'name': "환경해양관",
            'owner': 0,
            'build_cost': [220000, 660000, 1100000, 1100000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 3,
            'cell': 6,


        },
        {
            'id': 21,
            'name': "가온관",
            'owner': 0,
            'build_cost': [220000, 660000, 1100000, 1100000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 3,
            'cell': 7,


        },
        {
            'id': 22,
            'name': "셔틀버스",
            'owner': 0,
            'build_cost': [1, 3, 6, 10],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 4,
            'cell': 1,


        },
        {
            'id': 23,
            'name': "나래관",
            'owner': 0,
            'build_cost': [240000, 720000, 1200000, 1200000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 4,
            'cell': 2,


        },
        {
            'id': 24,
            'name': "자산관",
            'owner': 0,
            'build_cost': [260000, 780000, 1300000, 1300000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 4,
            'cell': 3,


        },
        {
            'id': 25,
            'name': "향파관",
            'owner': 0,
            'build_cost': [270000, 810000, 1350000, 1350000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': true,
            'line': 4,
            'cell': 4,


        },
        {
            'id': 26,
            'name': "웅비관",
            'owner': 0,
            'build_cost': [270000, 810000, 1350000, 1350000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 4,
            'cell': 5,


        },

        {
            'id': 27,
            'name': "누리관",
            'owner': 0,
            'build_cost': [300000, 900000, 1500000, 1500000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 4,
            'cell': 6,


        },
        {
            'id': 28,
            'name': "대학본부",
            'owner': 0,
            'build_cost': [320000, 960000, 1600000, 1600000],
            'acquisition_cost': 0,
            'current_entrancefee': 0,
            'buildings': 0,
            'special_building': false,
            'line': 4,
            'cell': 7,


        }
    ];
    var players = [{
            'id': 1,
            'line': 1,
            'cell': 1,
            'item': 0,
            'assets': 10000000,
            'money': 10000000,
            'loan': false,
            'gameover': false,
            'bus': false,
            'festival': false,
            'assets_rank': 1,
            'line_monopoly': false,
            'winner': false,
            'count_double_dice': 0,
            'double_dice_mode': false,
        },
        {
            'id': 2,
            'line': 1,
            'cell': 1,
            'item': 1,
            'money': 10000000,
            'assets': 10000000,
            'loan': false,
            'gameover': false,
            'bus': false,
            'festival': false,
            'assets_rank': 2,
            'line_monopoly': false,
            'winner': false,
            'count_double_dice': 0,
            'double_dice_mode': false,
        },
        {
            'id': 3,
            'line': 1,
            'cell': 1,
            'item': 2,
            'money': 10000000,
            'assets': 10000000,
            'loan': false,
            'gameover': false,
            'bus': false,
            'festival': false,
            'assets_rank': 3,
            'line_monopoly': false,
            'winner': false,
            'count_double_dice': 0,
            'double_dice_mode': false,
        },
        {
            'id': 4,
            'line': 1,
            'cell': 1,
            'item': 3,
            'money': 10000000,
            'assets': 10000000,
            'loan': false,
            'gameover': false,
            'bus': false,
            'festival': false,
            'assets_rank': 4,
            'line_monopoly': false,
            'winner': false,
            'count_double_dice': 0,
            'double_dice_mode': false,
        }
    ]
    var player_turn = 0;
    var sum_of_turn = 1;

    window.onload = dice_show();
    
    function main() {
        record_player();
        start_turn(player_turn);
    }

    function start_turn(player) {
        alert("현재 플레이어 " + (player + 1) + " 턴 입니다.");
        console.log(player + 1 + " 턴 입니다.");
        if (players[player].bus) {
            bus(player);
        } else if (players[player].festival) {
            festvial(player);
        } else if (players[player].double_dice_mode) {
            if (players[player].count_double_dice >= 3) {
                players[player].count_double_dice = 0;
                players[player].double_dice_mode = false;
                end_turn();
            }
            throw_dice(player);
        } else {
            throw_dice(player);
        }
    }

    function throw_dice(player) {
        var dice1 = random(1, 6);
        var dice2 = random(1, 6);
        var sum_of_dice = dice1 + dice2;
        alert("첫번째 주사위 : " + dice1 + "\n" +
            "두번째 주사위 : " + dice2 + "\n");
        record("플레이어 " + (player + 1) + "이 " + sum_of_dice + "만큼 이동함");
        console.log("dice1 : " + dice1);
        console.log("dice2 : " + dice2);
        console.log("sum_of_dice : " + sum_of_dice);
        if (dice1 == dice2) {
            players[player].count_double_dice++;
            record("플레이어 " + (player + 1) + "이 주사위 더블을 함");
        } else {
            players[player].double_dice_mode = false;
            players[player].count_double_dice = 0;
        }
        playermove(player, sum_of_dice);
    }

    function random(min, max) {
        var ranNum = Math.floor(Math.random() * (max - min + 1)) + min;
        return ranNum;
    }

    function playermove(player,
        dice) {
        var player_cell = players[player].cell;
        var player_line = players[player].line;
        player_cell += dice;
        if (player_cell > 7 && player_cell <= 14) {
            player_line++;
            player_cell -= 7;
            if (player_line > 4)
                player_line = 1;
        } else if (player_cell > 14 && player_cell <= 21) {
            player_line += 2;
            player_cell -= 14;
            if (player_line > 4)
                player_line = 1;
        }
        players[player].cell = player_cell;
        players[player].line = player_line;
        playericon_move(player, players[player].line, players[player].cell);
        console.log("players[player].cell : " + players[player].cell);
        console.log("players[player].line : " + players[player].line);
        check_current_board_cell(player);
    }

    function check_current_board_cell(player) {
        var building_number = (players[player].cell + (players[player].line - 1) * 7) - 1;
        console.log("building_number : " + building_number);
        console.log("special_building : " + build[building_number].special_building);
        alert("도착 건물 : " + build[building_number].name);
        if (!build[building_number].special_building) {
            if (build[building_number].owner != players[player].id && build[building_number].owner != 0) {
                cost_entrancefee(player, building_number);
            } else {
                if (build[building_number].buildings == 4) {
                    alert("랜드마크를 건설했으므로 더이상 건설이 불가능합니다!!");
                    end_turn();
                } else {
                    construct_building(player, building_number);
                }
            }
        } else {
            // 특수 건물 경우를 넣어주는 부분
            var building_name = build[building_number].name;
            switch (building_name) {
                case "START":
                    players[player].money += 1000000;
                    construct_building(player, building_number);
                    break;
                case "미래관":
                    get_money(player);
                    break;
                case "대학휴학":
                    alert("한 턴 스킵됩니다.");
                    end_turn();
                    break;
                case "호연관":
                    //향파관 이동
                    players[player].line = 4;
                    players[player].ceil = 4;
                    end_turn();
                    break;
                case "대학축제":
                    //모든 소유 건물 통행료 1.2배
                    festival(player);
                    break;
                case "수위실":
                    dispose_other_land(player);
                    // 돈 10퍼센트 압수
                    break;
                case "환경해양관":
                    // 돈 5퍼센트 압수
                    rob_money(player, 0.1, 19);
                    break;
                case "셔틀버스":
                    // 세계 여행
                    players[player].bus = true;
                    end_turn();
                    break;
                case "향파관":
                    //호연관 이동
                    players[player].line = 2;
                    players[player].cell = 5;
                    end_turn();
                    break;
                default:
                    alert("특수 건물 오류 발생");
                    end_turn();
                    break;
            }
        }
    }

    function construct_building(player, building_number) {
        var confirm_build = confirm("건물을 지으시겠습니까??");
        if (confirm_build) {
            var input = prompt("지을 건물 단계를 정해주세요(랜드 마크 건설은 4를 입력해주시면 됩니다. 0은 취소)" +
                "\n현재 건물 단계 : " + build[building_number].buildings +
                "\n1단계 가격 : " + build[building_number].build_cost[0] +
                "\n2단계 가격 : " + build[building_number].build_cost[1] +
                "\n3단계 가격 : " + build[building_number].build_cost[2],
                +"\n랜드 마크 가격 : " + build[building_number].build_cost[3], 0);
            console.log(input);
            switch (input) {
                case '0':
                    //건물을 건설하지 않는다고 했으므로 턴 끝
                    end_turn();
                    break;
                case '1':
                case '2':
                case '3':
                    var parse_input = parseInt(input);
                    if (parse_input > build[building_number].buildings) {
                        check_buying_possibility_and_buying(player, building_number, parse_input);
                    } else {
                        alert("현재 건물의 단계보다 높은 값을 입력해주세요.");
                        construct_building(player, building_number);
                    }
                    break;
                case '4':
                    if (build[building_number].buildings == 3) {
                        check_buying_possibility_and_buying(player, building_number, parse_input);
                    } else {
                        alert("현재 건물의 단계가 3이 아니므로 랜드 마크를 지을 수 없습니다.");
                        construct_building(player, building_number);
                    }
                    break;
                case null:
                    alert("건물 짓는 것을 포기했습니다.\n" +
                        "턴이 종료됩니다.");
                    end_turn();
                default:
                    alert("제대로된 값을 입력해주세요");
                    construct_building(player, building_number);
                    break;
            }
        } else {
            end_turn();
            //건물을 건설하지 않는다고 했으므로 턴 끝
        }

    }



    function check_buying_possibility_and_buying(player, building_number, input) {
        console.log(player, building_number, input);
        console.log(building_number);
        var build_cost = build[building_number].build_cost[input]
        if (players[player].money >= build_cost) {
            players[player].money -= build_cost;
            build[building_number].owner = players[player].id;
            build[building_number].buildings = input;
            set_entrancefee(building_number);
            PlaceBuilding(building_number, input - 1);
            set_acquisition_cost(building_number);
            //건물 샀음 
            //다음 턴으로 넘어감
        } else {
            alert("현재 돈이 부족합니다.");
            construct_building(player, building_number);
        }
    }

    function cost_entrancefee(player, building_number) {
        //build_cost가 배열이기 때문에 인덱스 값을 취해주기 위해 -1을 함
        var land_owner = build[building_number].owner - 1;
        var current_building_status = build[building_number].buildings - 1;

        if (players[player].money >= build[building_number].current_entrancefee) {
            players[player].money -= build[building_number].current_entrancefee;
            players[land_owner].money += build[building_number].current_entrancefee;
            //통행료를 지불했기 때문에 인수로 넘어감
            acquire_buildings(player, building_number);
        } else {
            players[land_owner].money += build[building_number].current_entrancefee;
            if (players[player].assets >= build[building_number].current_entrancefee) {
                //총 자산이 통행세보다 많을 경우 매각 단계에 돌입
                var confirm_disposal = confirm("현재 보유 중인 현금이 통행세보다 비싸서 땅을 매각 하시겠습니까?\n" +
                    "취소시 파산 처리됩니다.");
                if (confirm_disposal) {
                    disposal_asset(player, building_number);
                } else {
                    end_player(player);
                    //패배 처리 및 턴 종료
                }
            } else {
                if (!players[player].loan) {
                    var confirm_loan = confirm("단 한번 대출을 받을 수 있습니다 받으시겠습니까?\n" +
                        "취소시 파산 처리됩니다.");
                    if (confirm_loan) {
                        players[player].loan = true;
                        players[player].money = 0;
                        players[player].assets = 0;
                        end_turn();
                    } else {
                        end_player(player);
                    }
                } else {
                    end_player(player);
                }
            }
        }
    }

    function acquire_buildings(player, building_number) {
        var acquisition_cost = build[building_number].acquisition_cost;
        console.log("인수 비용 : " + acquisition_cost);
        if (players[player].money >= acquisition_cost) {
            var confirm_acquire = confirm("현재 이 건물을 인수할 수 있습니다. 인수하시겠습니까?");
            if (confirm_acquire) {
                players[player].money -= acquisition_cost;
                players[player].assets += acquisition_cost;
                build[building_number].owner = players[player].id;
                construct_building(player, building_number);
            } else {
                end_turn();
            }

        } else {
            alert("인수할 현금이 부족합니다!");
            end_turn();
        }
    }

    function set_entrancefee(building_number) {
        var land_owner = build[building_number].owner - 1;
        var current_building_status = build[building_number].buildings - 1;
        if (!players[land_owner].festival) {
            entrancefee1 = build[building_number].build_cost[current_building_status];
            build[building_number].current_entrancefee = entrancefee1;
            console.log(entrancefee1);
            land_price(building_number);
        } else {
            entrancefee1 = build[building_number].build_cost[current_building_status] * 1.2;
            build[building_number].current_entrancefee = entrancefee1;
            land_price(building_number);
        }
    }

    function set_acquisition_cost(building_number) {
        var current_cell_line = build[building_number].line;
        var current_building_status = build[building_number].buildings
        var acquisition_cost = build[building_number].acquisition_cost
        switch (current_cell_line) {
            case 1:
                acquisition_cost = build[building_number].build_cost[current_building_status] * 1.2;
                break;
            case 2:
                acquisition_cost = build[building_number].build_cost[current_building_status] * 1.25;
                break;
            case 3:
                acquisition_cost = build[building_number].build_cost[current_building_status] * 1.25;
                break;
            case 4:
                acquisition_cost = build[building_number].build_cost[current_building_status] * 1.3;
                break;
            default:
                alert("오류가 발생했습니다. 턴을 종료합니다.");
        }
        build[building_number].acquisition_cost = acquisition_cost;
        console.log("인수 비용 set : " + build[building_number].acquisition_cost);
        end_turn();
    }

    function disposal_asset(player, building_number) {
        var parse_input_disposal;
        var seller = players[player].id;
        var input_disposal_land;
        var sum_of_disposal = 0;
        while (players[player].money < build[building_number].acquisition_cost) {
            input_disposal_land = prompt("매각할 땅을 입력해주세요\n" +
                "(땅의 번호를 입력해주세요.)\n" +
                "현재 현금 : " + players[player].money, 0);
            parse_input_disposal_other_land = parseInt(input_disposal_land);
            if (parse_input_disposal_land == NaN) {
                alert("제대로된 값을 입력해주세요.");
                continue;
            }

            if (build[parse_input_disposal].owner == seller) {
                players[player].money += build[parse_input_disposal].build_cost[building_number];
                sum_of_disposal += build[parse_input_disposal].build_cost[building_number];
                build[parse_input_disposal].owner = 0;
            } else {
                alert("입력하신 땅은 다른 사람의 소유입니다.");
                continue;
            }
        }
        alert("매각이 완료되었습니다.");
        end_turn();
    }

    function reset_board() {}

    function festival(player) {
        record("플레이어 " + (player + 1) + "이 축제를 열었습니다!");
        if (players[player].festival) {
            players[player].festival = false;
            record("플레이어 " + (player + 1) + "의 축제가 끝났습니다!");
        } else {
            players[player].festvial = true;
        }
        end_turn();
    }

    function bus(player) {
        record("플레이어 " + (player + 1) + "이 버스를 탔습니다.");
        var bus_input = prompt("가고 싶은 지역의 번호를 입력해주세요.\n" +
            "(단 띄어 쓰기는 하셔야합니다.)", "1");
        var parse_bus_input = parseInt(bus_input);
        if (parse_bus_input < 29 && parse_bus_input > 0) {
            players[player].line = build[bus_input - 1].line;
            players[player].cell = build[bus_input - 1].cell;
            players[player].bus = false;
        } else {
            alert("제대로 숫자를 입력 해주세요.")
            bus(player);
        }
        end_turn();

    }

    function rob_money(player, percent, index) {
        //수위실은 배열 인덱스가 16
        build[3].stack_of_money += players[player].money * percent;
        players[player].money *= (1 - percent);
        alert("현금 자산의 " + percent + "퍼센트가 몰수 당했습니다.");
        record("플레이어 " + (player + 1) + "의 돈이 몰수 당했습니다.");
        end_turn();
    }

    function get_money(player) {
        if (build[3].stack_of_money > 0) {
            build[3].stack_of_money = 0;
            players[player].money += build[3].stack_of_money;
            end_turn();
        } else {
            alert("해당 지역에 쌓인 돈이 없습니다.");
            end_turn();
        }

    }

    function rank_assets() {
        for (var i = 0; i < 4; i++) {
            players[i].assets_rank = 0;
        }
        for (var i = 0; i < 4; i++) {
            for (var j = i + 1; j < 4; j++) {
                if (players[i].assets < players[j].assets)
                    players[i].assets_rank += 1;
            }

        }
        check_line_monopoly();
    }

    function dispose_other_land(player) {
        var input_disposal_other_land = prompt("매각하실 땅을 선택해주세요.\n" +
            "(땅의 번호를 입력하세요.)", NaN);
        var parse_input_disposal_other_land = parseInt(input_disposal_other_land);
        if (parse_input_disposal_other_land == NaN) {
            alert("제대로된 값을 입력해주세요.");
            dispose_other_land(player);
            return;
        } else if (build[parse_input_disposal_other_land].buildings == 4) {
            build[parse_input_disposal_other_land].buildings = 3;
        } else {
            build[parse_input_disposal_other_land].owner = 0;
            build[parse_input_disposal_other_land].buildings = 0;
        }
        alert(build[parse_input_disposal_other_land].name + " 을/를 매각하였습니다.");
        end_turn();
    }

    function check_line_monopoly() {
        var somebody_monopolize_line = false;
        var amount_of_monopolized_ceil = 0;
        var building_number = 0;
        for (var p = 0; p < 4; p++) {
            for (var i = 0; i < 4; i++) {
                for (var j = 1; j < 8; j++) {
                    building_number = j + (7 * i) - 1;
                    if (build[building_number].owner == players[p].id)
                        amount_of_monopolized_ceil++;
                }
            }
            if (amount_of_monopolized_ceil == 7) {
                players[p].line_monopoly = true;
                somebody_monopolize_line = true;
                break;
            }
            amount_of_monopolized_ceil = 0;
        }
        check_possibility_to_end_game(somebody_monopolize_line);
    }

    function end_turn() {
        console.log("턴 종료");
        record_player();
        if (players[player_turn].count_double_dice >= 1) {
            rank_assets();
            return;
        }
        sum_of_turn++;
        player_turn++;
        if (player_turn > 3)
            player_turn = 0;
        while (players[player_turn].gameover) {
            player_turn++;
            if (player_turn > 3)
                player_turn = 0;
        }
        console.log("턴 종료 player : " + player_turn);
        rank_assets();
    }

    function end_player(player) {
        players[player].gameover = true;
        end_turn();
    }

    function check_possibility_to_end_game(somebody_monopolize_line) {
        if (somebody_monopolize_line) {
            for (var i = 0; i < 4; i++) {
                if (players[i].line_monopoly) {
                    players[i].winner = true;
                    break;
                }
            }
        } else if (sum_of_turn > 30) {
            for (var i = 0; i < 4; i++) {
                if (players[i].assets_ranks == 1) {
                    players[i].winner = true;
                    break;
                }

            }
        }
    }