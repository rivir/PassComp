//add Youtube integration
//add timeline sync
//add hotkeys

window.onload = function () {
    PassArray = new Array();
    ButtonProcess("offense-f", "Off 1/3<br>", 0, "q");
    ButtonProcess("offtrans-f", "Trans<br>", 1, "w");
    ButtonProcess("middle-f", "Mid 1/3<br>", 2, "e");
    ButtonProcess("deftrans-f", "Trans<br>", 3, "r");
    ButtonProcess("defense-f", "Def 1/3<br>", 4, "t");
    ButtonProcess("offense-s", "Off 1/3<br>", 5, "a");
    ButtonProcess("offtrans-s", "Trans<br>", 6, "s");
    ButtonProcess("middle-s", "Mid 1/3<br>", 7, "d");
    ButtonProcess("deftrans-s", "Trans<br>", 8, "f");
    ButtonProcess("defense-s", "Def 1/3<br>", 9, "g");
    ButtonProcess("throw-f", "Throws-<br>", 10);
    ButtonProcess("throw-s", "Throws+<br>", 11);
    ButtonProcess("reset", "Reset<br>", 12);
    ButtonProcess("gk-f", "GoalKicks-<br>", 13);
    ButtonProcess("gk-s", "GoalKicks+<br>", 14);
    ButtonProcess("shots-f", "Shots-<br>", 15);
    ButtonProcess("shots-s", "Shots+<br>", 16);
    ButtonProcess("clear-f", "clear<br>", 17);
    ButtonProcess("freekick", "free kicks<br>", 18);
    ButtonProcess("1v1-f", "1v1-<br>", 19);
    ButtonProcess("1v1-s", "1v1+<br>", 20);

    function ButtonProcess(elementname, buttonname, index, keypress) {
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

        document.addEventListener("keyup", function (e) {
            console.log(e);
            if (e.key == keypress) {
                PassArray[index] += 1;
                buttonx.innerHTML = buttonname + PassArray[index];
            }
        });
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
            playbutton.innerHTML = '<i class="fa fa-pause"></i>'
            pause = false;
            callPlayer("playVideo");
        }
        else {
            playbutton.innerHTML = '<i class="fa fa-play"></i>'
            pause = true;
            callPlayer("pauseVideo");
        }
    });

    var FullPassArray = [], csv = '';
    csv = "seconds\tOff 1/3-\tOff Trans-\tMid 1/3-\tDef Trans-\tDef 1/3-\tOff 1/3+\tOff Trans+\tMid 1/3+\tTrans+\tDef 1/3+\tThrows-\tThrows+\tReset\tGoalKicks-\tGoalKicks+\tShots-\tShots+\tclear\tfree kicks\t1v1-\t1v1\n"

    document.getElementById('save').addEventListener("click", function () {
        //PassArrayConsole = totalSeconds.toString()+","+JSON.parse(JSON.stringify(PassArray));
        //FullPassArray.push(PassArrayConsole)
        //console.table(FullPassArray);
        copyToClipboard(PassArray);
    });
    
    function copyToClipboard(array) {
        PassArrayConsole = totalSeconds.toString() + "," + JSON.parse(JSON.stringify(array));
        csv += PassArrayConsole.replace(/,/g, '\t');
        csv += '\n';
        FullPassArray.push(PassArrayConsole)
        console.table(FullPassArray);
        copyTextToClipboard(csv);
    }

    function fallbackCopyTextToClipboard(text) {
        var textArea = document.createElement("textarea");
        textArea.value = text;

        // Avoid scrolling to bottom
        textArea.style.top = "0";
        textArea.style.left = "0";
        textArea.style.position = "fixed";

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            // console.log('Fallback: Copying text command was ' + msg);
        } catch (err) {
            console.error('Fallback: Oops, unable to copy', err);
        }

        document.body.removeChild(textArea);
    }

    function copyTextToClipboard(text) {
        if (!navigator.clipboard) {
            fallbackCopyTextToClipboard(text);
            return;
        }
        navigator.clipboard.writeText(text).then(function () {
           // console.log('Async: Copying to clipboard was successful!');
        }, function (err) {
            console.error('Async: Could not copy text: ', err);
        });
    }

    function callPlayer(func, args) {
        //console.log('CallPlayer func:' + func + " args:" + args);
        var iframes = document.getElementsByTagName('iframe');
        for (var i = 0; i < iframes.length; ++i) {
            if (iframes[i]) {
                var src = iframes[i].getAttribute('src');
                //console.log('CallPlayer src:' + src);
                if (src) {
                    if (src.indexOf('youtube.com/embed') != -1) {
                        iframes[i].contentWindow.postMessage(JSON.stringify({
                            'event': 'command',
                            'func': func,
                            'args': args || []
                        }), "*");
                    }
                }
            }
        }
    }

}