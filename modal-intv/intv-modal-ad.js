(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84499702-1', 'auto');
ga('send', 'event', 'Pageview', 'access', 'AER_GIG_ONEWORLD');

(function(d, w) {
	function setVideoAd() {
		var contentDiv = d.createElement('div');
		var videoTag = d.createElement('video');

		contentDiv.setAttribute('style', 'border:none; width:100%;height:100%;')

		videoTag.id = 'video-intv-ad';
		// videoTag.setAttribute('controls', true);
		videoTag.setAttribute('src', 'amarrotados.mp4');
		videoTag.setAttribute('type', 'video/mp4');
		videoTag.setAttribute('poster', 'latam-bg.jpg');

		videoTag.setAttribute('style', 'max-width: 968px');

		contentDiv.appendChild(videoTag);

		return contentDiv;
	}

	function setContentModal() {
		var contentModal = d.createElement('div');

		contentModal.classList.add('modal-content');
		contentModal.setAttribute('style', 'margin: 15% auto; max-height: auto;max-width: 968px;');

		// contentModal.appendChild(setCloseButton());
		contentModal.appendChild(setVideoAd());

		return contentModal;
	}

	function setOverlayModal() {
		var overlayModal = d.createElement('div');

		overlayModal.id = 'overlay-intv';
		overlayModal.classList.add('modal');
		overlayModal.setAttribute('style', 'display: block; position: fixed; z-index: 1; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.4);');

		overlayModal.appendChild(setContentModal());

		return overlayModal;
	}

	function buildModal() {
		return setOverlayModal();
	}

	function redirectTo() {
		w.location = 'http://intvbrasil.com.br';
	}

	function closeModal() {
		d.getElementById('overlay-intv').style.display = "none";
		ga('send', 'event', 'Video', 'VideoCompletion', 'AER_GIG_ONEWORLD');
	}

	function clickToPlay() {
		var video = d.getElementById('video-intv-ad');

		video.play();
		ga('send', 'event', 'Video', 'ClickPlay', 'AER_GIG_ONEWORLD');
	}

	d.body.appendChild(buildModal());
	d.getElementById('video-intv-ad').addEventListener('ended', closeModal, false);
	d.getElementById('video-intv-ad').addEventListener('click', clickToPlay, false);
})(document, window);
