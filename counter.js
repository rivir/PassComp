window.onload = function () {
    PassArray = new Array();
    ButtonProcess("offense-f", "Off 1/3<br>", 0);
    ButtonProcess("offtrans-f", "Trans<br>", 1);
    ButtonProcess("middle-f", "Mid 1/3<br>", 2);
    ButtonProcess("deftrans-f", "Trans<br>", 3);
    ButtonProcess("defense-f", "Def 1/3<br>", 4);
    ButtonProcess("offense-s", "Off 1/3<br>", 5);
    ButtonProcess("offtrans-s", "Trans<br>", 6);
    ButtonProcess("middle-s", "Mid 1/3<br>", 7);
    ButtonProcess("deftrans-s", "Trans<br>", 8);
    ButtonProcess("defense-s", "Def 1/3<br>", 9);
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

    var FullPassArray = [];

    document.getElementById('save').addEventListener("click", function () {
        PassArrayConsole = totalSeconds.toString()+","+JSON.parse(JSON.stringify(PassArray));
        FullPassArray.push(PassArrayConsole)
        console.table(FullPassArray);
    });

    document.getElementById('export').addEventListener("click", function () {
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

}