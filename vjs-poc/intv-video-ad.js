(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','intvWifiAdsGA');

(function(d, w, j) {

	function setCss() {
		var link = d.createElement('link');

		link.rel = 'stylesheet';
		link.type = 'text/css';
		//link.href = 'https://d26ykw0gs9fv5u.cloudfront.net/public/css/intv-video-ad.css';
		link.href = 'intv-video-ad.css';
		link.media = 'all';

		return link;
	}

  function setCssVJS() {
    var linkVJS = d.createElement('link');

    linkVJS.rel = 'stylesheet';
    linkVJS.type = 'text/css';
    linkVJS.href = 'http://vjs.zencdn.net/5.8.8/video-js.css';
    linkVJS.media = 'all';

    return linkVJS;
  }

  function setVJS() {
    var scriptVJS = d.createElement('script');

    scriptVJS.setAttribute('src', 'http://vjs.zencdn.net/5.11/video.min.js');

    return scriptVJS;
  }

  function setVJSPlugins(url) {
    var vjsPlugin = d.createElement('script');

    vjsPlugin.setAttribute('src', url);

    return vjsPlugin;
  }

  function setVJSCssPlugin(url) {
    var vjsCssPlugin = d.createElement('link');

    vjsCssPlugin.rel = 'stylesheet';
    vjsCssPlugin.type = 'text/css';
    vjsCssPlugin.href = url;
    vjsCssPlugin.media = 'all';

    return vjsCssPlugin;
  }

	function setVideoAd() {
		var videoTag = d.createElement('video');
		var videoSourceMp4 = d.createElement('source');
		// var urlPreroll = '${url_preroll}';
		var urlPreroll = 'https://s3-sa-east-1.amazonaws.com/static-intv/public/banner/intv/banner-intvwifiads.jpg';
		var urlPortrait = 'amarrotados.mp4';

		videoTag.id = 'video-intv-ad';
		videoTag.classList.add('video-js');
		if (urlPreroll !== '') videoTag.setAttribute('poster', urlPreroll);
		if (urlPortrait !== '') videoTag.setAttribute('src', urlPortrait);
		videoTag.setAttribute('type', 'video/mp4');

		return videoTag;
	}

	function setContentModal() {
		var contentModal = d.createElement('div');

		contentModal.classList.add('modal-content');
		contentModal.appendChild(setVideoAd());

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

	function closeVideo() {
		intvWifiAdsGA('send', 'event', 'Video', 'VideoCompletion', '${spot}');

		var modalContent = d.getElementsByClassName('modal-content')[0];
		var videoIntv = d.getElementById('video-intv-ad');

		videoIntv.remove();
		setPostRoll(modalContent);
		videoIntv.webkitExitFullScreen();
	}

	function clickToPlay() {
		d.getElementById('video-intv-ad').removeEventListener('click', clickToPlay, false);
    d.getElementById('video-intv-ad').removeEventListener('touchstart', clickToPlay, false);

		intvWifiAdsGA('send', 'event', 'Video', 'ClickPlay', '${spot}');
    videojs('video-intv-ad').play();
	}

	function playProgress() {
		var elemVideo = d.getElementById('video-intv-ad');
		var progressPercent = Math.ceil((elemVideo.currentTime / elemVideo.duration) * 100);

		if ((progressPercent >= 1) && (progressPercent <= 25)) {
			intvWifiAdsGA('send', 'event', 'CloseWindow', '25%', '${spot}');
		}

		if (progressPercent >= 26 && progressPercent <= 50) {
			intvWifiAdsGA('send', 'event', 'CloseWindow', '50%', '${spot}');
		}

		if (progressPercent >= 51 && progressPercent <= 75) {
			intvWifiAdsGA('send', 'event', 'CloseWindow', '75%', '${spot}');
		}
	}

    function byPassNomadixAuth(event, urlOS) {
        event.preventDefault();

        var arrParams = [
            {
                name: 'username',
                value: $('#username').val()
            },
            {
                name: 'os',
                value: urlOS
            },
            {
                name: 'email',
                value: $('#email').val()
            }
        ];

        params = $.param(arrParams);
       	doNomadixAuth(params);
    }

  function doRedirect(event) {
		intvWifiAdsGA('send', 'event', 'Video', 'VideoCompletion', '${spot}');

    var urlRedirect = '${url_click}';

    //byPassNomadixAuth(event, urlRedirect);
	}

  function loadPixelCount(body) {
      var urlTracking = '${url_tracking}';

      if (urlTracking && urlTracking !== '') {
          var pixelCount = d.createElement('img');

          pixelCount.id = 'intv-imagePixelCount';
          pixelCount.setAttribute('src', urlTracking);
          body.appendChild(pixelCount);
      }
  }

	function _init() {
		intvWifiAdsGA('create', 'UA-268918-2', 'auto');
		intvWifiAdsGA('send', 'event', 'Pageview', 'access', '${spot}');

    d.head.appendChild(setCssVJS());
    d.head.appendChild(setVJSCssPlugin('https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/4.1.6/videojs.ads.min.css'));
		d.head.appendChild(setCss());
    d.body.appendChild(setVJS());

		if ('onpagehide' in w) {
        w.onpagehide = playProgress;
    } else {
        w.onbeforeunload = playProgress;
    }

    d.body.appendChild(buildModal());
    // d.body.appendChild(setVJSPlugins('https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/4.1.6/videojs.ads.min.js'));

    loadPixelCount(d.body);
    // d.getElementById('video-intv-ad').addEventListener('webkitendfullscreen', playProgress, false);
    d.getElementById('video-intv-ad').addEventListener('click', clickToPlay, false);
    d.getElementById('video-intv-ad').addEventListener('touchstart', clickToPlay, false);
    d.getElementById('video-intv-ad').addEventListener('ended', doRedirect, false);
	}

	_init();
})(document, window, jQuery);
