console.log('It works!');

//Declaring namespace

var collapsedPanel,
    BgExit,
    ctaUrl = "http://www.google.com",
    bubbles,
    timeLine = [],
    animateArray = [];

function init() {
    console.log('======INIT=======');
    initPreload();
}

function initPreload() {
    var imgs = document.querySelectorAll('.preload'),
        imgArray = [];
    for (i = 0; i < imgs.length; ++i) {
        imgArray.push(imgs[i]);
    }
    loadImages = preloadImages(imgArray, false);
    loadImages.done(function() {
        console.log('=====loaded');
        collapseAnimation();
    });
}

function collapseHandle(e) {
    e.stopPropagation();
    Enabler.exit('Background_Exit')
}

function start() {
    bubbles= $('.bubbles');
    TweenLite.fromTo(bubbles,1.8,{y:250},{y:0,delay:0.5,ease: Sine.easeIn});
    TweenLite.delayedCall(0.5, makeBubbles, [20, 0]);
    TweenLite.delayedCall(0.3, makeBubbles, [10, 0]);
    TweenLite.delayedCall(1, makeBubbles1, [10, 0]);
}
function makeBubbles(num, life, delay) {

    var bubbleflakes = num == 0 ? 120 : num;
    if (life == 0) life = 1.2;
    if (delay == 0) delay = 0;
    var timer;
    var perDelay;
    var ease;
    for (var i = 0; i < bubbleflakes; i++) {
        //var b = bubbleHolder.attachMovie("bubble", "bubble"+i, bubbleHolder.getNextHighestDepth());
        var icon = $("<div>");
        var width = Math.random() * 40 + 60;
        icon.css({
            "position": "absolute",
            "top": 200 + width,
            "left": Math.random() * 300 - width/2,
            "width": width
        });
        icon.addClass('icon');
        path = 'bubble.png';
        icon.append("<img src='" + path + "' alt=''>");
        icon.appendTo(bubbles);
        if (Math.random() > .8) {
            timer = Math.random() * 1.5 + 1.6;
            ease = Quint.easeIn;
        } else {
            timer = Math.random() * 1.7 + 0.8;
            ease = Linear.easeIn;
        }
        perDelay = Math.random() * life + delay;

        TweenLite.to(icon, timer, {
            delay: perDelay,
            y: -(300 + width - 10),
            x: Math.random() * 150 - 60,
            ease: ease
        });
    }
}

function makeBubbles1(num, life, delay) {
    var bubbleflakes = num == 0 ? 120 : num;
    if (life == 0) life = 1.5;
    if (delay == 0) delay = 0;
    var timer;
    var perDelay;
    var ease;
    for (var i = 0; i < bubbleflakes; i++) {
        //var b = bubbleHolder.attachMovie("bubble", "bubble"+i, bubbleHolder.getNextHighestDepth());
        var icon = $("<div>");
        var width = Math.random() * 40 + 60;
        icon.css({
            "position": "absolute",
            "top": 200 + width,
            "left": Math.random() * 300 -width/2,
            "width": width
        });
        icon.addClass('icon');
        path = 'bubble.png';
        icon.append("<img src='" + path + "' alt=''>");
        icon.appendTo(bubbles);
        if (Math.random() > .8) {
            timer = Math.random() * 1.3 + 1.0;
            ease = Quint.easeIn;
        } else {
            timer = Math.random() * 1.5 + 0.2;
            ease = Linear.easeIn;
        }
        perDelay = Math.random() * life + delay;

        TweenLite.to(icon, timer, {
            delay: perDelay,
            y: -(300 + width - 10),
            x: Math.random() * 150 - 60,
            ease: ease
        });
    }
}

function collapseAnimation() {
    console.log("collapseAnimation");
    var wave1 = $('.w1'),
        wave2 = $('.w2'),
        water = $('.water');
    start();
    TweenLite.to(wave1, 2.2, {
        x: -227,
        y: -340,
        rotation: 4,
        delay: 0.1,
        ease: Sine.easeIn
    });
    TweenLite.to(wave2, 2.2, {
        x: -227,
        y: -340,
        rotation: 2,
        scaleX: 0.82,
        scaleY: 0.21,
        delay: 0.1,
        ease: Sine.easeIn
    });
    TweenLite.to(water, 1.75, {
        y: -310,
        delay: 0.5,
        ease: Sine.easeIn
    });
    TweenLite.to(water, .9, {
        autoAlpha: 0,
        y: -450,
        delay: 2.8,
        ease: Cubic.easeIn
    });

}

/**
 * 播放序列帧图片
 * @param  {string} elementId         元素id
 * @param  {number} playTime          播放时间/ms
 * @param  {number} totalSpriteHeight 序列帧图片高度/px
 * @param  {number} startFrame        播放开始帧数(0为空白帧)
 * @param  {number} endFrame          播放结束帧数(总帧数+1为空白帧)
 * @return {null}                   没有返回值
 */

function playSpriteAni(elementId, playTime, totalSpriteHeight, startFrame, endFrame) {
    var element = document.getElementById(elementId),
        spriteHeight = element.clientHeight,
        startFrame = (startFrame == 0) || startFrame ? startFrame : 1,
        endFrame = endFrame ? endFrame : (totalSpriteHeight / spriteHeight),
        playRate = playTime / (endFrame - startFrame);

    var curFrame = startFrame;
    var transY = -(startFrame - 1) * spriteHeight;
    var endtransY = -(endFrame - 1) * spriteHeight;

    var sprites = setInterval(function() {
        curFrame++;
        transY -= spriteHeight;

        element.style.backgroundPosition = "0 " + transY + "px";

        if (curFrame == endFrame || document.body.className == 'end') {
            element.style.backgroundPosition = "0 " + endtransY + "px";
            clearInterval(sprites);
        }

    }, playRate);
}

function preloadImages(arr) {
    var newimages = [],
        loadedimages = 0,
        imgLen = 0;

    var postaction = function() {};
    arr = (typeof arr != "object") ? [arr] : arr;
    imgLen = arr.length;

    function imageloadpost() {
        loadedimages++;
        ratio = loadedimages / imgLen;
        if (arr[loadedimages - 1] === null) {
            log('nothing here');
        }
        if (loadedimages == imgLen) {
            postaction(newimages);
            for (var j = 0, len = imgLen; j < len; j++) {
                $(arr[j]).append(newimages[j]);
                $(arr[j]).removeAttr("data-src");
            }
        }
    }
    var img;
    for (var i = 0, len = imgLen; i < len; i++) {
        img = new Image();
        newimages.push(img);

        img.addEventListener("load", function() {
            imageloadpost();
        });
        img.addEventListener("error", function() {
            imageloadpost();
        });
        if (arr[i].getAttribute('data-src') !== null) {
            img.src = arr[i].getAttribute('data-src');
            img.alt = "";
        }
    }
    return {
        done: function(f) {
            postaction = f || postaction;
        }
    };
}