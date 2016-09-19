(function(d) {
	function setCloseButton() {
		var closeButton = d.createElement('span');

		closeButton.classList.add('close');
		closeButton.setAttribute('style', 'color: #aaa; float: right; font-size: 28px; font-weight: bold;');
		closeButton.innerHTML = 'x';

		return closeButton;
	}

	function setVideoAd() {
		var linkDestination = d.createElement('a');
		var videoTag = d.createElement('video');
		var videoSource = d.createElement('source');

		linkDestination.setAttribute('href', 'http://intvbrasil.com.br');

		videoTag.setAttribute('autoplay', true);

		videoSource.setAttribute('src', 'http://www.w3schools.com/tags/movie.mp4');
		videoSource.setAttribute('type', 'video/mp4');

		videoTag.appendChild(videoSource);

		linkDestination.appendChild(videoTag);

		return linkDestination;
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

	d.body.appendChild(buildModal());
})(document);
