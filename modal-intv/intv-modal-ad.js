(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-268918-3', 'auto');
ga('send', 'pageview', 'Access', 'page', 'Campanha One World');

(function(d, w) {
	function setCloseButton() {
		var closeButton = d.createElement('span');

		closeButton.classList.add('close');
		closeButton.setAttribute('style', 'color: #aaa; float: right; font-size: 28px; font-weight: bold;');
		closeButton.innerHTML = 'x';

		return closeButton;
	}

	function setVideoAd() {
		var videoTag = d.createElement('video');

		videoTag.id = 'video-intv-ad';
		// videoTag.setAttribute('controls', true);
		videoTag.setAttribute('src', 'http://www.w3schools.com/tags/movie.mp4');
		videoTag.setAttribute('type', 'video/mp4');
		videoTag.setAttribute('poster', 'poster.png');

		return videoTag;
	}

	function setContentModal() {
		var contentModal = d.createElement('div');

		contentModal.classList.add('modal-content');
		contentModal.setAttribute('style', 'margin: 15% auto; width: 320px;');

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
		ga('send', 'ended', 'Video', 'ended', 'Campanha One World');
	}

	function clickToPlay() {
		var video = d.getElementById('video-intv-ad');

		video.play();
		ga('send', 'click', 'Video', 'play', 'Campanha One World');
	}

	d.body.appendChild(buildModal());
	d.getElementById('video-intv-ad').addEventListener('ended', closeModal, false);
	d.getElementById('video-intv-ad').addEventListener('click', clickToPlay, false);
})(document, window);
