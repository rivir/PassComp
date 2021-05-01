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

var playbutton = document.getElementById("play");

document.getElementById('play').addEventListener("click", function () {
    if (pause) {
        player.playVideo();
    }
    else {
        player.pauseVideo();
    }
});