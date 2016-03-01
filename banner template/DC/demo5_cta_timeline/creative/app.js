function trace(){}
var $window = $(window),
    $html = $("html"),
    $body = $('body');
var container = $('.container'),
    ctaHot = $('.cta');
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

if (!isS4) $('body').addClass('notS4');
if (isS3) container.addClass('S3');
container.on("click", function(e) {
    // window.open(bgURL);
    Enabler.exit('Background_Exit');
    tl.killDelayedCallsTo(animations['cta'].play);
    animations['main'].toEnd();
    animations['ani'].toEnd();
    animations['cta'].toEnd();
});
ctaHot.on("click", function(e) {
    // window.open(bgURL);
    Enabler.exit('CTA_Exit');
    tl.killDelayedCallsTo(animations['cta'].play);
    animations['main'].toEnd();
    animations['ani'].toEnd();
    animations['cta'].toEnd();
    e.preventDefault();
    e.stopPropagation();
});
// tl.set(overImg,{display:'none',opacity:0});
container.on("mouseover", function(e) {
    if(hasTouch) return;
    animations['cta'].play(0.01); //  the time of the label 'over'
});
container.on("mouseout", function(e) {
    if(hasTouch) return;
    animations['cta'].play(0.71);//  the time of the label 'out'
});

//the string 'main' is the main_all of the flash libray
function initTimeLine() { 
    /* mainl01 is the layer name of the second timeline
     * bottle_1 is the prefix of the second timeline _all.  e.g. bottle_1_all
     * $TL.setSeqState('toEnd','mainl01') is to start a Sequence png and mainl01 is the name.
    */
   
    $('.mainl1').removeClass('preload').html($('.ani'));  
    $('.mainl00').removeClass('preload').html($('.cta'));  
    // $TL.setSeqState('toEnd','mainl2');
    $TL.init(layerNames, imageInfos, eases, seqs, svgs);
    animations['main'] = $TL.createTimeline(animationData['main'], $('.main'), 0, true);  
    animations['ani'] = $TL.createTimeline(animationData['ani'], $('.ani'), 0, true);
    animations['cta'] = $TL.createTimeline(animationData['cta'], $('.cta'), 0, true);

    for (var i in animations) {
        if (animations[i].resize) animations[i].resize(1,1);
    }
    animations['main'].pause(0);
    animations['ani'].pause(0);
    animations['cta'].pause(0.01);
    animations['cta'].addPause(0.7); //  the time of the label 'out'
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
            tl.delayedCall(.2, animations['ani'].play, [0.0001]);
        }
    });
}