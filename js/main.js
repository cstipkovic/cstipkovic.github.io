(function(d, w) {
	function setCurrentlyAge() {
		var date = new Date();
		var elemCurrentAge = d.getElementsByClassName('currentlyAge')[0];

		elemCurrentAge.innerHTML = (date.getFullYear() - 1984);
	}

	function setLanguageOnLoad(browserLanguage) {
		if (browserLanguage === 'pt-BR') {
			$('#portuguese').show();
		} else {
			$('#english').show();
		}
	}

	function changeLanguage() {
		$('#menu a').click(function() {
			$('#menu a').removeClass('currentlyLanguage');
			$(this).addClass('currentlyLanguage');

			if ($(this).attr('data-lang') === 'pt-BR') {
				$('#english').hide();
				$('#portuguese').show();
			} else {
				$('#portuguese').hide();
				$('#english').show();
			}
		});
	}

	function linkMozillaReps() {
		ga('send', 'event', 'LinkClick', 'link-mozilla-reps', 'cs_github_io');
	}

	function _init() {
		setCurrentlyAge();
		setLanguageOnLoad();
		changeLanguage();

		d.getElementsByClassName('link-mozilla-reps')[0].addEventListener('click', linkMozillaReps, false);
	}

	w.load(_init());
})(document, window);
