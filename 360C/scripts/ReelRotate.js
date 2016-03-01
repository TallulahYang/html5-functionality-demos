function addEventHandler(elem,eventType,handler) {
 if (elem.addEventListener)
     elem.addEventListener(eventType,handler,false);
 else if (elem.attachEvent)
     elem.attachEvent('on'+eventType,handler); 
}

(function() {
    var isTouchScreen = 'ontouchstart' in document.documentElement;
    var defaultEvent = isTouchScreen ? {
        tap: "touchend",
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
        hover: "touchstart"
    } : {
        tap: "click",
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
        hover: "mouseover"
    };

    var ReelRotate = function(node, options) {
        var instance = ReelRotate.get(node);
        if (instance) {
            return instance;
        }
        ReelRotate._instances.push(this);

        this._node = node;
        this.build(options);
    };
    ReelRotate.options = {
        imgWidth: 300,
        imgHeight: 175,
        frame: 36,
        activedFrame: 0,
        autoPlay: false,
        step: 10,
        renderMode: "div",
        actived : false
    };
    ReelRotate.cssClassName = 'reel-rotate';
    ReelRotate.dataId = 'reel-rotate';
    ReelRotate._instances = [];
    ReelRotate.get = function(node) {
        for (var i = 0, length = ReelRotate._instances.length; i < length; i++) {
            var instance = ReelRotate._instances[i];
            if (instance._node === node) {
                return instance;
            }
        }
        return null;
    };
    ReelRotate.createDom = function() {

    }
    ReelRotate.extendsObj = function(objA, objB) {
        var obj = {};
        for (var i in objA) {
            obj[i] = objA[i];
        }

        for (var i in objB) {
            obj[i] = objB[i];
        }
        return obj;
    }
    var proto = ReelRotate.prototype;
    proto.build = function(options) {
        var node = this._node,
            options = ReelRotate.extendsObj(ReelRotate.options, options);
        this._imgWidth =  node.getAttribute('data-width') || options.imgWidth;
        this._imgHeight = node.getAttribute('data-height') || options.imgHeight;
        this._frame = node.getAttribute('data-frame') || options.frame;
        this._step = node.getAttribute('data-step') || options.step;
        this._renderMode = node.getAttribute('data-render') || options.renderMode;
        this._autoPlay = options.autoPlay;
        this._activedFrame = options.activedFrame;
        this._actived = options.actived;
        
        
        
        var $renderer = this._node.querySelectorAll('.renderer');
        if (this._renderMode === 'div') {
        } else if (this._renderMode === 'li') {
            for (var i =0, length=this._frame; i < length; i++) {
                var imgDOM = document.createElement('img');
                imgDOM.setAttribute("src", "images/toy/img"+(i+1)+".jpg");

                node.appendChild(imgDOM);
            }
            var activedFrame = node.querySelectorAll('img')[this._activedFrame];
            activedFrame.setAttribute("style", "display:block");
        }

        this.regisiter();
    };
    proto.regisiter = function() {
        var self = this,
            oldX = 0,
            newX = 0;
        
        addEventHandler(self._node, defaultEvent.down, function(event) {
            if(isTouchScreen) {
                event.preventDefault();
            }
            self._actived = true;
            self.position = self.getMousePos(event);
            oldX = self.position.x;
        })

        addEventHandler(self._node, defaultEvent.move, function(event) {
            if(isTouchScreen) {
                event.preventDefault();
            }
            if (!self._actived) return;
            self.position = self.getMousePos(event);
            newX = self.position.x;

            var horizontalOffset = newX - oldX;
            var increaseStep = parseInt(horizontalOffset / self._step);
            if (increaseStep != 0) {
                self._activedFrame = (self._activedFrame + increaseStep) % self._frame;
                if (self._activedFrame < 0) {
                    self._activedFrame +=  Number(self._frame);
                }
                oldX = newX;
                if (self._renderMode === "div") {
                    pos = '0 ' + (self._activedFrame) * self._imgHeight + 'px';
                    self._node.setAttribute('style', "background-position:" + pos);
                } else if (self._renderMode === "li") {
                    var allImg = self._node.querySelectorAll('img');
                    for (var i = 0, length = allImg.length; i<length; i++) {
                        if (self._activedFrame == i) {
                            allImg[i].setAttribute("style", "display:block");
                        } else {
                            allImg[i].setAttribute("style", "display:none");
                        }
                    }
                }
            }
        })
    
        addEventHandler(self._node, defaultEvent.up, function(event) {
            if(isTouchScreen) {
                event.preventDefault();
            }
            self._actived = false;
            self.position = self.getMousePos(event);
        })
    }

    proto.getMousePos = function(event) {
        var mouseX = isTouchScreen ? event.touches[0].pageX : event.clientX,
            mouseY = isTouchScreen ? event.touches[0].pageY : event.clientY;

        return {
            x: mouseX,
            y: mouseY
        };
    }
    window.ReelRotate = ReelRotate;
})();
