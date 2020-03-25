(async () => {
  const videos = Array.from(document.querySelectorAll('video'))
    .filter(video => video.readyState !== 0);

  if (videos.length === 0)
    return;

  const playingVideos = videos.filter(x => !x.paused);

  let video;
  if(playingVideos.length !== 0) {
    video = playingVideos[0]
  } else {
    video = videos[0]
  }

  if(!video.hasAttribute('ForcePIP')) {
    video.setAttribute('ForcePIP', "1");
    await video.requestPictureInPicture();
    video.addEventListener('leavepictureinpicture', () => {
      video.removeAttribute('ForcePIP')
    })
  }

})();