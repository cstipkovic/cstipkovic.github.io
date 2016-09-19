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
		videoTag.setAttribute('poster', 'video-cover.jpg');

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

	function clickToPlay() {
		var video = d.getElementById('video-intv-ad');

		video.play();
	}

	d.body.appendChild(buildModal());
	d.getElementById('video-intv-ad').addEventListener('ended', redirectTo, false);
	d.getElementById('video-intv-ad').addEventListener('click', clickToPlay, false);
})(document, window);
