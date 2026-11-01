let audio = document.getElementById("audio");
let playBtn = document.getElementById("playBtn");
let progress = document.getElementById("progress");
let currentTime = document.getElementById("currentTime");
let duration = document.getElementById("duration");
let volume = document.getElementById("volume");

function playPause() {
    if (audio.paused) {
        audio.play()
            .then(function () {
                playBtn.textContent = "⏸";
            })
            .catch(function (error) {
                console.log(error);
                alert("Song could not play. Check the browser console.");
            });
    } else {
        audio.pause();
        playBtn.textContent = "▶";
    }
}

function nextSong() {
    audio.currentTime = 0;
    audio.play();
    playBtn.textContent = "⏸";
}

function previousSong() {
    audio.currentTime = 0;
    audio.play();
    playBtn.textContent = "⏸";
}

audio.addEventListener("loadedmetadata", function () {
    duration.textContent = formatTime(audio.duration);
});

audio.addEventListener("timeupdate", function () {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
        progress.value = (audio.currentTime / audio.duration) * 100;
        currentTime.textContent = formatTime(audio.currentTime);
    }
});

progress.addEventListener("input", function () {
    if (Number.isFinite(audio.duration) && audio.duration > 0) {
        audio.currentTime = (progress.value / 100) * audio.duration;
    }
});

volume.addEventListener("input", function () {
    audio.volume = Number(volume.value);
});

function formatTime(seconds) {
    let minutes = Math.floor(seconds / 60);
    let secs = Math.floor(seconds % 60);
    return minutes + ":" + (secs < 10 ? "0" : "") + secs;
}

audio.addEventListener("ended", function () {
    playBtn.textContent = "▶";
    progress.value = 0;
});
