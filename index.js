class Video {
  audio = false;
  video = true;
  stream = null;
  videoElement = document.getElementById("video");
  disableBgColor = "#d93025";
  switchVideo = document.getElementById("switchVideo");
  switchAudio = document.getElementById("switchAudio");

  initiate() {
    switchVideo.addEventListener("click", () => {
      this.videoClickHandler();
    });
    switchAudio.addEventListener("click", () => {
      this.audioClickHandler();
    });
    this.setVideo();
  }

  setAudioVideoIconStatus() {
    if (!this.audio) {
      switchAudio.style.background = this.disableBgColor;
    } else {
      switchAudio.style.background = "transparent";
    }

    if (!this.video) {
      switchVideo.style.background = this.disableBgColor;
    } else {
      switchVideo.style.background = "transparent";
    }
  }

  audioClickHandler() {
    this.audio = !this.audio;
    this.setVideo();
  }

  videoClickHandler() {
    this.video = !this.video;
    this.setVideo();
  }

  async setVideo() {
    this.setAudioVideoIconStatus();
    const audio = this.audio;
    const video = this.video
      ? {
          width: { ideal: 740 },
          height: { ideal: 417 },
        }
      : false;
    if (!audio && !video) {
      this.stream = null;
    } else {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio,
        video,
      });
    }
    this.videoElement.srcObject = this.stream;
  }

  toggleAudio() {}
}

new Video().initiate();

// window.addEventListener("DOMContentLoaded", () => {
//   new Video().startVideo();
// });
