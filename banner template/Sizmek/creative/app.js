function trace(){}
var $window = $(window),
    $html = $("html"),
    $body = $('body');
var container = $('.container'),
    ctaHot =$('.mainl0'); 
var layerNames,
    animationData = {},
    animations = {},
    svgs = {},
    seqs = {},
    imageInfos,
    imageNumber = 0,
    eases,
    fps = 36,
    tl = TweenMax;
var ua = window.navigator.userAgent.toLowerCase(),
    hasTouch = ('ontouchstart' in window),
    isS3 = ua.match(/gt\-i9300/i) !== null,
    isS4 = ua.match(/gt\-i9500/i) !== null;

var debug = false;


if (!isS4) $('body').addClass('notS4');
if (isS3) container.addClass('S3');

container.on("click", function(e) {
    // window.open(clickTag);
    EB.clickthrough("Background_Exit");
    // Enabler.exit(Background_Exit);
    tl.killDelayedCallsTo(enableCta);
    enableCta();
    console.log('========click Background_Exit=======');
    //animations['main'].toEnd();
    //animations['cta'].toEnd();
});
ctaHot.on("click", function(e) {
    // window.open(clickTag1);
    // Enabler.exit(CTA_Exit);
    EB.clickthrough("CTA_Exit");
    tl.killDelayedCallsTo(enableCta);
    enableCta();
    console.log('========click CTA_Exit=======');
    //animations['main'].toEnd();
    //animations['cta'].toEnd();
    e.preventDefault();
    e.stopPropagation();
});
function enableCta(){
    container.on("mouseenter", function(e) {
        if(hasTouch) return;
        // animations['cta'].addPause(1.9);
        animations['cta'].play(0.1);
    });
    container.on("mouseleave", function(e) {
        if(hasTouch) return;
        // animations['cta'].play(2.4);
    });
}

//the string 'main' is the main_all of the flash libray
function initTimeLine() { 
    /* mainl01 is the layer name of the second timeline
     * bottle_1 is the prefix of the second timeline _all.  e.g. bottle_1_all
     * $TL.setSeqState('toEnd','mainl01') is to start a Sequence png and mainl01 is the name.
    */
   
    $('.mainl0').removeClass('preload').html($('.cta')); 
    // $('.mainl10,.mainl8,.mainl6,.mainl4').removeClass('preload');
    // $('.mainl00').removeClass('preload');
    $TL.init(layerNames, imageInfos, eases, seqs, svgs);
    animations['main'] = $TL.createTimeline(animationData['main'], $('.main'), 0, true);  
    animations['cta'] = $TL.createTimeline(animationData['cta'], $('.cta'), 0, true);  

    for (var i in animations) {
        if (animations[i].resize) animations[i].resize(1,1);
    }
    animations['main'].pause(0);
    animations['cta'].addPause(0.001);
    var NUM = $('.preload img').length;
    var isStart = false;
    var count = 0;
    $('.preload img').on('load', function() {
        count++;
        if (count >= NUM && !isStart) {
            isStart = true;
            tl.to(container, .3, {
                opacity: 1
            });
            tl.delayedCall(.2, animations['main'].play, [0.0001]);
            tl.delayedCall(6.2, animations['cta'].play, [0.01]);
            tl.delayedCall(7,enableCta);
        }
    });
}