(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-268918-2', 'auto');
ga('send', 'pageview');

(function(d, w) {
  function createVideo() {
    var elemVideo = d.createElement('video');

    elemVideo.setAttribute('id', 'video-teste')
    elemVideo.setAttribute('src', 'http://www.w3schools.com/html/mov_bbb.mp4');
    elemVideo.setAttribute('controls', true);
    elemVideo.setAttribute('class', 'video-js');

    d.body.appendChild(elemVideo);
  }

  createVideo();

  w.addEventListener('onbeforeload', function() {
    var elemVideo = d.getElementById('video-teste');
    var videoPercentProgress = Math.ceil((elemVideo.currentTime / elemVideo.duration) * 100);

    if (videoPercentProgress >== 1 && videoPercentProgress <== 25) {
      ga('send', 'event', 'CloseWindow', 'test-video', '25%');
    }

    if (videoPercentProgress >== 26 && videoPercentProgress <== 50) {
      ga('send', 'event', 'CloseWindow', 'test-video', '50%');
    }
  });

  // d.getElementById('video-teste').addEventListener('timeupdate', function () {
  //   var videoPercentProgress = Math.ceil((this.currentTime / this.duration) * 100);
  //
  //   console.log(videoPercentProgress);
  //
  //   // 25% a 49%
  //   if ((videoPercentProgress >== 25) && (videoPercentProgress <== )) {
  //     console.log('25');
  //   }
  // });
})(document, window);
