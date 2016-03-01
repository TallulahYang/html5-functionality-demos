(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 300,
	height: 600,
	fps: 40,
	color: "#FFFFFF",
	manifest: [
		{src:"images/bg1.png", id:"bg1"},
		{src:"images/bg2.png", id:"bg2"},
		{src:"images/bg3.png", id:"bg3"},
		{src:"images/copy1.png", id:"copy1"},
		{src:"images/copy10.png", id:"copy10"},
		{src:"images/copy2.png", id:"copy2"},
		{src:"images/copy4.png", id:"copy4"},
		{src:"images/copy5.png", id:"copy5"},
		{src:"images/copy6.png", id:"copy6"},
		{src:"images/copy7.png", id:"copy7"},
		{src:"images/copy8.png", id:"copy8"},
		{src:"images/copy9.png", id:"copy9"},
		{src:"images/cta_1.png", id:"cta_1"},
		{src:"images/cta_2.png", id:"cta_2"},
		{src:"images/logo.png", id:"logo"},
		{src:"images/p1.png", id:"p1"},
		{src:"images/p2.png", id:"p2"},
		{src:"images/p3.png", id:"p3"},
		{src:"images/p4.png", id:"p4"},
		{src:"images/p5.png", id:"p5"},
		{src:"images/p6.png", id:"p6"},
		{src:"images/p7.png", id:"p7"},
		{src:"images/women1.png", id:"women1"},
		{src:"images/women2.png", id:"women2"}
	]
};



// symbols:



(lib.bg1 = function() {
	this.initialize(img.bg1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg2 = function() {
	this.initialize(img.bg2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg3 = function() {
	this.initialize(img.bg3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,41,14);


(lib.copy10 = function() {
	this.initialize(img.copy10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,23);


(lib.copy2 = function() {
	this.initialize(img.copy2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,194,17);


(lib.copy4 = function() {
	this.initialize(img.copy4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,139,14);


(lib.copy5 = function() {
	this.initialize(img.copy5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,213,51);


(lib.copy6 = function() {
	this.initialize(img.copy6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,211,39);


(lib.copy7 = function() {
	this.initialize(img.copy7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,77,11);


(lib.copy8 = function() {
	this.initialize(img.copy8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,78,11);


(lib.copy9 = function() {
	this.initialize(img.copy9);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,11);


(lib.cta_1 = function() {
	this.initialize(img.cta_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,8);


(lib.cta_2 = function() {
	this.initialize(img.cta_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,80,8);


(lib.logo = function() {
	this.initialize(img.logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,29);


(lib.p1 = function() {
	this.initialize(img.p1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,232,236);


(lib.p2 = function() {
	this.initialize(img.p2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,234,234);


(lib.p3 = function() {
	this.initialize(img.p3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,181,176);


(lib.p4 = function() {
	this.initialize(img.p4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,176,97);


(lib.p5 = function() {
	this.initialize(img.p5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,259,331);


(lib.p6 = function() {
	this.initialize(img.p6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,129,166);


(lib.p7 = function() {
	this.initialize(img.p7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,114,112);


(lib.women1 = function() {
	this.initialize(img.women1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,444);


(lib.women2 = function() {
	this.initialize(img.women2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,115,121);


(lib.women2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.women2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,115,121);


(lib.women1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.women1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,444);


(lib.shadow2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#000000","rgba(0,0,0,0)"],[0,1],0.4,-19.4,0,0.4,-19.4,50).s().p("AvqExQBRioCUiKQFBkvHEAAQHFAAFBEvQCUCKBRCog");
	this.shape.setTransform(100.3,30.6);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,200.6,61.1);


(lib.p8 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,114,112);


(lib.p6_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,259,331);


(lib.p5_msk1 = function() {
	this.initialize();

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A3bbpMAAAg3SMAu2AAAMAAAA3Sg");
	mask.setTransform(150,312);

	// Layer 1
	this.instance = new lib.bg2();

	this.instance.mask = mask;

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,135,300,354);


(lib.p4_msk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGA8QgUgFgKgGQgZgMgcgHIgXgFQhNgRg1hFIHmAAQguA/hAASIg1AMQgWAGgWAOQgQAKgQAAQgFAAgGgCg");
	this.shape.setTransform(25.9,3.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(1.5,-3,48.8,12.6);


(lib.p4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,176,97);


(lib.p3_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,181,176);


(lib.p2_1 = function() {
	this.initialize();

	// Layer 3
	this.instance = new lib.p2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,234,234);


(lib.p1_msk1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FADED5","#FADED5"],[0.765,1],0,54.1,0,0,54.1,118).s().p("ALxgQQlPj9miAAQmhgBk/D+Qk/D7hbGKQgCgpgBgqQAAnnFRlWQFSlZHaAAQHbAAFRFZQFSFWAAHnQAAAqgDApQg7mKlPj7g");
	this.shape.setTransform(115,62.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,230,125.8);


(lib.p1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.p1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,232,236);


(lib.p_color = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C58E8E","#E8A6A0","#F7D6CD","#FCE0DA","#B06657","#410903","#F3BBB7","#F3BBB7","#B77361","#F6CFC1","#E1A19B","#FCE0DB","#F8DAD5","#D59495","#602E30"],[0,0.02,0.145,0.239,0.275,0.357,0.384,0.494,0.671,0.682,0.882,0.937,0.969,0.992,1],-115.5,89.4,115.4,89.4).s().p("AjYEeIgngCIAAAAQlwgDlChSQjLgxgFhGIgBlvMAkFAAAIgFFwQgBAGgCAFQgOAfgbATIgIAEQh7AzirAfIhYANIgGABIhoAMIhZAKQhiAJhiAGIgBAAQhHAGhHABIjFACIggAAQhSAAhTgCg");
	this.shape.setTransform(115.5,28.9);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,231,57.7);


(lib.o = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlgFhQiTiTAAjOQAAjOCTiSQCSiTDOAAQDOAACTCTQCSCSAADOQAADOiSCTQiTCSjOAAQjOAAiSiSg");
	this.shape.setTransform(50,50);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,100,100);


(lib.logo_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.logo();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,117,29);


(lib.line1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#C37763","rgba(195,119,99,0)"],[0.918,1],38.8,0,-64.2,0).s().p("AqBAJIAAgSIUDAAIAAASg");
	this.shape.setTransform(64.3,1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,128.5,2);


(lib.light2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0,1],0,0,0,0,0,24.5).s().p("AinCoQhFhGAAhiQAAhhBFhGQBGhFBhAAQBiAABGBFQBFBGAABhQAABihFBGQhGBFhiAAQhhAAhGhFg");
	this.shape.setTransform(23.8,23.8);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,47.5,47.5);


(lib.light1 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.rf(["#FFFFFF","rgba(255,255,255,0)"],[0.278,1],0,0,0,0,0,38.4).s().p("AkMEMQhvhvAAidQAAicBvhwQBwhvCcAAQCdAABvBvQBvBwAACcQAACdhvBvQhvBvidAAQicAAhwhvg");
	this.shape.setTransform(38,38);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,76);


(lib.hotspot = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FBFBFB").s().p("AnBFsIAArYIODAAIAALYg");
	this.shape.setTransform(45,36.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,90,73);


(lib.cta_copy2 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta_2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,8);


(lib.cta_copy1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.cta_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,80,8);


(lib.copy10_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy10();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,79,23);


(lib.copy9_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy9();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,92,11);


(lib.copy8_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy8();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,78,11);


(lib.copy7_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy7();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,11);


(lib.copy6_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy6();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,211,39);


(lib.copy5_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy5();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,213,51);


(lib.copy4_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,139,14);


(lib.copy2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,194,17);


(lib.copy1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.copy1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,41,14);


(lib.bg2_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg1_1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.bg1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.bg_msk = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FCE0DA","rgba(252,226,220,0)"],[0,1],17.5,-19.2,17.5,-98.8).s().p("A3ba3MAAAg1uMAu2AAAMAAAA1ug");
	this.shape.setTransform(150,172);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,300,344);


(lib.arrow2 = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E0785E").s().p("AgWgqIAtAqIgtArg");
	this.shape.setTransform(2.4,4.3);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,4.8,8.7);


(lib.shadow1 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.o();
	this.instance.setTransform(49.3,52.4,0.985,0.985,0,0,0,50,50);
	this.instance.alpha = 0.059;
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(-2,-2,104,104);

	// Layer 1
	this.instance_1 = new lib.o();
	this.instance_1.setTransform(52,52,1.08,1.08,0,0,0,50,50);
	this.instance_1.alpha = 0.172;
	this.instance_1.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_1.cache(-2,-2,104,104);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7,-7,122,122);


(lib.p8_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{over:1,out:13});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_12 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(13));

	// Layer 1
	this.instance = new lib.p8();
	this.instance.setTransform(47.3,46.5,0.83,0.83,0,0,0,57,56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.93,scaleY:0.93},11,cjs.Ease.get(1)).wait(1).to({scaleX:0.83,scaleY:0.83},11,cjs.Ease.get(1)).wait(1));

	// Layer 2
	this.instance_1 = new lib.shadow1();
	this.instance_1.setTransform(56.2,52.2,0.85,0.85,0,0,0,52,52);
	this.instance_1.alpha = 0.578;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({scaleX:0.92,scaleY:0.92,x:57.2,y:57.2},11,cjs.Ease.get(1)).wait(1).to({scaleX:0.85,scaleY:0.85,x:56.2,y:52.2},11,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,111.3,107.3);


(lib.p7_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{endFrame:29});

	// timeline functions:
	this.frame_29 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(29).call(this.frame_29).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AmcHJQiyi2gQkCIAAAAQgRkACci3IAAAAQBfhvB9grIAAAAQBQgcBcAAIAAAAQDqAACzC2IAAAAQCyC3AREAIAAAAIABAwIAAAAQAADjiNClIAAAAQh1CKijAiIAAAAIglABIAAAAQjqAAizi6IAAAAQiyi7gQkEIAAAAQgCgaAAgZIAAAAQAAAZACAaIAAAAQAQEECyC7IAAAAQCzC6DqAAIAAAAIAlgBIAAAAQg2ALg6AAIAAAAQjqAAizi3gABxJ1IAAAAgAGJHJQCNilAAjjIAAAAIgBgwIAAAAQgRkAiyi3IAAAAQizi2jqAAIAAAAQhcAAhQAcIAAAAQBug/CJAAIAAAAQDqAACzC6IAAAAQCyC6AREIIAAAAQAQEEicC7IAAAAQiQCrjTAOIAAAAQCjgiB1iKg");
	mask.setTransform(67.4,64.7);

	// Layer 6
	this.instance = new lib.light1();
	this.instance.setTransform(-24.9,39.6,0.858,2.417,19.6,0,0,38,38);
	this.instance.alpha = 0.16;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({scaleX:2.2,x:115.1,y:85.6,alpha:0},28).wait(1));

	// Layer 1
	this.instance_1 = new lib.p6();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(30));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,129,166);


(lib.p5_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{play:77,"endFrame":170});

	// timeline functions:
	this.frame_76 = function() {
		this.stop();
	}
	this.frame_170 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(76).call(this.frame_76).wait(94).call(this.frame_170).wait(1));

	// Layer 14
	this.instance = new lib.copy9_1();
	this.instance.setTransform(210,467.5,1,1,0,0,0,46,5.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(151).to({_off:false},0).to({alpha:1},18).wait(2));

	// Layer 13
	this.instance_1 = new lib.copy8_1();
	this.instance_1.setTransform(203,449.5,1,1,0,0,0,39,5.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(149).to({_off:false},0).to({alpha:1},18).wait(4));

	// Layer 12
	this.instance_2 = new lib.copy7_1();
	this.instance_2.setTransform(202.5,430.5,1,1,0,0,0,38.5,5.5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(147).to({_off:false},0).to({alpha:1},18).wait(6));

	// p
	this.p7 = new lib.p7_ani();
	this.p7.setTransform(62.5,498,1,1,0,0,0,64.5,102);
	this.p7.alpha = 0;
	this.p7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.p7).wait(129).to({_off:false},0).to({x:82.5,alpha:1},18,cjs.Ease.get(1)).wait(24));

	// bg
	this.instance_3 = new lib.p5_msk1();
	this.instance_3.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({alpha:0},27).wait(144));

	// p
	this.instance_4 = new lib.p6_1();
	this.instance_4.setTransform(151.5,306.5,1,1,0,0,0,129.5,165.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(81).to({scaleX:3.11,scaleY:3.11,x:154.6,y:440.2},29,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// Layer 9
	this.instance_5 = new lib.bg_msk();
	this.instance_5.setTransform(0,257);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(85).to({_off:false},0).to({alpha:1},27,cjs.Ease.get(1)).wait(59));

	// shadow
	this.instance_6 = new lib.light1();
	this.instance_6.setTransform(152,450.9,3.526,0.733,0,0,0,38,38);
	this.instance_6.alpha = 0.801;
	this.instance_6.filters = [new cjs.ColorFilter(0, 0, 0, 1, 0, 0, 0, 0)];
	this.instance_6.cache(-2,-2,80,80);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(81).to({scaleX:11.68,scaleY:1.98,x:148,y:898.3,alpha:0.398},29,cjs.Ease.get(-1)).to({_off:true},1).wait(60));

	// Layer 6 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvgAsuyMQlYFXAAHnQAAHlFYFYQFXFZHlAAQHnAAFYlZQFZlYAAnlQAAnnlZlXQlYlZnnABQnlgBlXFZg");
	var mask_graphics_81 = new cjs.Graphics().p("EgXbAu4MAAAhdvMAu2AAAMAAABdvgAsuyMQlYFXAAHnQAAHlFYFYQFXFZHlAAQHnAAFYlZQFZlYAAnlQAAnnlZlXQlYlZnnABQnlgBlXFZg");
	var mask_graphics_82 = new cjs.Graphics().p("EgXeAu/MAAAhd9MAu9AAAMAAABd9gAsxyPQlYFYAAHpQAAHlFYFaQFZFZHnAAQHnAAFZlZQFZlaAAnlQAAnplZlYQlZlZnnAAQnnAAlZFZg");
	var mask_graphics_83 = new cjs.Graphics().p("EgXqAvWMAAAherMAvVAAAMAAABergAs3yYQlbFbAAHsQAAHqFbFbQFcFcHqAAQHrAAFblcQFclbAAnqQAAnslclbQlblcnrAAQnqAAlcFcg");
	var mask_graphics_84 = new cjs.Graphics().p("EgX8Av7MAAAhf1MAv5AAAMAAABf1gAtBynQlgFgAAHyQAAHvFgFhQFgFfHwAAQHxAAFglfQFglhAAnvQAAnylglgQlglgnxAAQnwAAlgFgg");
	var mask_graphics_85 = new cjs.Graphics().p("EgYXAwwMAAAhhfMAwvAAAMAAABhfgAtPy7QlmFmAAH6QAAH4FmFmQFmFmH4AAQH6AAFmlmQFmlmAAn4QAAn6lmlmQlmlmn6AAQn4AAlmFmg");
	var mask_graphics_86 = new cjs.Graphics().p("EgY4AxzMAAAhjlMAxxAAAMAAABjlgAtizWQltFuAAIGQAAICFtFvQFuFtIDAAQIFAAFultQFulvAAoCQAAoGluluQlultoFAAQoDAAluFtg");
	var mask_graphics_87 = new cjs.Graphics().p("EgZiAzGMAAAhmLMAzFAAAMAAABmLgAt4z2Ql3F3AAITQAAIRF3F3QF3F3IRAAQISAAF3l3QF4l3AAoRQAAoTl4l3Ql3l3oSAAQoRAAl3F3g");
	var mask_graphics_88 = new cjs.Graphics().p("EgaTA0oMAAAhpPMA0nAAAMAAABpPgAuT0cQmCGDAAIiQAAIhGCGCQGDGDIgAAQIjAAGCmDQGDmCAAohQAAoimDmDQmCmCojAAQogAAmDGCg");
	var mask_graphics_89 = new cjs.Graphics().p("EgbLA2ZMAAAhsxMA2XAAAMAAABsxgAux1HQmPGPgBI1QABIyGPGQQGPGPIzAAQI0AAGQmPQGPmQAAoyQAAo1mPmPQmQmQo0AAQozAAmPGQg");
	var mask_graphics_90 = new cjs.Graphics().p("EgcLA4YMAAAhwvMA4XAAAMAAABwvgAvU15QmeGeAAJKQAAJHGeGeQGeGeJIAAQJJAAGemeQGemeAApHQAApKmemeQmemepJAAQpIAAmeGeg");
	var mask_graphics_91 = new cjs.Graphics().p("EgdSA6nMAAAh1NMA6lAAAMAAAB1NgAv72xQmuGvAAJhQAAJeGuGvQGuGuJfAAQJhAAGumuQGvmvAApeQAAphmvmvQmumuphAAQpfAAmuGug");
	var mask_graphics_92 = new cjs.Graphics().p("EgehA9FMAAAh6JMA9DAAAMAAAB6JgAwm3uQnAHAAAJ7QAAJ4HAHBQHAHAJ5AAQJ6AAHAnAQHBnBAAp4QAAp7nBnAQnAnAp6AAQp5AAnAHAg");
	var mask_graphics_93 = new cjs.Graphics().p("Egf4A/yMAAAh/jMA/xAAAMAAAB/jgAxV4xQnUHUAAKXQAAKUHUHUQHUHVKVAAQKWAAHUnVQHVnUAAqUQAAqXnVnUQnUnUqWAAQqVAAnUHUg");
	var mask_graphics_94 = new cjs.Graphics().p("EghWBCuMAAAiFbMBCtAAAMAAACFbgAyI56QnqHpAAK2QAAKyHqHrQHqHpKzAAQK0AAHqnpQHqnrAAqyQAAq2nqnpQnqnqq0AAQqzAAnqHqg");
	var mask_graphics_95 = new cjs.Graphics().p("Egi7BF5MAAAiLxMBF3AAAMAAACLxgAy/7JQoBIBAALWQAALTIBICQIBIBLUAAQLVAAIBoBQICoCAArTQAArWoCoBQoBoBrVAAQrUAAoBIBg");
	var mask_graphics_96 = new cjs.Graphics().p("EgkoBJTMAAAiSlMBJRAAAMAAACSlgAz68eQoaIaAAL6QAAL2IaIbQIZIaL4AAQL5AAIaoaQIaobAAr2QAAr6oaoaQoaoar5AAQr4AAoZIag");
	var mask_graphics_97 = new cjs.Graphics().p("EgmdBM8MAAAiZ3MBM7AAAMAAACZ3gA0694Qo0I0AAMgQAAMcI0I2QI1I0MdAAQMfAAI0o0QI2o2AAscQAAsgo2o0Qo0o1sfAAQsdAAo1I1g");
	var mask_graphics_98 = new cjs.Graphics().p("EgoZBQ0MAAAihnMBQzAAAMAAAChngA19/ZQpRJRAANIQAANFJRJSQJRJRNFAAQNHAAJRpRQJSpSAAtFQAAtIpSpRQpRpRtHAAQtFAApRJRg");
	var mask_graphics_99 = new cjs.Graphics().p("EgqcBU7MAAAip1MBU5AAAMAAACp1gEgXFgg/QpvJvAANzQAANvJvJwQJvJvNxAAQNxAAJvpvQJwpwAAtvQAAtzpwpvQpvpvtxAAQtxAApvJvg");
	var mask_graphics_100 = new cjs.Graphics().p("EgsnBZRMAAAiyhMBZPAAAMAAACyhgEgYRgirQqPKPAAOgQAAOcKPKQQKQKPOdAAQOfAAKPqPQKQqQAAucQAAugqQqPQqPqPufAAQudAAqQKPg");
	var mask_graphics_101 = new cjs.Graphics().p("Egu6Bd2MAAAi7rMBd1AAAMAAAC7rgEgZggkdQqxKxAAPPQAAPMKxKyQKwKwPOAAQPOAAKwqwQKyqyAAvMQAAvPqyqxQqwqxvOAAQvOAAqwKxg");
	var mask_graphics_102 = new cjs.Graphics().p("EgxUBiqMAAAjFTMBipAAAMAAADFTgEga0gmVQrULUAAQBQAAP+LULWQLULUP/AAQQAAALUrUQLVrWAAv+QAAwBrVrUQrUrUwAAAQv/AArULUg");
	var mask_graphics_103 = new cjs.Graphics().p("Egz1BntMAAAjPZMBnrAAAMAAADPZgEgcMgoSQr5L5AAQ1QAAQzL5L6QL5L5Q0AAQQ0AAL5r5QL6r6AAwzQAAw1r6r5Qr5r6w0AAQw0AAr5L6g");
	var mask_graphics_104 = new cjs.Graphics().p("Eg2eBs/MAAAjZ9MBs9AAAMAAADZ9gEgdogqWQsgMgAARtQAARpMgMhQMgMgRqAAQRsAAMgsgQMhshAAxpQAAxtshsgQsgsgxsAAQxqAAsgMgg");
	var mask_graphics_105 = new cjs.Graphics().p("Eg5PByhMAAAjlBMByfAAAMAAADlBgEgfIgsfQtINIAASmQAASjNINJQNINJSkAAQSlAANItJQNKtJAAyjQAAymtKtIQtItJylAAQykAAtINJg");
	var mask_graphics_106 = new cjs.Graphics().p("Eg8HB4RMAAAjwhMB4PAAAMAAADwhgEggsguuQtzNyAATiQAATeNzN0QNyNzTgAAQTgAANztzQN0t0AAzeQAAzit0tyQtztzzgAAQzgAAtyNzg");
	var mask_graphics_107 = new cjs.Graphics().p("Eg/HB+QMAAAj8fMB+PAAAMAAAD8fgEgiUgxDQufOeAAUgQAAUdOfOgQOeOeUeAAQUeAAOfueQOgugAA0dQAA0gugueQufuf0eAAQ0eAAueOfg");
	var mask_graphics_108 = new cjs.Graphics().p("EhCOCEfMAAAkI9MCEdAAAMAAAEI9gEgkBgzeQvMPMAAVhQAAVdPMPNQPMPNVfAAQVfAAPMvNQPOvNAA1dQAA1hvOvMQvMvM1fAAQ1fAAvMPMg");
	var mask_graphics_109 = new cjs.Graphics().p("EhFdCK8MAAAkV3MCK7AAAMAAAEV3gEglxg1/Qv8P8AAWjQAAWhP8P9QP7P7WiAAQWiAAP8v7QP9v9AA2hQAA2jv9v8Qv8v72iAAQ2iAAv7P7g");
	var mask_graphics_110 = new cjs.Graphics().p("EhIzCRoMAAAkjPMCRnAAAMAAAEjPgEgnmg4lQwtQtAAXpQAAXlQtQvQQtQsXnAAQXoAAQswsQQvwvAA3lQAA3pwvwtQwswt3oAAQ3nAAwtQtg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:150,y:300}).wait(81).to({graphics:mask_graphics_81,x:150,y:300}).wait(1).to({graphics:mask_graphics_82,x:150,y:300.1}).wait(1).to({graphics:mask_graphics_83,x:150,y:300.6}).wait(1).to({graphics:mask_graphics_84,x:150,y:301.3}).wait(1).to({graphics:mask_graphics_85,x:150,y:302.3}).wait(1).to({graphics:mask_graphics_86,x:150,y:303.6}).wait(1).to({graphics:mask_graphics_87,x:150,y:305.1}).wait(1).to({graphics:mask_graphics_88,x:150,y:307}).wait(1).to({graphics:mask_graphics_89,x:150,y:309.1}).wait(1).to({graphics:mask_graphics_90,x:150,y:311.6}).wait(1).to({graphics:mask_graphics_91,x:150,y:314.3}).wait(1).to({graphics:mask_graphics_92,x:150,y:317.3}).wait(1).to({graphics:mask_graphics_93,x:150,y:320.5}).wait(1).to({graphics:mask_graphics_94,x:150,y:324.1}).wait(1).to({graphics:mask_graphics_95,x:150,y:328}).wait(1).to({graphics:mask_graphics_96,x:150,y:332.1}).wait(1).to({graphics:mask_graphics_97,x:150,y:336.5}).wait(1).to({graphics:mask_graphics_98,x:150,y:341.2}).wait(1).to({graphics:mask_graphics_99,x:150,y:346.2}).wait(1).to({graphics:mask_graphics_100,x:150,y:351.5}).wait(1).to({graphics:mask_graphics_101,x:150,y:357.1}).wait(1).to({graphics:mask_graphics_102,x:150,y:362.9}).wait(1).to({graphics:mask_graphics_103,x:150,y:369.1}).wait(1).to({graphics:mask_graphics_104,x:150,y:375.5}).wait(1).to({graphics:mask_graphics_105,x:150,y:382.2}).wait(1).to({graphics:mask_graphics_106,x:150,y:389.2}).wait(1).to({graphics:mask_graphics_107,x:150,y:396.5}).wait(1).to({graphics:mask_graphics_108,x:150,y:404}).wait(1).to({graphics:mask_graphics_109,x:150,y:411.9}).wait(1).to({graphics:mask_graphics_110,x:150,y:420}).wait(1).to({graphics:null,x:0,y:0}).wait(60));

	// bg
	this.instance_7 = new lib.bg2_1();
	this.instance_7.setTransform(150,300,1,1,0,0,0,150,300);

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},111).wait(60));

	// women2
	this.instance_8 = new lib.women2_1();
	this.instance_8.setTransform(94.8,389,0.9,0.9,0,0,0,57.5,121);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(30).to({rotation:6},10,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(1).to({rotation:6},10,cjs.Ease.get(1)).to({rotation:0},10,cjs.Ease.get(1)).wait(6).to({regY:60.5,scaleX:1,scaleY:1,x:23.5,y:559.6},18,cjs.Ease.get(-1)).to({_off:true},1).wait(75));

	// Layer 2
	this.instance_9 = new lib.o();
	this.instance_9.setTransform(106.5,331.1,0.94,0.94,0,0,0,50,50);
	this.instance_9.alpha = 0.109;
	this.instance_9.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_9.cache(-2,-2,104,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({x:112},10,cjs.Ease.get(1)).to({x:106.5},10,cjs.Ease.get(1)).wait(1).to({x:112},10,cjs.Ease.get(1)).to({x:106.5},10,cjs.Ease.get(1)).wait(6).to({x:39.5,y:554.1},18,cjs.Ease.get(-1)).to({_off:true},1).wait(75));

	// women
	this.instance_10 = new lib.women1_1();
	this.instance_10.setTransform(34,63);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(82).to({regX:150,regY:222,scaleX:1,scaleY:1,x:184,y:285},0).wait(1).to({scaleX:1,scaleY:1,x:183.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:183.8},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:183.7},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:183.5},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:183.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:182.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,x:182.6},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:182.2},0).wait(1).to({scaleX:1.16,scaleY:1.16,x:181.8},0).wait(1).to({scaleX:1.19,scaleY:1.19,x:181.3},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:180.9},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:180.4},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:179.9},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:179.5,y:285.1},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:179.2,y:285},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:178.8,y:285.1},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:178.5},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:178.2,y:285},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:177.9},0).wait(1).to({scaleX:1.45,scaleY:1.45,x:177.8,y:285.1},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:177.6},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:177.4,y:285},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:177.3},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:177.2,y:285.1},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:177.1,y:285},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({scaleX:1.5,scaleY:1.5},0).wait(1).to({regX:0,regY:0,scaleX:1.5,scaleY:1.5,x:-48,y:-48},0).wait(1).to({regX:150,regY:222,scaleX:1.5,scaleY:1.5,x:177,y:284.9},0).wait(1).to({scaleX:1.5,scaleY:1.5,x:176.8,y:284.5},0).wait(1).to({scaleX:1.49,scaleY:1.49,x:176.5,y:283.9},0).wait(1).to({scaleX:1.48,scaleY:1.48,x:176.1,y:282.9},0).wait(1).to({scaleX:1.47,scaleY:1.47,x:175.5,y:281.5},0).wait(1).to({scaleX:1.46,scaleY:1.46,x:174.8,y:279.8},0).wait(1).to({scaleX:1.44,scaleY:1.44,x:173.9,y:277.8},0).wait(1).to({scaleX:1.42,scaleY:1.42,x:172.9,y:275.4},0).wait(1).to({scaleX:1.4,scaleY:1.4,x:171.7,y:272.6},0).wait(1).to({scaleX:1.38,scaleY:1.38,x:170.4,y:269.5},0).wait(1).to({scaleX:1.35,scaleY:1.35,x:169,y:266.2},0).wait(1).to({scaleX:1.32,scaleY:1.32,x:167.4,y:262.6},0).wait(1).to({scaleX:1.29,scaleY:1.29,x:165.8,y:258.9},0).wait(1).to({scaleX:1.26,scaleY:1.26,x:164.2,y:255.2},0).wait(1).to({scaleX:1.23,scaleY:1.23,x:162.7,y:251.5},0).wait(1).to({scaleX:1.21,scaleY:1.21,x:161.2,y:248},0).wait(1).to({scaleX:1.18,scaleY:1.18,x:159.7,y:244.6},0).wait(1).to({scaleX:1.15,scaleY:1.15,x:158.4,y:241.5},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:157.2,y:238.6},0).wait(1).to({scaleX:1.11,scaleY:1.11,x:156.1,y:236},0).wait(1).to({scaleX:1.09,scaleY:1.09,x:155,y:233.6},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:154.1,y:231.6},0).wait(1).to({scaleX:1.06,scaleY:1.06,x:153.3,y:229.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:152.6,y:228.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,x:152,y:226.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,x:151.5,y:225.5},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:151.1,y:224.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.8,y:223.8},0).wait(1).to({scaleX:1.01,scaleY:1.01,x:150.5,y:223.1},0).wait(1).to({scaleX:1,scaleY:1,x:150.3,y:222.7},0).wait(1).to({scaleX:1,scaleY:1,x:150.2,y:222.3},0).wait(1).to({scaleX:1,scaleY:1,x:150.1,y:222.1},0).wait(1).to({regX:0,regY:0,x:0,y:0},0).wait(28));

	// bg
	this.instance_11 = new lib.bg3();

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(171));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,334,600);


(lib.p4_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_53 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(53).call(this.frame_53).wait(1));

	// Layer 4
	this.instance = new lib.light2();
	this.instance.setTransform(42,58.2,0.818,0.179,30,0,0,23.7,23.5);
	this.instance.alpha = 0;
	this.instance.compositeOperation = "lighter";
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({regY:23.4,scaleX:0.87,scaleY:0.26,rotation:22.2,x:63.2,y:69.8,alpha:0.43},22,cjs.Ease.get(1)).to({regX:23.6,regY:23.3,scaleX:0.39,scaleY:0.2,rotation:16.5,x:73.6,y:74.1,alpha:0},23).wait(1));

	// Layer 5
	this.instance_1 = new lib.light2();
	this.instance_1.setTransform(125.1,64.2,0.651,0.128,-30,0,0,23.9,24);
	this.instance_1.alpha = 0;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({regY:24.1,scaleX:1.07,scaleY:0.21,rotation:-15,x:97.1,y:76,alpha:0.238},22,cjs.Ease.get(1)).to({regX:23.7,scaleX:0.33,scaleY:0.13,x:92,y:78.5,alpha:0},23).wait(1));

	// Layer 3
	this.instance_2 = new lib.p4_1();
	this.instance_2.setTransform(85.4,0,0.97,0.908,0,0,0,88,0);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({scaleY:0.97,alpha:1},30,cjs.Ease.get(1)).wait(24));

	// Layer 6
	this.instance_3 = new lib.p4_msk();
	this.instance_3.setTransform(86.6,65.2,1.953,1.953,0,0,0,25.9,-3);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	this.instance_3.filters = [new cjs.BlurFilter(4, 4, 1)];
	this.instance_3.cache(0,-5,53,17);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(15).to({_off:false},0).to({y:70.2,alpha:0.352},31,cjs.Ease.get(1)).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,170.7,88.1);


(lib.p1_ani = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"play":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_44 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Layer 4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AsyNCQlUlagBnoQABnnFUlaQFUlZHeAAQHfAAFVFZQFTFaABHnQgBHolTFaQlVFZnfAAQneAAlUlZg");
	mask.setTransform(116,117);

	// Layer 2
	this.instance = new lib.p1_msk1();
	this.instance.setTransform(116,60.9,1.01,1,0,0,0,115,62.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({scaleY:1.08,y:48.5,alpha:1},25).wait(13));

	// Layer 11
	this.instance_1 = new lib.light1();
	this.instance_1.setTransform(-21.7,25.1,0.674,2.948,19.6,0,0,38,38);
	this.instance_1.alpha = 0.102;
	this.instance_1.compositeOperation = "lighter";
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({scaleX:2.17,scaleY:2.76,rotation:37.7,x:107.4,y:99.6,alpha:0},36).wait(2));

	// Layer 3
	this.instance_2 = new lib.light1();
	this.instance_2.setTransform(-31.7,15.1,1.046,2.948,19.6,0,0,38,38);
	this.instance_2.alpha = 0.16;
	this.instance_2.compositeOperation = "lighter";
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).to({scaleX:2.57,scaleY:2.76,rotation:37.7,x:209.3,y:169.1,alpha:0},39).wait(5));

	// Layer 1
	this.instance_3 = new lib.p1_1();
	this.instance_3.setTransform(116,118,1,1,0,0,0,116,118);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232,236);


(lib.p_line2 = function() {
	this.initialize();

	// Layer 2
	this.instance = new lib.light1();
	this.instance.setTransform(9.2,10.5,0.402,0.018,-0.9,0,0,38.1,31);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(35,5,0,0)","#230500","#230500","rgba(35,5,0,0)"],[0,0.349,0.671,1],-38.9,3.6,37.6,3.6).s().p("AkFAfIhGgBIBGgBQBigBBWgHIAHgBQBugJBjgLQBmgLAkgHIA3gMQgTAGgoAJQgnAIg7AJQg7AKieALIgcACQhlAGhYAAIgCAAg");
	this.shape.setTransform(33.2,7.8);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6.2,4.7,72.7,6.8);


(lib.p_line1 = function() {
	this.initialize();

	// Layer 4
	this.instance = new lib.light1();
	this.instance.setTransform(47.2,9.4,0.481,0.02,-6.8,0,0,37.9,34.7);

	// Layer 2
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(35,5,0,0)","#230500","#230500","rgba(35,5,0,0)"],[0,0.325,0.706,1],-55.9,-4.8,43.9,-4.8).s().p("AhqAWQiYgGjZgpQIVBHGjg6Qh6AdicAGQhIADhGAAQhSAAhRgEg");
	this.shape.setTransform(3.3,9.9);

	// Layer 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["rgba(35,5,0,0)","#230500"],[0,1],-41.9,5.8,-3.3,5.8).s().p("ACegvIAAAMQgPA3ksAcQEhgkAag7g");
	this.shape_1.setTransform(59.1,5.2);

	// Layer 3
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["rgba(35,5,0,0)","#230500"],[0,1],11.3,-1,-14.1,-1).s().p("Ah8gSIAAgcQAfAyDaAqQjOgagrgmg");
	this.shape_2.setTransform(-43.9,4.7);

	this.addChild(this.shape_2,this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-56.5,0,131.5,12.5);


(lib.p_all = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"play":1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_121 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(121).call(this.frame_121).wait(1));

	// Layer 15
	this.instance = new lib.p_line2();
	this.instance.setTransform(156.5,103.1,1.76,4.28,0,0,0,33.2,4.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({scaleY:1.76,y:27.3,alpha:0.52},23,cjs.Ease.get(1)).wait(76));

	// Layer 14
	this.instance_1 = new lib.p_line1();
	this.instance_1.setTransform(116.4,38.1,1.76,4.588,0,0,0,9.3,-0.4);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(23).to({_off:false},0).to({scaleY:1.76,y:-21.7,alpha:1},23,cjs.Ease.get(1)).wait(76));

	// Layer 1
	this.p2 = new lib.p1_ani();
	this.p2.setTransform(116,0,1,1,0,0,0,116,0);

	this.timeline.addTween(cjs.Tween.get(this.p2).wait(1).to({scaleY:0.55,y:-20},21,cjs.Ease.get(-1)).wait(1).to({scaleY:0.49},0).to({scaleY:0.17,y:-40},23,cjs.Ease.get(1)).wait(76));

	// Layer 7 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_23 = new cjs.Graphics().p("AxRG9QnLlBAAnDIAAgIMAw5AAAIAAAIQAAHDnLFBQnLFBqHAAQqGAAnLlBg");
	var mask_graphics_24 = new cjs.Graphics().p("AxRGiQnLlAAAnDIAAgIMAw5AAAIAAAIQAAHDnLFAQnLFCqHAAQqGAAnLlCg");
	var mask_graphics_25 = new cjs.Graphics().p("AxRGJQnLlAAAnDIAAgJMAw5AAAIAAAJQAAHDnLFAQnLFBqHAAQqGAAnLlBg");
	var mask_graphics_26 = new cjs.Graphics().p("AxRFxQnLlAAAnEIAAgIMAw5AAAIAAAIQAAHEnLFAQnLFBqHAAQqGAAnLlBg");
	var mask_graphics_27 = new cjs.Graphics().p("AxRFaQnLlAAAnDIAAgIMAw5AAAIAAAIQAAHDnLFAQnLFCqHAAQqGAAnLlCg");
	var mask_graphics_28 = new cjs.Graphics().p("AxRFFQnLlBAAnDIAAgIMAw5AAAIAAAIQAAHDnLFBQnLFBqHAAQqGAAnLlBg");
	var mask_graphics_29 = new cjs.Graphics().p("AxREwQnLk+AAnGIAAgIMAw5AAAIAAAIQAAHGnLE+QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_30 = new cjs.Graphics().p("AxREdQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_31 = new cjs.Graphics().p("AxRELQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_32 = new cjs.Graphics().p("AxRD6QnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_33 = new cjs.Graphics().p("AxRDqQnLk+AAnGIAAgIMAw5AAAIAAAIQAAHGnLE+QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_34 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_35 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_36 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_37 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_38 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_39 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_40 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_41 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_42 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_43 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_44 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_45 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");
	var mask_graphics_46 = new cjs.Graphics().p("AxRDmQnLk/AAnFIAAgIMAw5AAAIAAAIQAAHFnLE/QnLFBqHAAQqGAAnLlBg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(23).to({graphics:mask_graphics_23,x:116,y:76.7}).wait(1).to({graphics:mask_graphics_24,x:116,y:74}).wait(1).to({graphics:mask_graphics_25,x:116,y:71.5}).wait(1).to({graphics:mask_graphics_26,x:116,y:69.1}).wait(1).to({graphics:mask_graphics_27,x:116,y:66.8}).wait(1).to({graphics:mask_graphics_28,x:116,y:64.6}).wait(1).to({graphics:mask_graphics_29,x:116,y:62.6}).wait(1).to({graphics:mask_graphics_30,x:116,y:60.7}).wait(1).to({graphics:mask_graphics_31,x:116,y:58.8}).wait(1).to({graphics:mask_graphics_32,x:116,y:57.1}).wait(1).to({graphics:mask_graphics_33,x:116,y:55.6}).wait(1).to({graphics:mask_graphics_34,x:116,y:53}).wait(1).to({graphics:mask_graphics_35,x:116,y:50.3}).wait(1).to({graphics:mask_graphics_36,x:116,y:47.9}).wait(1).to({graphics:mask_graphics_37,x:116,y:45.6}).wait(1).to({graphics:mask_graphics_38,x:116,y:43.7}).wait(1).to({graphics:mask_graphics_39,x:116,y:41.9}).wait(1).to({graphics:mask_graphics_40,x:116,y:40.4}).wait(1).to({graphics:mask_graphics_41,x:116,y:39.1}).wait(1).to({graphics:mask_graphics_42,x:116,y:38}).wait(1).to({graphics:mask_graphics_43,x:116,y:37.2}).wait(1).to({graphics:mask_graphics_44,x:116,y:36.6}).wait(1).to({graphics:mask_graphics_45,x:116,y:36.3}).wait(1).to({graphics:mask_graphics_46,x:116,y:36.2}).wait(76));

	// Layer 6
	this.instance_2 = new lib.p_color();
	this.instance_2.setTransform(116,-20,1.004,2.571,0,0,0,115.5,0);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(23).to({_off:false},0).to({scaleY:1},23,cjs.Ease.get(1)).wait(76));

	// Layer 11 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_1 = new cjs.Graphics().p("AsyM3QlUlnAAn7IAAgJMAkNAAAIAAAJQAAH7lUFnQlUFonfAAQneAAlUlog");
	var mask_1_graphics_2 = new cjs.Graphics().p("AszM2QlUlnAAn7IAAgJMAkPAAAIAAAJQAAH7lUFnQlUFongAAQnfAAlUlog");
	var mask_1_graphics_3 = new cjs.Graphics().p("As1MzQlVlnAAn5IAAgKMAkVAAAIAAAKQAAH5lVFnQlVFonhAAQngAAlVlog");
	var mask_1_graphics_4 = new cjs.Graphics().p("As4MvQlXlmAAn6IAAgJMAkfAAAIAAAJQAAH6lXFmQlWFnnjAAQniAAlWlng");
	var mask_1_graphics_5 = new cjs.Graphics().p("As9MpQlYlmAAn4IAAgJMAkrAAAIAAAJQAAH4lYFmQlYFnnmAAQnlAAlYlng");
	var mask_1_graphics_6 = new cjs.Graphics().p("AtDMhQlallAAn3IAAgJMAk7AAAIAAAJQAAH3laFlQlbFmnpAAQnoAAlblmg");
	var mask_1_graphics_7 = new cjs.Graphics().p("AtKMYQlelkAAn2IAAgJMAlRAAAIAAAJQAAH2leFkQleFlntAAQnsAAlellg");
	var mask_1_graphics_8 = new cjs.Graphics().p("AtSMNQliljAAn0IAAgJMAlpAAAIAAAJQAAH0liFjQlhFknyAAQnxAAlhlkg");
	var mask_1_graphics_9 = new cjs.Graphics().p("AtcMAQllliAAnyIAAgJMAmDAAAIAAAJQAAHyllFiQllFin4AAQn3AAlllig");
	var mask_1_graphics_10 = new cjs.Graphics().p("AtnLxQlqlgAAnwIAAgJMAmjAAAIAAAJQAAHwlqFgQlqFhn+AAQn9AAlqlhg");
	var mask_1_graphics_11 = new cjs.Graphics().p("AtzLhQlvleAAnuIAAgJMAnFAAAIAAAJQAAHulvFeQlvFfoFAAQoEAAlvlfg");
	var mask_1_graphics_12 = new cjs.Graphics().p("AuBLPQl1lcAAnsIAAgJMAntAAAIAAAJQAAHsl1FcQl1FeoNAAQoMAAl1leg");
	var mask_1_graphics_13 = new cjs.Graphics().p("AuQK7Ql7laAAnpIAAgIMAoXAAAIAAAIQAAHpl7FaQl7FcoWAAQoVAAl7lcg");
	var mask_1_graphics_14 = new cjs.Graphics().p("AugKmQmClYAAnmIAAgIMApFAAAIAAAIQAAHmmCFYQmBFZogAAQofAAmBlZg");
	var mask_1_graphics_15 = new cjs.Graphics().p("AuyKPQmJlWAAniIAAgJMAp3AAAIAAAJQAAHimJFWQmJFXoqAAQopAAmJlXg");
	var mask_1_graphics_16 = new cjs.Graphics().p("AvFJ2QmQlTAAnfIAAgIMAqrAAAIAAAIQAAHfmQFTQmRFUo1AAQo0AAmRlUg");
	var mask_1_graphics_17 = new cjs.Graphics().p("AvZJbQmZlQAAnbIAAgIMArlAAAIAAAIQAAHbmZFQQmZFSpBAAQpAAAmZlSg");
	var mask_1_graphics_18 = new cjs.Graphics().p("AvuI/QmilOAAnWIAAgIMAshAAAIAAAIQAAHWmiFOQmiFPpNAAQpMAAmilPg");
	var mask_1_graphics_19 = new cjs.Graphics().p("AwFIhQmrlLAAnSIAAgIMAthAAAIAAAIQAAHSmrFLQmrFMpbAAQpaAAmrlMg");
	var mask_1_graphics_20 = new cjs.Graphics().p("AwdIBQm1lHAAnNIAAgJMAulAAAIAAAJQAAHNm1FHQm1FJppAAQpoAAm1lJg");
	var mask_1_graphics_21 = new cjs.Graphics().p("Aw2HgQnAlEAAnJIAAgIMAvtAAAIAAAIQAAHJnAFEQm/FFp4AAQp3AAm/lFg");
	var mask_1_graphics_22 = new cjs.Graphics().p("AxRG9QnLlBAAnDIAAgIMAw5AAAIAAAIQAAHDnLFBQnLFBqHAAQqGAAnLlBg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(1).to({graphics:mask_1_graphics_1,x:116,y:118.4}).wait(1).to({graphics:mask_1_graphics_2,x:116,y:118.3}).wait(1).to({graphics:mask_1_graphics_3,x:116,y:118}).wait(1).to({graphics:mask_1_graphics_4,x:116,y:117.5}).wait(1).to({graphics:mask_1_graphics_5,x:116,y:116.8}).wait(1).to({graphics:mask_1_graphics_6,x:116,y:116}).wait(1).to({graphics:mask_1_graphics_7,x:116,y:114.9}).wait(1).to({graphics:mask_1_graphics_8,x:116,y:113.7}).wait(1).to({graphics:mask_1_graphics_9,x:116,y:112.3}).wait(1).to({graphics:mask_1_graphics_10,x:116,y:110.7}).wait(1).to({graphics:mask_1_graphics_11,x:116,y:108.9}).wait(1).to({graphics:mask_1_graphics_12,x:116,y:106.9}).wait(1).to({graphics:mask_1_graphics_13,x:116,y:104.7}).wait(1).to({graphics:mask_1_graphics_14,x:116,y:102.4}).wait(1).to({graphics:mask_1_graphics_15,x:116,y:99.8}).wait(1).to({graphics:mask_1_graphics_16,x:116,y:97.1}).wait(1).to({graphics:mask_1_graphics_17,x:116,y:94.1}).wait(1).to({graphics:mask_1_graphics_18,x:116,y:91}).wait(1).to({graphics:mask_1_graphics_19,x:116,y:87.7}).wait(1).to({graphics:mask_1_graphics_20,x:116,y:84.2}).wait(1).to({graphics:mask_1_graphics_21,x:116,y:80.5}).wait(1).to({graphics:mask_1_graphics_22,x:116,y:76.7}).wait(1).to({graphics:null,x:0,y:0}).wait(99));

	// Layer 10
	this.instance_3 = new lib.p_color();
	this.instance_3.setTransform(116,-68,1.004,5.309,0,0,0,115.5,0);
	this.instance_3._off = true;

	this.instance_3.mask = mask_1;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).to({scaleY:2.83,y:-21},21,cjs.Ease.get(-1)).to({_off:true},1).wait(99));

	// Layer 18
	this.instance_4 = new lib.o();
	this.instance_4.setTransform(117.5,140.6,2.201,1.953,0,0,0,50,49.9);
	this.instance_4.alpha = 0.238;
	this.instance_4.filters = [new cjs.BlurFilter(12, 12, 1)];
	this.instance_4.cache(-2,-2,104,104);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({scaleY:1.57,y:76.6},21,cjs.Ease.get(-1)).wait(1).to({y:66.6},0).to({regY:50.1,scaleX:1.6,scaleY:0.51,y:28.7,alpha:0.109},23,cjs.Ease.get(1)).wait(76));

	// Layer 17
	this.instance_5 = new lib.shadow2();
	this.instance_5.setTransform(115.3,38.6,1,1,0,0,0,100.3,30.6);
	this.instance_5.alpha = 0.398;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(122));

	// Layer 4
	this.instance_6 = new lib.p3_1();
	this.instance_6.setTransform(115.5,118.1,0.98,0.98,-9,0,0,90.5,88);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(48).to({x:115.6},0).wait(1).to({x:115.9},0).wait(1).to({rotation:-8.9,x:116.4,y:118.2},0).wait(1).to({x:116.8,y:118.3},0).wait(1).to({rotation:-8.8,x:117.6,y:118.4},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-8.7,x:118.3,y:118.6},0).wait(1).to({x:119.3,y:118.8},0).wait(1).to({rotation:-8.6,x:120.5,y:119},0).wait(1).to({rotation:-8.4,x:121.9,y:119.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-8.3,x:123.5,y:119.5},0).wait(1).to({rotation:-8.1,x:125.3,y:119.9},0).wait(1).to({rotation:-8,x:127.4,y:120.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-7.8,x:129.7,y:120.8},0).wait(1).to({rotation:-7.5,x:132.4,y:121.3},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-7.3,x:135.3,y:121.8},0).wait(1).to({rotation:-7,x:138.6,y:122.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-6.7,x:142.2,y:123.2},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-6.3,x:146.2,y:123.9},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-6,x:150.5,y:124.7},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-5.6,x:155,y:125.6},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-5.2,x:159.8,y:126.5},0).wait(1).to({rotation:-4.7,x:164.7,y:127.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-4.3,x:169.7,y:128.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-3.9,x:174.5,y:129.4},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-3.5,x:179.3,y:130.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-3.1,x:183.8,y:131.1},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-2.7,x:188,y:132},0).wait(1).to({scaleX:1,scaleY:1,rotation:-2.4,x:191.9,y:132.7},0).wait(1).to({rotation:-2.1,x:195.4,y:133.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.8,x:198.7,y:134},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.5,x:201.7,y:134.6},0).wait(1).to({rotation:-1.3,x:204.3,y:135.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.1,x:206.6,y:135.5},0).wait(1).to({rotation:-0.9,x:208.7,y:135.9},0).wait(1).to({rotation:-0.8,x:210.6,y:136.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.6,x:212.2,y:136.6},0).wait(1).to({rotation:-0.5,x:213.6,y:136.9},0).wait(1).to({rotation:-0.4,x:214.8,y:137.1},0).wait(1).to({rotation:-0.3,x:215.9,y:137.3},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.2,x:216.8,y:137.5},0).wait(1).to({x:217.6,y:137.6},0).wait(1).to({rotation:-0.1,x:218.2,y:137.8},0).wait(1).to({x:218.7,y:137.9},0).wait(1).to({rotation:0,x:219},0).wait(1).to({x:219.2,y:138},0).wait(1).to({x:219.4},0).wait(1).to({x:219.5},0).wait(28));

	// Layer 16
	this.instance_7 = new lib.shadow1();
	this.instance_7.setTransform(114.2,117.2,1.6,1.6,0,0,0,52,52);
	this.instance_7.alpha = 0.551;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({x:114.4,y:117.3},0).wait(1).to({x:114.7,y:117.4},0).wait(1).to({x:115.1,y:117.5},0).wait(1).to({x:115.6,y:117.8},0).wait(1).to({x:116.2,y:118},0).wait(1).to({x:117,y:118.3},0).wait(1).to({x:118,y:118.7},0).wait(1).to({x:119.2,y:119.2},0).wait(1).to({x:120.5,y:119.7},0).wait(1).to({x:122.1,y:120.4},0).wait(1).to({x:123.9,y:121.1},0).wait(1).to({x:125.9,y:121.9},0).wait(1).to({x:128.2,y:122.8},0).wait(1).to({x:130.8,y:123.9},0).wait(1).to({x:133.7,y:125},0).wait(1).to({x:136.9,y:126.3},0).wait(1).to({x:140.5,y:127.8},0).wait(1).to({x:144.4,y:129.3},0).wait(1).to({x:148.6,y:131},0).wait(1).to({x:153,y:132.8},0).wait(1).to({x:157.7,y:134.7},0).wait(1).to({x:162.5,y:136.6},0).wait(1).to({x:167.4,y:138.6},0).wait(1).to({x:172.2,y:140.5},0).wait(1).to({x:176.8,y:142.4},0).wait(1).to({x:181.2,y:144.1},0).wait(1).to({x:185.4,y:145.8},0).wait(1).to({x:189.2,y:147.3},0).wait(1).to({x:192.7,y:148.8},0).wait(1).to({x:195.9,y:150},0).wait(1).to({x:198.8,y:151.2},0).wait(1).to({x:201.3,y:152.2},0).wait(1).to({x:203.6,y:153.2},0).wait(1).to({x:205.7,y:154},0).wait(1).to({x:207.5,y:154.7},0).wait(1).to({x:209.1,y:155.3},0).wait(1).to({x:210.5,y:155.9},0).wait(1).to({x:211.7,y:156.4},0).wait(1).to({x:212.7,y:156.8},0).wait(1).to({x:213.6,y:157.2},0).wait(1).to({x:214.4,y:157.5},0).wait(1).to({x:214.9,y:157.7},0).wait(1).to({x:215.4,y:157.9},0).wait(1).to({x:215.8,y:158},0).wait(1).to({x:216,y:158.1},0).wait(1).to({x:216.2,y:158.2},0).wait(29));

	// Layer 8
	this.instance_8 = new lib.p4_ani();
	this.instance_8.setTransform(117,164.5,1,1,0,0,0,88,48.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(70).to({_off:false},0).wait(52));

	// Layer 3
	this.instance_9 = new lib.p2_1();
	this.instance_9.setTransform(1,6,0.979,0.979);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(122));

	// Layer 2
	this.instance_10 = new lib.o();
	this.instance_10.setTransform(120.1,127.9,2.197,2.197,0,0,0,50.1,50);
	this.instance_10.alpha = 0.289;
	this.instance_10.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance_10.cache(-2,-2,104,104);

	this.instance_11 = new lib.o();
	this.instance_11.setTransform(126,127,2.32,2.32,0,0,0,50,50);
	this.instance_11.alpha = 0.172;
	this.instance_11.filters = [new cjs.BlurFilter(10, 10, 1)];
	this.instance_11.cache(-2,-2,104,104);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10}]}).wait(122));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-355,-260,939,668);


(lib.CTA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"endFrame":34,"in":35,"out":50});

	// timeline functions:
	this.frame_0 = function() {
		this.aniCom = false;
	}
	this.frame_34 = function() {
		this.dispatchEvent("ctaEnable");
		this.stop();
		this.aniCom = true;
	}
	this.frame_35 = function() {
		this.aniCom = false;
	}
	this.frame_49 = function() {
		this.stop();
		this.aniCom = true;
	}
	this.frame_50 = function() {
		this.aniCom = false;
	}
	this.frame_64 = function() {
		this.stop();
		this.aniCom = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(34).call(this.frame_34).wait(1).call(this.frame_35).wait(14).call(this.frame_49).wait(1).call(this.frame_50).wait(14).call(this.frame_64).wait(1));

	// Layer 9 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AoMCVIAAkpIQZAAIAAEpg");
	mask.setTransform(52.5,15);

	// Layer 2
	this.instance = new lib.cta_copy2();
	this.instance.setTransform(57,15.5,1,1,0,0,0,44,4.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).to({alpha:1},14,cjs.Ease.get(1)).wait(1).to({alpha:0},14,cjs.Ease.get(1)).wait(1));

	// Layer 10
	this.instance_1 = new lib.cta_copy1();
	this.instance_1.setTransform(57,15.5,1,1,0,0,0,44,4.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(11).to({_off:false},0).to({alpha:1},23).wait(1).to({alpha:0},14,cjs.Ease.get(1)).wait(1).to({alpha:1},14,cjs.Ease.get(1)).wait(1));

	// Layer 3
	this.instance_2 = new lib.hotspot();
	this.instance_2.setTransform(0,0,1.267,0.438);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	this.instance_2.filters = [new cjs.ColorFilter(0, 0, 0, 1, 195, 119, 99, 0)];
	this.instance_2.cache(-2,-2,94,77);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(11).to({_off:false},0).to({alpha:1},23).wait(1).to({alpha:0},14,cjs.Ease.get(1)).wait(1).to({alpha:1},14,cjs.Ease.get(1)).wait(1));

	// Layer 8
	this.instance_3 = new lib.line1();
	this.instance_3.setTransform(1,-53.5,1,1,-90,0,0,51.5,1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).wait(1).to({regX:64.2,y:-65.7,alpha:0.008},0).wait(1).to({y:-64.9,alpha:0.026},0).wait(1).to({y:-63.6,alpha:0.053},0).wait(1).to({y:-61.8,alpha:0.092},0).wait(1).to({y:-59.3,alpha:0.144},0).wait(1).to({y:-56.3,alpha:0.207},0).wait(1).to({y:-52.7,alpha:0.28},0).wait(1).to({y:-49,alpha:0.359},0).wait(1).to({y:-45.1,alpha:0.439},0).wait(1).to({y:-41.4,alpha:0.517},0).wait(1).to({y:-38,alpha:0.588},0).wait(1).to({y:-34.9,alpha:0.653},0).wait(1).to({y:-32.1,alpha:0.71},0).wait(1).to({y:-29.7,alpha:0.76},0).wait(1).to({y:-27.6,alpha:0.804},0).wait(1).to({y:-25.8,alpha:0.842},0).wait(1).to({y:-24.2,alpha:0.874},0).wait(1).to({y:-22.9,alpha:0.902},0).wait(1).to({y:-21.8,alpha:0.925},0).wait(1).to({y:-20.9,alpha:0.944},0).wait(1).to({y:-20.1,alpha:0.961},0).wait(1).to({y:-19.5,alpha:0.973},0).wait(1).to({y:-19,alpha:0.983},0).wait(1).to({y:-18.6,alpha:0.991},0).wait(1).to({y:-18.4,alpha:0.996},0).wait(1).to({y:-18.2,alpha:0.999},0).wait(1).to({regX:51.5,y:-5.5,alpha:1},0).wait(35));

	// Layer 5
	this.instance_4 = new lib.line1();
	this.instance_4.setTransform(104,81.5,1,1,90,0,0,51.5,1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(3).to({_off:false},0).wait(1).to({regX:64.2,y:93.8,alpha:0.008},0).wait(1).to({y:93.1,alpha:0.026},0).wait(1).to({y:91.9,alpha:0.053},0).wait(1).to({y:90.1,alpha:0.092},0).wait(1).to({y:87.9,alpha:0.144},0).wait(1).to({y:85.1,alpha:0.207},0).wait(1).to({y:81.9,alpha:0.28},0).wait(1).to({y:78.4,alpha:0.359},0).wait(1).to({y:74.9,alpha:0.439},0).wait(1).to({y:71.5,alpha:0.517},0).wait(1).to({y:68.3,alpha:0.588},0).wait(1).to({y:65.5,alpha:0.653},0).wait(1).to({y:63,alpha:0.71},0).wait(1).to({y:60.8,alpha:0.76},0).wait(1).to({y:58.9,alpha:0.804},0).wait(1).to({y:57.2,alpha:0.842},0).wait(1).to({y:55.8,alpha:0.874},0).wait(1).to({y:54.6,alpha:0.902},0).wait(1).to({y:53.6,alpha:0.925},0).wait(1).to({y:52.7,alpha:0.944},0).wait(1).to({y:52,alpha:0.961},0).wait(1).to({y:51.4,alpha:0.973},0).wait(1).to({y:51,alpha:0.983},0).wait(1).to({y:50.6,alpha:0.991},0).wait(1).to({y:50.4,alpha:0.996},0).wait(1).to({y:50.3,alpha:0.999},0).wait(1).to({regX:51.5,y:37.5,alpha:1},0).wait(35));

	// Layer 7
	this.instance_5 = new lib.line1();
	this.instance_5.setTransform(-52.5,1,1,1,180,0,0,51.5,1);
	this.instance_5.alpha = 0;

	this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:64.2,x:-63.5,alpha:0.013},0).wait(1).to({x:-59.5,alpha:0.044},0).wait(1).to({x:-53,alpha:0.095},0).wait(1).to({x:-43.6,alpha:0.168},0).wait(1).to({x:-31.5,alpha:0.261},0).wait(1).to({x:-17.8,alpha:0.367},0).wait(1).to({x:-3.9,alpha:0.475},0).wait(1).to({x:8.9,alpha:0.575},0).wait(1).to({x:20.2,alpha:0.662},0).wait(1).to({x:29.7,alpha:0.736},0).wait(1).to({x:37.7,alpha:0.798},0).wait(1).to({x:44.3,alpha:0.849},0).wait(1).to({x:49.6,alpha:0.89},0).wait(1).to({x:53.8,alpha:0.923},0).wait(1).to({x:57.2,alpha:0.949},0).wait(1).to({x:59.8,alpha:0.969},0).wait(1).to({x:61.6,alpha:0.983},0).wait(1).to({x:62.9,alpha:0.993},0).wait(1).to({x:63.6,alpha:0.998},0).wait(1).to({regX:51.5,x:76.5,alpha:1},0).wait(45));

	// Layer 1
	this.instance_6 = new lib.line1();
	this.instance_6.setTransform(158.5,29,1,1,0,0,0,51.5,1);
	this.instance_6.alpha = 0;

	this.instance_6.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(1).to({regX:64.2,x:169.6,alpha:0.013},0).wait(1).to({x:165.9,alpha:0.044},0).wait(1).to({x:159.7,alpha:0.095},0).wait(1).to({x:150.9,alpha:0.168},0).wait(1).to({x:139.6,alpha:0.261},0).wait(1).to({x:126.8,alpha:0.367},0).wait(1).to({x:113.7,alpha:0.475},0).wait(1).to({x:101.7,alpha:0.575},0).wait(1).to({x:91.1,alpha:0.662},0).wait(1).to({x:82.1,alpha:0.736},0).wait(1).to({x:74.7,alpha:0.798},0).wait(1).to({x:68.5,alpha:0.849},0).wait(1).to({x:63.6,alpha:0.89},0).wait(1).to({x:59.6,alpha:0.923},0).wait(1).to({x:56.4,alpha:0.949},0).wait(1).to({x:54,alpha:0.969},0).wait(1).to({x:52.3,alpha:0.983},0).wait(1).to({x:51.1,alpha:0.993},0).wait(1).to({x:50.5,alpha:0.998},0).wait(1).to({regX:51.5,x:37.5,alpha:1},0).wait(45));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.arow1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{once:25,"endFrame":48});

	// timeline functions:
	this.frame_48 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(48).call(this.frame_48).wait(1));

	// Layer 6
	this.instance = new lib.arrow2();
	this.instance.setTransform(-4.6,4.3,1,1,0,0,0,2.4,4.3);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).to({x:2.4,alpha:1},15).to({x:5.9,alpha:0.5},8).wait(1));

	// Layer 8
	this.instance_1 = new lib.arrow2();
	this.instance_1.setTransform(-4.6,4.3,1,1,0,0,0,2.4,4.3);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(40).to({_off:false},0).to({x:-1.1,alpha:0.801},8).wait(1));

	// Layer 7
	this.instance_2 = new lib.arrow2();
	this.instance_2.setTransform(2.4,4.3,1,1,0,0,0,2.4,4.3);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(25).to({_off:false},0).to({x:9.4,alpha:0},15).wait(9));

	// Layer 2
	this.instance_3 = new lib.arrow2();
	this.instance_3.setTransform(5.9,4.3,1,1,0,0,0,2.4,4.3);
	this.instance_3.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({x:9.4,alpha:0},8).to({_off:true},17).wait(24));

	// Layer 3
	this.instance_4 = new lib.arrow2();
	this.instance_4.setTransform(-1.1,4.3,1,1,0,0,0,2.4,4.3);
	this.instance_4.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({x:2.4,alpha:1},8).to({x:9.4,alpha:0},16).to({_off:true},1).wait(24));

	// Layer 4
	this.instance_5 = new lib.arrow2();
	this.instance_5.setTransform(9.4,4.3,1,1,0,0,0,2.4,4.3);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(8).to({x:-4.6},0).to({x:2.4,alpha:1},16).to({_off:true},1).wait(24));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.5,0,15.3,8.7);


// stage content:



(lib.banner = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{startAni:1,"endFrame":592});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_109 = function() {
		this.p1.gotoAndPlay("play");
		this.p1.p2.gotoAndPlay("play");
	}
	this.frame_408 = function() {
		this.p5.gotoAndPlay("play");
	}
	this.frame_599 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(109).call(this.frame_109).wait(299).call(this.frame_408).wait(191).call(this.frame_599).wait(1));

	// copy_10
	this.copy10 = new lib.copy10_1();
	this.copy10.setTransform(62,349.5,1,1,0,0,0,39,10.5);
	this.copy10.alpha = 0;
	this.copy10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.copy10).wait(549).to({_off:false},0).to({alpha:1},16).wait(35));

	// arrow
	this.arrow = new lib.arow1();
	this.arrow.setTransform(62.3,326.8,1,1,-90,0,0,4.2,4.3);
	this.arrow._off = true;

	this.timeline.addTween(cjs.Tween.get(this.arrow).wait(549).to({_off:false},0).wait(51));

	// p3
	this.p3 = new lib.p8_ani();
	this.p3.setTransform(-59.9,294.7,1,1,30,0,0,47.5,46.6);
	this.p3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.p3).wait(531).to({_off:false},0).to({regY:46.5,rotation:0,x:60.5,y:269.5},26,cjs.Ease.get(1)).wait(43));

	// CTA
	this.CTA = new lib.CTA();
	this.CTA.setTransform(164,485);
	this.CTA._off = true;

	this.timeline.addTween(cjs.Tween.get(this.CTA).wait(493).to({_off:false},0).wait(107));

	// logo
	this.logo = new lib.logo_1();
	this.logo.setTransform(94,548);
	this.logo.alpha = 0;
	this.logo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.logo).wait(1).to({_off:false},0).to({alpha:1},16).wait(583));

	// copy5
	this.instance = new lib.copy6_1();
	this.instance.setTransform(149.5,85.5,1,1,0,0,0,105.5,19.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(290).to({_off:false},0).to({alpha:1},18).wait(90).to({alpha:0},12).to({_off:true},1).wait(189));

	// copy4
	this.instance_1 = new lib.copy5_1();
	this.instance_1.setTransform(151.5,97.5,1,1,0,0,0,106.5,25.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(120).to({_off:false},0).to({alpha:1},19).wait(115).to({alpha:0},12).to({_off:true},1).wait(333));

	// copy3
	this.instance_2 = new lib.copy4_1();
	this.instance_2.setTransform(151.5,47,1,1,0,0,0,69.5,7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(120).to({_off:false},0).to({alpha:1},19).wait(115).to({alpha:0},12).to({_off:true},1).wait(333));

	// copy2
	this.instance_3 = new lib.copy2_1();
	this.instance_3.setTransform(149,108.5,1,1,0,0,0,97,8.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(59).to({_off:false},0).to({y:98.5,alpha:1},9,cjs.Ease.get(1)).wait(31).to({alpha:0},9).to({_off:true},1).wait(491));

	// copy1
	this.instance_4 = new lib.copy1_1();
	this.instance_4.setTransform(174,71.5,0.1,0.1,0,0,0,19,6.5);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(27).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(56).to({alpha:0},9).to({_off:true},1).wait(491));

	// copy1
	this.instance_5 = new lib.copy1_1();
	this.instance_5.setTransform(125,71.5,0.1,0.1,0,0,0,19,6.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(2).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},8,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},8,cjs.Ease.get(1)).wait(81).to({alpha:0},9).to({_off:true},1).wait(491));

	// p2
	this.p5 = new lib.p5_ani();
	this.p5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.p5).wait(279).to({_off:false},0).wait(321));

	// bg2
	this.instance_6 = new lib.bg2_1();
	this.instance_6.setTransform(150,300,1,1,0,0,0,150,300);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(254).to({_off:false},0).to({alpha:1},24,cjs.Ease.get(-1)).wait(322));

	// p1
	this.p1 = new lib.p_all();
	this.p1.setTransform(155,340.5,1,1,0,0,0,121,121.5);
	this.p1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.p1).wait(1).to({_off:false},0).wait(2).to({regX:152.3,regY:108.4,scaleX:1,scaleY:1,rotation:0.3,x:186.5,y:327.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.8,x:186.9,y:327.7},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:1.5,x:187.4,y:327.9},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:2.2,x:187.9,y:328.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:2.6,x:188.2,y:328.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:2.9,x:188.4,y:328.4},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:3,x:188.5},0).wait(1).to({regX:121,regY:121.5,scaleX:1.05,scaleY:1.05,x:155,y:340.5},0).to({scaleX:1,scaleY:1,rotation:0},8,cjs.Ease.get(1)).wait(10).to({regX:152.3,regY:108.4,scaleX:1,scaleY:1,rotation:-0.2,x:186.4,y:327.2},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-0.5,x:186.6,y:327},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:-1,x:186.8,y:326.5},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-1.5,x:187.1,y:326.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:-1.7,x:187.3,y:325.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-1.9,y:325.7},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-2,x:187.4},0).wait(1).to({regX:121,regY:121.5,scaleX:1.05,scaleY:1.05,x:155,y:340.5},0).to({scaleX:1,scaleY:1,rotation:0},8,cjs.Ease.get(1)).to({_off:true},241).wait(316));

	// bg1
	this.instance_7 = new lib.bg1_1();
	this.instance_7.setTransform(150,300,1,1,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({_off:true},284).wait(316));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(150,300,300,600);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;