(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84499702-1', 'auto');
ga('send', 'event', 'Pageview', 'access', 'AER_GIG_ONEWORLD');

(function(d, w) {
	function setCss() {
		var link  = d.createElement('link');

		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = './intv-modal-ad-bus.css';
		link.media = 'all';

		return link;
	}

	function setImageAd() {
		var imageAd = d.createElement('img');

		imageAd.id = 'imageAd';
		imageAd.setAttribute('src', './banner-teste-bradesco.jpg');

		return imageAd;
	}

	function setContentModal() {
		var contentModal = d.createElement('div');

		contentModal.classList.add('modal-content');
		contentModal.appendChild(setImageAd());

		return contentModal;
	}

	function setOverlayModal() {
		var overlayModal = d.createElement('div');

		overlayModal.id = 'overlay-intv';
		overlayModal.classList.add('modal');

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

	function chronoModalClose() {
		closeModal = w.setTimeout(closeModal, 5000);
	}

	d.head.appendChild(setCss());
	d.body.appendChild(buildModal());
	d.body.appendChild(chronoModalClose());
})(document, window);
