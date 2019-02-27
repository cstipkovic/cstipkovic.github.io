// GA Script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','https://www.google-analytics.com/analytics.js','WiFiAdsGA');

// GA Setup for InteliFi
WiFiAdsGA('create', 'UA-84499702-1', 'auto');
WiFiAdsGA('send', 'event', 'PageView', 'PageView', '${spot}');


// Just open anonymous function
(function() {

/**
 * @name LinkCSS
 * @class
 *
 * @param {string} urlCSS url to CSS
 *
 * @description create the link/css element
 */
function LinkCSS(urlCSS) {
    this.link = DOMElement('link');

    this.link.rel = 'stylesheet';
    this.link.type = 'text/css';
    this.link.href = urlCSS;
    this.link.media = 'all';
}

/**
 * @name render
 * @method
 *
 * @param {HTMLElement} parent dom element to append to
 *
 * @description append dom element to parent
 */
LinkCSS.prototype.render = function(parent) {
    parent.appendChild(this.link);
}

// Const of Trackers
var PAGE_VIEW = 'PAGE_VIEW';
var IMPRESSION_CAMPAIGN = 'IMPRESSION_CAMPAIGN';
var CLICK_CAMPAIGN = 'CLICK_CAMPAIGN';
var IMPRESSION_PRE_ROLL = 'IMPRESSION_PRE_ROLL';
var CLICK_PRE_ROLL = 'CLICK_PRE_ROLL';
var VIDEO_STARTED = 'VIDEO_STARTED';
var PER_PLAYED = '_PER_PLAYED';
var CLICK_SKIP_VIDEO = 'CLICK_SKIP_VIDEO';
var VIDEO_ENDED = 'VIDEO_ENDED';
var CLICK_YES = 'CLICK_YES';
var CLICK_NO = 'CLICK_NO';
var REDIRECT_APPLE = 'REDIRECT_APPLE';
var REDIRECT_GOOGLE = 'REDIRECT_GOOGLE';

/**
* @name Tracker
* @class
*
* @description Send InteliFi Trackers
*/
var Tracker = function () {
    // TODO:
  var urlTracker = 'https://ads.inteli.fi/adtrack';
  var cidTracker = '${cid}';
  var hidTracker = '${hid}';
  var timestampTracker = '${ad_tracker_timestamp}';
  var impressionId = null;
  var deviceType = new Device();

  /**
  * @name buildURI
  * @private
  *
  * @param {string} eventTracker
  * @param {number} impressionId
  *
  * @returns {string} complete URL to send InteliFi tracker
  */
  var buildURI = function (eventTracker, impressionId) {
    return urlTracker +
    '?cid=' + cidTracker +
    '&et=' + eventTracker +
    '&hid=' + hidTracker +
    '&time=' + timestampTracker +
    '&iid=' + impressionId +
    '&dt=' + deviceType.getDescription();
  };

  // TODO: implementar o log de erro de xhr
  var logError = function () {

  };

  return {
    /**
    * @name sendEvent
    * @method
    *
    * @param {string} eventTraker Event description to send to Tracker URL
    * @param {string} thirdPartyTrackers Third party tracker URL
    * @param {function} callBack
    *
    * @description Create an AJAX object and send a POST to InteliFi tracker
    */
    sendEvent: function (eventTracker, thirdPartyTrackers, pixelTrackers, callback) {
      var xhr = new XMLHttpRequest();
      var regexHttp = RegExp('(http|https)://');

      if (pixelTrackers && regexHttp.test(pixelTrackers)) {
        this.printPixel(pixelTrackers);
      }

      if (thirdPartyTrackers && regexHttp.test(thirdPartyTrackers)) {
        var xhrThirdParty = new XMLHttpRequest();

        xhrThirdParty.onerror = this.errorTracker(eventTracker);

        xhrThirdParty.open('POST', thirdPartyTrackers, true);
        xhrThirdParty.send();
      }

      xhr.onerror = this.errorTracker(eventTracker);
      xhr.onload = callback || null;

      xhr.open('POST', buildURI(eventTracker), true);
      xhr.send(); // TODO: Implementar o envio de um JSON para o Tracker
    },

    /**
     * @name errorTracker
     * @method
     *
     * @param {string} eventTracker
     *
     * @description
     */
    errorTracker: function (eventTracker) {
        var xhr = new XMLHttpRequest();

        xhr.open('POST', buildURI(eventTracker), true);
        xhr.send();
    },

    /**
    * @name printPixel
    * @method
    *
    * @param {string} urlPixelTracker URL for Pixel Tracker
    *
    * @description Insert an Image (Pixel Tracker) on HTML
    */
    printPixel: function (urlPixelTracker) {
      // TODO: Colocar o placeholder para o link do Tracker do Pixel
      var img = new Image(1, 1);

      img.src = urlPixelTracker;
      document.body.appendChild(img);
    }
  };
}();

var DOMElement = (function () {
  /**
   * @description Add css class to element
   *
   * @param  {HTMLElement} element
   * @param  {string} elementClass
   *
   * @returns {object} element with or without class
   */
  var setAttribute = function (element, elementClass) {
    var Namespace = 'wifi-ads';

    if (elementClass) {
      element.className = Namespace + elementClass;
    }

    return element;
  };

  /**
   * @param  {string} element
   * @param  {string} elementClass
   *
   * @returns {object} element with or without class
   */
  return function (element, elementClass) {
    var el = document.createElement(element);

    return setAttribute(el, elementClass);
  };
})();

// Const for plataforms and OS
var DEVICE_DESKTOP = 'DESKTOP';
var DEVICE_MOBILE = 'MOBILE';
var PLATAFORM_IOS = 'IOS';
var PLATAFORM_ANDROID = 'ANDROID';

/**
 * @name Device
 * @class
 *
 * @description informe the type of device accessing template
 */
function Device() {
    this.isDesktop = false;
    this.isAndroid = false;
}

/**
 * @method getDescription
 *
 * @return {string} device type and plataform informations
 */
Device.prototype.getDescription = function () {
    var description = null;

    if (this.getType() === DEVICE_MOBILE) {
        description = this.getType() + '|' + this.getMobilePlatform();
    } else {
        description = this.getType();
    }

    return description;
}

/**
 * @method getType
 *
 * @returns {string} plataform type
 */
Device.prototype.getType = function () {
    var regexDesktop = /(android|iphone)/i;
    var type = regexDesktop.test(navigator.userAgent.toLowerCase());

    if (type === true) {
        return DEVICE_MOBILE;
    }

    return DEVICE_DESKTOP;
};

/**
 * @method getMobilePlatform
 *
 * @returns {string} mobile plataform type
 */
Device.prototype.getMobilePlatform = function () {
    var ua = navigator.userAgent.toLowerCase();
    var type = ua.indexOf("android") > -1;

    if (type === true) {
        return PLATAFORM_ANDROID;
    }

    return PLATAFORM_IOS;
};


/**
 * l10n
 * @description Function with localization texts
 *
 * @returns {function}
 */
function l10n() {
    var l10n = {
        'en': {
            'SponsoredBy': 'WiFi Sponsored by:',
            'WatchConnect': 'Watch and Connect',
            'SecondsConnect': ' seconds to connect',
            'SecondConnect': ' second to connect',
            'ConnectLearnMore': 'Connect and Learn More',
            'SkipVideo': 'Skip Video',
            'Loading': 'Loading...',
            'NextYes': 'Yes',
            'NextNo': 'No'
        },
        'pt': {
            'SponsoredBy': 'WiFi Patrocinado por:',
            'WatchConnect': 'Veja e Conecte-se',
            'SecondsConnect': ' segundos para conectar',
            'SecondConnect': ' segundo para conectar',
            'ConnectLearnMore': 'Conecte-se e Saiba Mais',
            'SkipVideo': 'Pular o Video',
            'Loading': 'Carregando...',
            'NextYes': 'Sim',
            'NextNo': 'Não'
        }
    };

    var language = navigator.language;

    switch (language) {
        case 'pt-BR':
            return l10n.pt;

        default:
            return l10n.en;
    }
}


var CustomElement = {
    /**
     * @description set the background image and attributes to modal
     *
     * @param  {HTMLElement} modalContent modal HTML element
     * @param  {string} bgModalUrl url to background image
     */
    addModalBackground: function (modalContent, bgModalUrl) {
        modalContent.style.backgroundImage = 'url(' + bgModalUrl + ')';
        modalContent.style.backgroundPosition = 'center center';
        modalContent.style.backgroundRepeat = 'no-repeat';
        modalContent.style.backgroundAttachment = 'fixed';
        modalContent.style.backgroundSize = (function() {
            var offsetModalContent = document.querySelector('.wifi-ads__modal-content');

            return (offsetModalContent.offsetWidth + 'px ' + offsetModalContent.offsetHeight + 'px');
        })();
    },

  // TODO: Colocar as chamadas de placeholder para os parametros de CSS
    addCustomCSS: function (title) {
        // title.style
        // .wifi - ads__title {
        // color: #223e70 !important;
    }
};

/**
 * @class
 *
 * @description Create a div container object
 */
function Container() {
  this.element = DOMElement('div', '__container');
}

/**
 * @method
 * @param {HTMLElement} parent DOM element to append to
 *
 * @description append DOM element to parent
 */
Container.prototype.render = function(parent) {
  parent.appendChild(this.element);
};

/**
 * @name Title
 * @class
 *
 * @description Represents the title of a campaign.
 */
function Title() {
  this.titleContent = DOMElement('div', '__title-content');
  var title = DOMElement('h1', '__title');

  title.innerText = l10n().SponsoredBy;

  this.titleContent.appendChild(title);
}

/**
 * @name render
 * @method
 *
 * @param {HTMLElement} parent DOM element to append in
 *
 * @description append DOM element to parent
 */
Title.prototype.render = function(parent) {
  parent.appendChild(this.titleContent);
};

/**
 * @class
 * @param {string} urlCampaign url to banner campaign image
 *
 * @description Create a image campaign element
 */
function Campaign(urlCampaign) {
  this.element = DOMElement('div', '__ad-content');
  this.bannerAd = DOMElement('img', '__banner-ad');

  this.bannerAd.setAttribute('src', urlCampaign);
  this.element.appendChild(this.bannerAd);
}

/**
 * @method
 * @param {HTMLElement} parent dom element to append to
 *
 * @description append dom elemento to parent
 */
Campaign.prototype.render = function (parent) {
    parent.appendChild(this.element);
};

/**
 * @name
 * @class Navigation
 *
 * @param {string} buttonText text to include on button
 * @param {string} urlRedirect url to redirect user
 *
 * @description Create navigation element
 */
function Navigation(buttonText, urlRedirect) {
  this.element = DOMElement('div', '__navigate-content');
  this.redirectButton = DOMElement('button', '__redirect custom');
  this.urlRedirect = urlRedirect || null;

  this.disable();
  this.redirectButton.innerHTML = buttonText;

  this.element.appendChild(this.redirectButton);

  this.redirectTo = this.redirectTo.bind(this);
}

/**
 * @name render
 * @method
 *
 * @param {HTMLElement} parent DOM element to append in
 *
 * @description append DOM element to parent
 */
Navigation.prototype.render = function (parent) {
  parent.appendChild(this.element);
};

/**
 * @name enable
 * @method
 *
 * @description enable redirect button
 */
Navigation.prototype.enable = function () {
  this.redirectButton.removeAttribute('disabled');
};

/**
 * @name disable
 * @method
 *
 * @description disable redirect button
 */
Navigation.prototype.disable = function () {
  this.redirectButton.setAttribute('disabled', true);
};

/**
 * @name addRedirect
 * @method
 *
 * @description adds redirect event listener once for navigation button
 */
Navigation.prototype.addRedirect = function () {
  this.redirectButton.addEventListener('click', this.redirectTo, {
    once: true
  });
};

/**
 * @name redirectTo
 * @method
 *
 * @param {Event} event event click of caller
 *
 * @description redirect user to campaign URL
 */
Navigation.prototype.redirectTo = function (event) {
  event.preventDefault();

  this.disable();
  Tracker.sendEvent(CLICK_CAMPAIGN, thirdPartyTrackers.click_campaign, pixelTrackers.click_campaign, function () {
    WiFiAdsDoRedirect(this.urlRedirect);
  }.bind(this));
};

/**
* @description redirect user to campaign URL
*
* @param  {Event} event event click of caller
*/
Navigation.prototype.redirectTo = function (event) {
    event.preventDefault();

    this.disable();
    Tracker.sendEvent(
        CLICK_CAMPAIGN,
        thirdPartyTrackers.click_campaign,
        pixelTrackers.click_campaign,
        function () {
            WiFiAdsDoRedirect(this.redirectUrl);
        }.bind(this));
}

/**
* Delay redirect of campaign and show counter on button
* @param {number} seconds number of seconds
* @param {boolean} closeModal whether to close the modal or not
* @param {function} clearCallback function to clear the dom if modal will close
*/
Navigation.prototype.delayedRedirect = function (seconds, closeModal, clearCallback) {
    var secondsLeft = seconds;
    var interval = setInterval(function () {
        if (secondsLeft === 1) {
            this.enable();
            clearInterval(interval);
            if (closeModal) {
                clearCallback();
            } else {
                this.addRedirect();
            }
        } else {
            secondsLeft--;
            var secondsString =
            secondsLeft > 1 ?
            l10n().SecondsConnect :
            l10n().SecondConnect;
            this.redirectButton.innerHTML = secondsLeft + secondsString;
        }
    }.bind(this), 1000);
};

// TODO: Arrumar a posição para essa função
Navigation.prototype.setHiddenRedirectTo = function (campaignUrlRedirect) {
    var inputRedirectUrl = DOMElement('input', '');

    inputRedirectUrl.setAttribute('type', 'hidden');
    inputRedirectUrl.setAttribute('id', 'intv-url-redirect');
    inputRedirectUrl.setAttribute('value', campaignUrlRedirect);

    document.body.appendChild(inputRedirectUrl);
};

/**
 * @class
 *
 * @param {string} bannerUrl url to banner campaign image
 * @param {string} redirectUrl url to redirect user
 * @param {string} [navigationType] string with type of Navigation
 * @param {string} [bgModalUrl] url to background image
 * @param {string} [fontColor] top title text color
 * @param {bool} [closeModal] boolean to whether to automatically close modal or not
 *
 * @description Create the Banner Campaign
 */
function BannerCampaign(bannerUrl, redirectUrl, bgModalUrl, navigationType, fontColor, closeModal) {
    this.closeModal = closeModal;
    this.container = new Container();
    this.overlay = DOMElement('div', '__overlay');
    this.modalContent = DOMElement('div', '__modal-content');

    this.title = new Title();
    this.title.render(this.modalContent);

    this.campaign = new Campaign(bannerUrl);
    this.campaign.render(this.modalContent);

    if (navigationType) {
        this.navigation = new NavigationAppInstall(l10n().ConnectLearnMore, redirectUrl);
    } else {
        this.navigation = new Navigation(l10n().ConnectLearnMore, redirectUrl);
    }
    this.navigation.render(this.modalContent);

    this.overlay.appendChild(this.modalContent);
    this.container.element.appendChild(this.overlay);

    if (bgModalUrl) {
        this.bgModalUrl = bgModalUrl;
    }

    if (fontColor) {
        this.title.titleContent.style.color = fontColor;
    }

    this.clear = this.clear.bind(this);
}

/**
 * @method
 *
 * @param  {HTMLElement} parent dom element to append in
 *
 * @description append dom element to parent
 */
BannerCampaign.prototype.render = function (parent) {
    parent.appendChild(this.container.element);
    this.handleLoad();
};

/**
 * @method
 *
 * @description Clears campaign from DOM
 */
BannerCampaign.prototype.clear = function () {
    this.container.element.remove();
};

/**
 * @method
 *
 * @description handle image load on the page
 */
BannerCampaign.prototype.handleLoad = function () {
    this.campaign.bannerAd.addEventListener('load', function () {
        CustomElement.addModalBackground(this.modalContent, this.bgModalUrl);
        Tracker.sendEvent(
            IMPRESSION_CAMPAIGN,
            thirdPartyTrackers.impression_campaign,
            pixelTrackers.impression_campaign,
            function () {
                if (!this.closeModal) {
                    this.navigation.redirectButton.addEventListener('click', this.navigation.redirectTo, {
                        once: true
                    });
                    this.navigation.enable();
                }
            }.bind(this)
        );

        if (this.closeModal) {
            this.navigation.delayedRedirect(5, this.closeModal, this.clear);
            this.navigation.setHiddenRedirectTo(urlRedirectCampaign !== undefined ? urlRedirectCampaign : urlRedirect);
        }
    }.bind(this), {
        once: true
    });
};


var urlCSS = 'https://s3-sa-east-1.amazonaws.com/static-intv/public/css/v3/wifi-ads--banner.css';

// Creatives
var bgModalUrl = '${url_bg_mobile}';
var bannerCampaignUrl = '${url_banner_campaign_mobile}';
var urlRedirectCampaign = '${tracking_redirect_url}';

// Links test
var bgModalUrl = '';
var bannerCampaignUrl = 'https://d26ykw0gs9fv5u.cloudfront.net/public/banner/ministerioSaude/2018/12/aids/campaign.jpg';
var urlRedirectCampaign = 'http://intvbrasil.com.br';

var fontColor = '#165598';

// Append InteliFi CSS in the page
new LinkCSS(urlCSS).render(document.head);

var thirdPartyTrackers = {
    'page_view': '',
    'impression_campaign': '',
    'click_campaign': ''
};

var pixelTrackers = {
    'page_view': '',
    'impression_campaign': '${impression_tracker}',
    'click_campaign': ''
};

// Send PAGE_VIEW tracker
// Callback render Banner Campaign to body
Tracker.sendEvent(
    PAGE_VIEW,
    thirdPartyTrackers.page_view,
    pixelTrackers.page_view,
    function () {
    new BannerCampaign(
        bannerCampaignUrl,
        urlRedirectCampaign,
        bgModalUrl,
        false,
        fontColor,
        true
    ).render(document.body);
});

})();
