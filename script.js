document.querySelector(".trapeze-icon").playbackRate = 0.35;
const curtainAudio = new Audio("./audio/curtains.mp3");
const loadingVideo = document.querySelector("#loading");
let playCount = 0;

console.log(curtainAudio);

loadingVideo.addEventListener("canplaythrough", function () {
  loadingVideo.play();
});

loadingVideo.addEventListener("ended", function () {
  playCount++;
  console.log(playCount);
  if (playCount < 3) {
    loadingVideo.currentTime = 0;
    loadingVideo.play();
  } else {
    loadingVideo.classList.add("hidden");
    document.querySelector(".curtain").classList.remove("hidden");
    curtainAudio.play();
  }
});

var currentVideo = null;

document.querySelectorAll(".video-button").forEach(function (button, index) {
  button.addEventListener("click", function () {
    var video = document.querySelector("#video" + (index + 1));

    if (currentVideo) {
      currentVideo.pause();
      currentVideo.classList.add("hidden");
    }

    video.load();
    video.play();
    video.classList.remove("hidden");

    currentVideo = video;
  });
});
