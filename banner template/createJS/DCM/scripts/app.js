var isRetina = function() {
    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),\
                      (min--moz-device-pixel-ratio: 1.5),\
                      (-o-min-device-pixel-ratio: 3/2),\
                      (min-resolution: 1.5dppx)";
    if (window.devicePixelRatio > 1) return true;
    if (window.matchMedia && window.matchMedia(mediaQuery).matches) return true;
    return false;
}();
if (!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(obj) {
        for (var i = 0, il = this.length; i < il; i++) {
            if (this[i] == obj) {
                return i;
            }
        }
    };
}
var canvas, stage, exportRoot;
var needChangeArr = ['copy1.png', 'copy2.png', 'copy4.png', 'copy5.png', 'copy6.png', 'copy7.png', 
                    'copy8.png', 'copy9.png', 'copy10.png', 'cta_1.png', 'cta_2.png', 'logo.png', 
                    'p1.png', 'p2.png', 'p3.png', 'p4.png', 'p5.png', 'p6.png', 'p7.png', 
                    'women1.png', 'women2.png'];
                    
var loading = $('#e-loading');
var $J = Zepto;
var container = $J('.container'),
    ctaHot = $J('#ctaHot'),
    hotspot = $J('#hotspot');

function init() {
    canvas = document.getElementById("canvas");
    images = images || {};

    if (isRetina) {
        for (var i = 0; i < lib.properties.manifest.length; i++) {
            var tempSrc = lib.properties.manifest[i].src;
            if (needChangeArr.indexOf(tempSrc.split('/')[1]) > -1) {
                lib.properties.manifest[i].src = 'images/x2_img/x2_' + tempSrc.split('/')[1];
            }
        }
        var height = canvas.getAttribute('height');
        var width = canvas.getAttribute('width');
        canvas.setAttribute('width', width * 2);
        canvas.setAttribute('height', height * 2);
        canvas.style.width = width + "px";
        canvas.style.height = height + "px";
    }


    var loader = new createjs.LoadQueue(false);
    loader.addEventListener("fileload", handleFileLoad);
    loader.addEventListener("complete", handleComplete);
    loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {
    if (evt.item.type == "image") {
        images[evt.item.id] = evt.result;
    }
}

function handleComplete(evt) {
    exportRoot = new lib.banner();

    stage = new createjs.Stage(canvas);
    stage.addChild(exportRoot);
    stage.update();

    if (isRetina) {
        returnAllImgs(exportRoot);
        stage.scaleX = stage.scaleY = 2;
    }
    loading.css('opacity', '0.01');
    setTimeout(function() {
        loading.css('display', 'none');
        exportRoot.gotoAndPlay('startAni');
    }, 500);

    createjs.Ticker.setFPS(lib.properties.fps);
    createjs.Ticker.addEventListener("tick", stage);

    hotspot.on('mouseenter', function(e) {
        if(exportRoot.CTA.parent)exportRoot.CTA.gotoAndPlay("in");
        if(exportRoot.p5.parent) exportRoot.p5.p7.gotoAndPlay("in");
    
    });
    hotspot.on('mouseleave', function(e) {
        if(exportRoot.CTA.parent)exportRoot.CTA.gotoAndPlay("out");
    });

    container.on('click', function(e) {
        window.open('Background_Exit','_blank');
        exportRoot.gotoAndPlay('endFrame');
        exportRoot.p5.gotoAndStop('endFrame');
        exportRoot.p5.p7.gotoAndStop('endFrame');
        exportRoot.CTA.gotoAndStop('endFrame');
        exportRoot.arrow.gotoAndStop('endFrame');
    });
    ctaHot.on('click', function(evt) {
        if(exportRoot.CTA.parent) window.open('LearnMore_Exit','_blank');
        evt.preventDefault();
        evt.stopPropagation();
        return false;
    });
}

function returnAllImgs(thisContainer) {
    var thisChild;
    for (var i in thisContainer) {
        thisChild = thisContainer[i];
        if (thisChild && thisChild instanceof createjs.Container) {
            if (thisChild == thisContainer['children']) continue;
            if (thisChild == thisContainer['parent']) continue;
            returnAllImgs(thisChild);
        }
        if (thisChild && thisChild instanceof createjs.Bitmap) {
            var Arr = thisChild.image.src.split('/');
            var tr = Arr[Arr.length - 1].substr(3);
            // console.log(tr);
            if (needChangeArr.indexOf(tr) > -1) {
                thisChild.setTransform(0, 0, thisChild.scaleX * 0.5, thisChild.scaleY * 0.5);
            }
        }
    }
}