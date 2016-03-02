(function () {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                                   || window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function () { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
}());
//------------------------------------------------------------------------------------
var ua = window.navigator.userAgent.toLowerCase();
platform = {
    isiPad: ua.match(/ipad/i) !== null,
    isiPhone: ua.match(/iphone/i) !== null,
    isAndroid: ua.match(/android/i) !== null,
    isBustedAndroid: ua.match(/android 2\.[12]/) !== null,
    isIE: window.navigator.appName.indexOf("Microsoft") != -1,
    isIE8: ua.match(/msie 8/) !== null,
    isIE9: ua.match(/msie 9/) !== null,
    isChrome: ua.match(/Chrome/gi) !== null,
    isFirefox: ua.match(/firefox/gi) !== null,
    isSafari: ua.indexOf('safari') != -1 && ua.indexOf('chrome') == -1,
    isWebkit: ua.match(/webkit/gi) !== null,
    isGecko: ua.match(/gecko/gi) !== null,
    isOpera: ua.match(/opera/gi) !== null,
    hasTouch: ('ontouchstart' in window),
    supportsSvg: !!document.createElementNS &&
        !!document.createElementNS('http://www.w3.org/2000/svg', 'svg').createSVGRect
}
platform.isMobile = platform.isiPhone || platform.isAndroid;
platform.isTablet = platform.isiPad;
platform.isDesktop = !(platform.isMobile || platform.isTablet);
//------------------------------------------------------------------------------------
require.config({
    baseUrl: '../vendors/',
    waitSeconds: 0,
	paths: {
		'jquery': "jquery/dist/jquery",
        'domReady': 'requirejs-domready/domReady',
        'underscore' :'underscore/underscore-min',
        'backbone' :'backbone/backbone-min'
	},
	shim: {
        
	},
    packages: [{
        name: 'greensock',
        main: '',
        location: '../vendors/greensock/src/uncompressed'
    }]
});

require(['jquery','underscore', 'backbone','main','domReady!'],function ($,Main){
    window.mainFun = new Main();
    mainFun.init();
});