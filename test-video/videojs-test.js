(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-268918-2', 'auto');
ga('send', 'pageview', 'PageView', 'Access', 'testeVideo');

(function(d, w) {
  function createVideo() {
  	var elemVideo = d.createElement('video');

  	elemVideo.setAttribute('id', 'video-teste')
  	elemVideo.setAttribute('src', 'http://www.w3schools.com/html/mov_bbb.mp4');
  	elemVideo.setAttribute('type', 'video/mp4');
  	elemVideo.setAttribute('controls', false);

  	d.body.appendChild(elemVideo);
  }

  createVideo();

  function playProgress() {
  	var elemVideo = d.getElementById('video-teste');
    // webkitfullscreenchange
  	var progressPercent = Math.ceil((elemVideo.currentTime / elemVideo.duration) * 100);

  	if ((progressPercent >= 1) && (progressPercent <= 25)) {
      alert(progressPercent);
  	  ga('send', 'event', 'CloseWindow', '25%', 'testeVideo');
  	}

  	if (progressPercent >= 26 && progressPercent <= 50) {
      alert(progressPercent);
  	  ga('send', 'event', 'CloseWindow', '50%', 'testeVideo');
  	}

  	if (progressPercent >= 51 && progressPercent <= 75) {
      alert(progressPercent);
  	  ga('send', 'event', 'CloseWindow', '75%', 'testeVideo');
  	}
  }

  function closeModal() {
    d.getElementById('video-teste').webkitExitFullScreen();
    ga('send', 'event', 'VideoEnded', '100%', 'testeVideo');
  }

  function playVideo() {
	  d.getElementById('video-teste').play();
  }

  if ('onpagehide' in w) {
    w.onpagehide = playProgress;
  } else {
    w.onbeforeunload = playProgress;
  }

  d.getElementById('video-teste').addEventListener('webkitexitfullscreen', playProgress, false);
  d.getElementById('video-teste').addEventListener('ended', closeModal, false);
  d.getElementById('playVideo').addEventListener('click', playVideo, false);
})(document, window);
