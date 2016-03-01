function trace(){}
var $window = $(window),
    $html = $("html"),
    $body = $('body');
var container = $('.container'),
    overImg = $('.mainl0'); // the name of the ctaOver image
var layerNames,
    animationData = {},
    animations = {},
    svgs = {},
    seqs = {},
    imageInfos,
    imageNumber = 0,
    eases,
    fps = 10,
    tl = TweenMax;
var ua = window.navigator.userAgent.toLowerCase(),
    hasTouch = ('ontouchstart' in window),
    isS3 = ua.match(/gt\-i9300/i) !== null,
    isS4 = ua.match(/gt\-i9500/i) !== null;

var debug = false;

if (!isS4) $('body').addClass('notS4');
if (isS3) container.addClass('S3');

$('.mainl0').on("click", function(e) {
    // window.open(bgURL);
    // if(!debug) Enabler.exit('GetDetailsNow_Exit');
    myFT.clickTag(2);
    e.stopPropagation();
    animations['main'].toEnd();
});
container.on("click", function(e) {
    // window.open(bgURL);
    // if(!debug) Enabler.exit('Background_Exit');
    myFT.clickTag(1);
    tl.killDelayedCallsTo(animations['cta'].play);
    
    tl.killDelayedCallsTo(enableCta);
    enableCta();
    
    animations['main'].toEnd();
    animations['coffee_left'].toEnd();
    animations['coffee_right'].toEnd();
    animations['cta'].toEnd();
    animations['hand_left'].toEnd();
    animations['hand_right'].toEnd();



});
var isEnter = false;
function enableCta(){
    container.on("mouseenter", function(e) {
        if(hasTouch) return;
        isEnter = true;
        animations['cta'].play(2.1);
    });
    container.on("mouseleave", function(e) {
        if(hasTouch) return;
        if(!isEnter) return;
        isEnter = false;
        animations['cta'].play(3);
    });
}
//the string 'main' is the main_all of the flash libray
function initTimeLine() { 
    /* mainl01 is the layer name of the second timeline
     * bottle_1 is the prefix of the second timeline _all.  e.g. bottle_1_all
     * $TL.setSeqState('toEnd','mainl01') is to start a Sequence png and mainl01 is the name.
    */
   
    $('.mainl0').removeClass('preload').html($('.cta'));  
    $('.mainl16').removeClass('preload').html($('.hand_left'));
    $('.mainl14').removeClass('preload').html($('.coffee_left'));
    $('.mainl12').removeClass('preload').html($('.hand_right'));
    $('.mainl10').removeClass('preload').html($('.coffee_right'));
 

    // $TL.setSeqState('toEnd','mainl2');

    $TL.init(layerNames, imageInfos, eases, seqs, svgs);
    animations['main'] = $TL.createTimeline(animationData['main'], $('.main'), 0, true);  
    animations['hand_left'] = $TL.createTimeline(animationData['hand_left'], $('.hand_left'), 0, true);
    animations['coffee_left'] = $TL.createTimeline(animationData['coffee_left'], $('.coffee_left'), 0, true);
    animations['hand_right'] = $TL.createTimeline(animationData['hand_right'], $('.hand_right'), 0, true);
    animations['coffee_right'] = $TL.createTimeline(animationData['coffee_right'], $('.coffee_right'), 0, true);
    animations['cta'] = $TL.createTimeline(animationData['cta'], $('.cta'), 0, true);
   




    for (var i in animations) {
        if (animations[i].resize) animations[i].resize(1,1);
    }
    animations['main'].pause(0);
    animations['hand_left'].pause(0.0001);
    animations['hand_right'].pause(0.0001);
    animations['coffee_left'].pause(0.0001);
    animations['coffee_right'].pause(0.0001);
    animations['cta'].pause(0.00001);
    animations['cta'].addPause(2.0);
    animations['cta'].addPause(2.9);


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
            tl.delayedCall(1.9, animations['hand_left'].play, [0.1]);
            tl.delayedCall(4.2, animations['hand_right'].play, [0.1]);
            tl.delayedCall(1.83, animations['coffee_left'].play, [0.1]);
            tl.delayedCall(4.1, animations['coffee_right'].play, [0.1]);
            tl.delayedCall(13.4, animations['cta'].play, [0.0001]);
            tl.delayedCall(15,enableCta);

        }
    });
}