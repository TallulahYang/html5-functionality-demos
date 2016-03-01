function CjsHelper($) {
    var exportRoots = {};
    var elements = [];
    var obj = {};
    var needChangeArr = ['model01.png'
    ];

    function tickHandle() {
        for (var i = 0, il = elements.length; i < il; i++) {
            var name = $(elements[i]).data('movie');
            var cjs = obj[name]['cjs'],
                root = cjs.root,
                stage = cjs.stage;
                //console.log(name,root.currentFrame,root.currentLabel)
            if (root && root.autoStop && root.isPlaying && ( root.currentFrame == root.totalFrames - 1 || root.currentLabel=='end' || root.currentLabel=='end1')) {
                root.isPlaying = false;
                root.isOverBegin = true;
                if(name =='Cloud' || name =='Daisis' || name =='Dayspa'){ 
                    root.stop();
                }else{
                    root.gotoAndStop(root.totalFrames - 1);
                }
                createjs.Ticker.removeEventListener('tick', stage);
            }
        }
    }
    createjs.Ticker.setFPS(40);
    createjs.Ticker.addEventListener('tick', tickHandle);
    return {
        load: function(type, callback) {
            handleFileLoad = function(evt) {
                    if (evt.item.type == "image") {
                        images[evt.item.id] = evt.result;
                    }
                },
                handleComplete = function(evt) {
                    var queue = evt.target;
                    ss[type+"_atlas_"] = queue.getResult(type+"_atlas_");
                    exportRoots[type] = new lib[type]();
                    callback.call();
                }
            var arrManifest = lib['properties_' + type].manifest;
            if (isRetina) {
                for (var i = 0; i < arrManifest.length; i++) {
                    var tempSrc = arrManifest[i].src;
                    var array = tempSrc.split('/');
                    if (needChangeArr.indexOf(array[array.length-1]) > -1) {
                        arrManifest[i].src = "anim/"+type+'/images/x2_' + array[array.length-1];
                    }
                }
            }

            images = images || {};
            ss = ss || {};
            var loader = new createjs.LoadQueue(false);
            loader.addEventListener("fileload", handleFileLoad);
            loader.addEventListener("complete", handleComplete);
            if(type=='Kittens'){
                loader.loadFile({
                    src: "anim/"+type+"/images/"+type+"_atlas_.json",
                    type: "spritesheet",
                    id: type+"_atlas_"
                }, true);
            }else{
                loader.loadManifest(arrManifest);
            }
            // var loader = new createjs.LoadQueue(false);
            // loader.addEventListener("fileload", handleFileLoad);
            // loader.addEventListener("complete", handleComplete);
            // loader.loadFile({
            //     src: "anim/"+type+"/images/"+type+"_atlas_.json",
            //     type: "spritesheet",
            //     id: type+"_atlas_"
            // }, true);
            // loader.loadManifest(lib.properties.manifest);
        },
        create: function($nodes, isRetina) {
            var scope = this;
            $nodes.each(function() {
                var $node = $(this),
                    movieName = $node.data('movie'),
                    width = $node.data('width'),
                    height = $node.data('height'),
                    newCanvas = $('<canvas></canvas>');
                $node.append(newCanvas);

                var canvas = newCanvas[0],
                    movie = exportRoots[movieName],
                    stage = new createjs.Stage(canvas);

                stage.addChild(movie);
                //stage.update();
                obj[movieName] = {
                        'cjs': {
                            "cas": newCanvas[0],
                            "stage": stage,
                            'root': movie
                        }
                    }
                    // console.log(obj[movieName])
                    // console.log(obj[$node[0]])

                elements.push($node[0]);

                canvas.setAttribute('width', width * (isRetina ? 2 : 1));
                canvas.setAttribute('height', height * (isRetina ? 2 : 1));

                

                if (isRetina) {
                    scope.returnAllImgs(movie);
                }
                stage.scaleX = stage.scaleY = isRetina ? 2 : 1;
            });

            // this.hide($nodes);
        },
        show: function($nodes, autoStop) {
            $nodes.each(function() {
                var name = $(this).data('movie');
                var cjs = obj[name]['cjs'],
                    root = cjs.root,
                    stage = cjs.stage;

                root.alpha = 1;
                if(root.totalFrames > 1) root.gotoAndPlay(1);
                if(name != 'Rainbows'){
                    for (var i in root) {
                        thisChild = root[i];
                        if (thisChild && thisChild instanceof createjs.Container) {
                            if(thisChild.totalFrames > 1)thisChild.gotoAndPlay(1);
                        }
                    }
                }
                if (autoStop === undefined) {
                    autoStop = true;
                }
                root.autoStop = autoStop;
                root.isOverBegin = false;
                if (!root.isPlaying) {
                    root.isPlaying = true;
                    createjs.Ticker.addEventListener('tick', stage);
                }
            });
        },
        hover: function($nodes, autoStop) {
            $nodes.each(function() {
                var name = $(this).data('movie');
                var cjs = obj[name]['cjs'],
                    root = cjs.root,
                    stage = cjs.stage;
                var thisChild;
                if(root.isPlaying) return;
                if(name =='Cloud' || name =='Daisis' || name=='Dayspa'){
                    root.gotoAndPlay(root.currentFrame + 1);
                    autoStop = false;
                }else{
                    for (var i in root) {
                        thisChild = root[i];
                        if (thisChild && thisChild instanceof createjs.Container) {
                            if(thisChild.labels){
                                thisChild.gotoAndPlay('over');
                            }
                        }
                    }
                    root.gotoAndPlay('over');
                }
                if (autoStop === undefined) {
                    autoStop = true;
                }
                root.autoStop = autoStop;
                if (!root.isPlaying) {
                    root.isPlaying = true;
                    createjs.Ticker.addEventListener('tick', stage);
                }
            });
        },
        stop: function($nodes) {
            $nodes.each(function() {
                var name = $(this).data('movie');
                var cjs = obj[name]['cjs'],
                    root = cjs.root,
                    stage = cjs.stage;
                if(!root.isOverBegin)  return;
                root.isPlaying = false;
                root.stop();
                stage.update();
                createjs.Ticker.removeEventListener('tick', stage);
            });
        },
        hide: function($nodes) {
            $nodes.each(function() {
                var name = $(this).data('movie');
                var cjs = obj[name]['cjs'],
                    root = cjs.root,
                    stage = cjs.stage;
                root.isPlaying = false;
                root.gotoAndStop(root.totalFrames - 1);
                for (var i in root) {
                    thisChild = root[i];
                    if (thisChild && thisChild instanceof createjs.Container) {
                        if(thisChild.labels){
                            thisChild.gotoAndStop(thisChild.totalFrames - 1);
                        }
                    }
                }
                stage.update();
                createjs.Ticker.removeEventListener('tick', stage);
            });
        },
        resize: function($nodes, num) {
            $nodes.each(function() {
                var w = $(this).data("width"),
                    h = $(this).data("height"),
                    cw = $(this).width();
                $(this).find("canvas").height(cw * num * h / w)
            });
        },
        returnAllImgs: function(thisContainer) {
            var thisChild;
            for (var i in thisContainer) {
                thisChild = thisContainer[i];
                if (thisChild && thisChild instanceof createjs.Container) {
                    if (thisChild == thisContainer['children']) continue;
                    if (thisChild == thisContainer['parent']) continue;
                    this.returnAllImgs(thisChild);
                }
                if (thisChild && thisChild instanceof createjs.Bitmap) {
                    var Arr = thisChild.image.src.split('/');
                    var tr = Arr[Arr.length - 1];
                    var Arr2 = tr.split('_');
                    var tr2 = Arr2[Arr2.length - 1];
                    if (needChangeArr.indexOf(tr) > -1 || needChangeArr.indexOf(tr2) > -1) {
                        thisChild.setTransform(0, 0, thisChild.scaleX * 0.5, thisChild.scaleY * 0.5);
                    }
                }
            }
        }
    };
};