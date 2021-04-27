window.onload = function () {
    var button = document.getElementById("offense-f"),
        count = 0;
    button.onclick = function () {
        count += 1;
        button.innerHTML = "Off 1/3<br>" + count;
    };
    button.oncontextmenu = function () {
        count -= 1;
        button.innerHTML = "Off 1/3<br>" + count;
        return false;
    };

    var button2 = document.getElementById("offtrans-f"),
        count2 = 0;
    button2.onclick = function () {
        count2 += 1;
        button2.innerHTML = "Trans<br>" + count2;
    };
    button2.oncontextmenu = function () {
        count2 -= 1;
        button2.innerHTML = "Trans<br>" + count2;
        return false;
    };

    var button3 = document.getElementById("middle-f"),
        count3 = 0;
    button3.onclick = function () {
        count3 += 1;
        button3.innerHTML = "Mid 1/3<br>" + count3;
    };
    button3.oncontextmenu = function () {
        count3 -= 1;
        button3.innerHTML = "Mid 1/3<br>" + count3;
        return false;
    };

    var button4 = document.getElementById("deftrans-f"),
        count4 = 0;
    button4.onclick = function () {
        count4 += 1;
        button4.innerHTML = "Trans<br>" + count4;
    };
    button4.oncontextmenu = function () {
        count4 -= 1;
        button4.innerHTML = "Trans<br>" + count4;
        return false;
    };

    var button5 = document.getElementById("defense-f"),
        count5 = 0;
    button5.onclick = function () {
        count5 += 1;
        button5.innerHTML = "Def 1/3<br>" + count5;
    };
    button5.oncontextmenu = function () {
        count5 -= 1;
        button5.innerHTML = "Def 1/3<br>" + count5;
        return false;
    };

    var button10 = document.getElementById("offense-s"),
        count10 = 0;
    button10.onclick = function () {
        count10 += 1;
        button10.innerHTML = "Off 1/3<br>" + count10;
    };
    button10.oncontextmenu = function () {
        count10 -= 1;
        button10.innerHTML = "Off 1/3<br>" + count10;
        return false;
    };

    var button12 = document.getElementById("offtrans-s"),
        count12 = 0;
    button12.onclick = function () {
        count12 += 1;
        button12.innerHTML = "Trans<br>" + count12;
    };
    button12.oncontextmenu = function () {
        count12 -= 1;
        button12.innerHTML = "Trans<br>" + count12;
        return false;
    };

    var button13 = document.getElementById("middle-s"),
        count13 = 0;
    button13.onclick = function () {
        count13 += 1;
        button13.innerHTML = "Mid 1/3<br>" + count13;
    };
    button13.oncontextmenu = function () {
        count13 -= 1;
        button13.innerHTML = "Mid 1/3<br>" + count13;
        return false;
    };

    var button14 = document.getElementById("deftrans-s"),
        count14 = 0;
    button14.onclick = function () {
        count14 += 1;
        button14.innerHTML = "Trans<br>" + count14;
    };
    button14.oncontextmenu = function () {
        count14 -= 1;
        button14.innerHTML = "Trans<br>" + count14;
        return false;
    };

    var button15 = document.getElementById("defense-s"),
        count15 = 0;
    button15.onclick = function () {
        count15 += 1;
        button15.innerHTML = "Def 1/3<br>" + count15;
    };
    button15.oncontextmenu = function () {
        count15 -= 1;
        button15.innerHTML = "Def 1/3<br>" + count15;
        return false;
    };


    var button21 = document.getElementById("throw-f"),
        count21 = 0;
    button21.onclick = function () {
        count21 += 1;
        button21.innerHTML = "Throws-<br>" + count21;
    };
    button21.oncontextmenu = function () {
        count21 -= 1;
        button21.innerHTML = "Throws-<br>" + count21;
        return false;
    };

    var button22 = document.getElementById("throw-s"),
        count22 = 0;
    button22.onclick = function () {
        count22 += 1;
        button22.innerHTML = "Throws+<br>" + count22;
    };
    button22.oncontextmenu = function () {
        count22 -= 1;
        button22.innerHTML = "Throws+<br>" + count22;
        return false;
    };

    var button23 = document.getElementById("reset"),
        count23 = 0;
    button23.onclick = function () {
        count23 += 1;
        button23.innerHTML = "Reset<br>" + count23;
    };
    button23.oncontextmenu = function () {
        count23 -= 1;
        button23.innerHTML = "Reset<br>" + count23;
        return false;
    };


    PassArray = new Array();
    //PassArray[37] = 0;
    ButtonProcess("gk-f", "GoalKicks-<br>", 30);
    ButtonProcess("gk-s", "GoalKicks+<br>", 31);
    ButtonProcess("shots-f", "Shots-<br>", 32);
    ButtonProcess("shots-s", "Shots+<br>", 33);
    ButtonProcess("clear-f", "clear<br>", 34);
    ButtonProcess("freekick", "free kicks<br>", 35);
    ButtonProcess("1v1-f", "1v1-<br>", 36);
    ButtonProcess("1v1-s", "1v1+<br>", 37);

    function ButtonProcess(elementname, buttonname, index) {
        var buttonx = document.getElementById(elementname);
        PassArray[index] = (PassArray[index] === undefined) ? 0 : PassArray[index];

        buttonx.onclick = function () {
            PassArray[index] += 1;
            buttonx.innerHTML = buttonname + PassArray[index];
        };
        buttonx.oncontextmenu = function () {
            PassArray[index] -= 1;
            buttonx.innerHTML = buttonname + PassArray[index];
            return false;
        };
    }

    pause=true;
    var minutesLabel = document.getElementById("minutes");
    var secondsLabel = document.getElementById("seconds");
    var totalSeconds = 0;
    setInterval(setTime, 1000);

    function setTime() {
        if (!pause) {
            ++totalSeconds;
            secondsLabel.innerHTML = pad(totalSeconds % 60);
            minutesLabel.innerHTML = pad(parseInt(totalSeconds / 60));
        }
    }

    function pad(val) {
            var valString = val + "";
            if (valString.length < 2) {
                return "0" + valString;
            } else {
                return valString;
            }
    }

    var playbutton = document.getElementById("play");

    document.getElementById('play').addEventListener("click", function () {
        if (pause) {
            playbutton.innerHTML = '<i class="fa fa-pause" style="position: relative;top: -3px;left: -2px;"></i>'
            pause = false;
        }
        else {
            playbutton.innerHTML = '<i class="fa fa-play" style="position: relative;top: -3px;left: -2px;"></i>'
            pause = true;
        }
    });
}