(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-84499702-1', 'auto');
ga('send', 'event', 'Pageview', 'PageAccess', '${spot}');

(function(d, w) {
	function setCss() {
		var link  = d.createElement('link');

		link.rel  = 'stylesheet';
		link.type = 'text/css';
		link.href = 'https://s3-sa-east-1.amazonaws.com/static-intv/public/banner/intv-modal-ad-bus.css';
		link.media = 'all';

		return link;
	}

	function setImageAd() {
		var imageAd = d.createElement('img');
		var linkAd = d.createElement('a');

		imageAd.id = 'imageAd';
		imageAd.setAttribute('src', 'https://s3-sa-east-1.amazonaws.com/static-intv/public/banner/banner-mobile-600x640.jpg');

		linkAd.setAttribute('href', 'http://banco.bradesco/html/classic/promocoes/poupatroco/?utm_source=Campanha_Interna&utm_medium=Banner&utm_content=Home_PF_Poupa_Troco&utm_campaign=Home_PF_Poupa_Troco-Banner-Campanha_Interna');
		linkAd.classList.add('linkAd');
		linkAd.appendChild(imageAd);

		return linkAd;
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
		ga('send', 'event', 'Banner', 'Impression', '${spot}');
		return setOverlayModal();
	}

	function changeBG() {
		d.body.classList.add('bradesco-bg');
	}

	function closeModal() {
		d.getElementById('overlay-intv').style.display = "none";
	}

	function clickAd() {
		ga('send', 'event', 'Banner', 'Click', '${spot}');
	}

	function chronoModalClose() {
		closeModal = w.setTimeout(closeModal, 5000);
	}

	function _init() {
		d.head.appendChild(setCss());
		changeBG();

		d.body.appendChild(buildModal());
		d.getElementsByClassName('linkAd')[0].addEventListener('click', clickAd, false);
		chronoModalClose();
	}

	_init();
})(document, window);
