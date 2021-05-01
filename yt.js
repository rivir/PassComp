function labnolIframe(div) {
    var iframe = document.createElement("iframe");
    iframe.setAttribute(
        "src",
        "https://www.youtube.com/embed/" + div.dataset.id + "?autoplay=1&rel=0"
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "1");
    iframe.setAttribute("origin", "https://rivir.github.io");
    iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    );
    div.parentNode.replaceChild(iframe, div);
}

function initYouTubeVideos() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var playerElements = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < playerElements.length; n++) {
        //var videoId = playerElements[n].dataset.id;
        var videoId = urlParams.get('v')
        var div = document.createElement("div");
        div.setAttribute("data-id", videoId);
        var thumbNode = document.createElement("img");
        thumbNode.src = "https://i.ytimg.com/vi/ID/hqdefault.jpg".replace(
            "ID",
            videoId
        );
        div.appendChild(thumbNode);
        var playButton = document.createElement("div");
        playButton.setAttribute("class", "play");
        div.appendChild(playButton);
        div.onclick = function () {
            labnolIframe(this);
        };
        playerElements[n].appendChild(div);
    }
}

document.addEventListener("DOMContentLoaded", initYouTubeVideos);

function callPlayer(func, args) {
    var iframes = document.getElementsByTagName('iframe');
    for (var i = 0; i < iframes.length; ++i) {
        if (iframes[i]) {
            var src = iframes[i].getAttribute('src');
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