
	var ua = window.navigator.userAgent.toLowerCase();
	window.platform = {
    isiPad: ua.match(/ipad/i) !== null,
    isiPhone: ua.match(/iphone/i) !== null,
    isAndroid: ua.match(/android/i) !== null,
    isBustedAndroid: ua.match(/android 2\.[12]/) !== null,
    isIE: window.navigator.appName.indexOf("Microsoft") !== -1,
    isIE8: ua.match(/msie 8/) !== null,
    isChrome: ua.match(/Chrome/gi) !== null,
    isFirefox: ua.match(/firefox/gi) !== null,
    isWebkit: ua.match(/webkit/gi) !== null,
    isGecko: ua.match(/gecko/gi) !== null,
    isOpera: ua.match(/opera/gi) !== null,
    hasTouch: ('ontouchstart' in window),
    supportsSvg: !!document.createElementNS &&
        !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
	};
	platform.isMobile = navigator.userAgent.match(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile/i)  && navigator.userAgent.match(/Mobile/i) !== null;
	platform.isTablet = platform.isiPad;
	platform.isDesktop = !(platform.isMobile || platform.isTablet);
  // make components more sensible
  // expose jquery
  
  (function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }
    if (!window.requestAnimationFrame) window.requestAnimationFrame = function(callback, element) {
        var currTime = new Date().getTime();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = window.setTimeout(function() {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
    }
})();


