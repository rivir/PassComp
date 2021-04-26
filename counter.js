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

    var button24 = document.getElementById("gk-f"),
        count24 = 0;
    button24.onclick = function () {
        count24 += 1;
        button24.innerHTML = "GoalKicks-<br>" + count24;
    };
    button24.oncontextmenu = function () {
        count24 -= 1;
        button24.innerHTML = "GoalKicks-<br>" + count24;
        return false;
    };

    var button25 = document.getElementById("gk-s"),
        count25 = 0;
    button25.onclick = function () {
        count25 += 1;
        button25.innerHTML = "GoalKicks+<br>" + count25;
    };
    button25.oncontextmenu = function () {
        count25 -= 1;
        button25.innerHTML = "GoalKicks+<br>" + count25;
        return false;
    };

    var button26 = document.getElementById("shots-f"),
        count26 = 0;
    button26.onclick = function () {
        count26 += 1;
        button26.innerHTML = "Shots-<br>" + count26;
    };
    button26.oncontextmenu = function () {
        count26 -= 1;
        button26.innerHTML = "Shots-<br>" + count26;
        return false;
    };

    var button27 = document.getElementById("shots-s"),
        count27 = 0;
    button27.onclick = function () {
        count27 += 1;
        button27.innerHTML = "Shots+<br>" + count27;
    };
    button27.oncontextmenu = function () {
        count27 -= 1;
        button27.innerHTML = "Shots+<br>" + count27;
        return false;
    };

    var button34 = document.getElementById("clear-f"),
        count34 = 0;
    button34.onclick = function () {
        count34 += 1;
        button34.innerHTML = "clear<br>" + count34;
    };
    button34.oncontextmenu = function () {
        count34 -= 1;
        button34.innerHTML = "clear<br>" + count34;
        return false;
    };

    var button35 = document.getElementById("freekick"),
        count35 = 0;
    button35.onclick = function () {
        count35 += 1;
        button35.innerHTML = "free kicks<br>" + count35;
    };
    button35.oncontextmenu = function () {
        count35 -= 1;
        button35.innerHTML = "free kicks<br>" + count35;
        return false;
    };

    var button36 = document.getElementById("1v1-f"),
        count36 = 0;
    button36.onclick = function () {
        count36 += 1;
        button36.innerHTML = "1v1-<br>" + count36;
    };
    button36.oncontextmenu = function () {
        count36 -= 1;
        button36.innerHTML = "1v1-<br>" + count36;
        return false;
    };

    var button37 = document.getElementById("1v1-s"),
        count37 = 0;
    button37.onclick = function () {
        count37 += 1;
        button37.innerHTML = "1v1+<br>" + count37;
    };
    button37.oncontextmenu = function () {
        count37 -= 1;
        button37.innerHTML = "1v1+<br>" + count37;
        return false;
    };

    //var pause = true;
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

    document.getElementById('pause').addEventListener('click', function () {
        pause = true;
    });

    document.getElementById('resume').addEventListener('click', function () {
        pause = false;
    });

    document.getElementById('play').addEventListener("click", function () {
        if (!pause) {
            playbutton.innerHTML = '<i class="fa fa-pause"></i>'
            pause = false;
        }
        else {
            playbutton.innerHTML = '<i class="fa fa-play"></i>'
            pause = true;
        }
    });
}