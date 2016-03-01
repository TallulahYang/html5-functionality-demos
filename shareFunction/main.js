function initShare () {
	var sharer = {
		facebook : {
			appid : "1512469905671723",
			url: "http://1.sharetest2014.sinaapp.com",
			img: "http://b.hiphotos.baidu.com/image/pic/item/8c1001e93901213f397581d556e736d12f2e9571.jpg",
			name: "facebook name",
			description: "facebook description",
			redirect: "http://1.sharetest2014.sinaapp.com"
		},
		twitter: {
			text: "twitter text" 
		},
		tumblr: {
			img: "http://b.hiphotos.baidu.com/image/pic/item/8c1001e93901213f397581d556e736d12f2e9571.jpg",
			url: "http://www.markpoor.com",
			description: "It's a good game \n \ Welcome to http://www.baidu.com"
		},
		pinterest : {
			url:  "http://www.markpoor.com",
			img :  "http://fgm.cc/learn/lesson10/img/yxs/3.jpg",
			description:  "It's a good game Welcome to http://www.baidu.com"
		},
		email: {
			subject: "email subject",
			body: "email body"
		}
	}
	var $pinterest = $('.share_pinterest'),
		$facebook = $('.share_facebook'),
		$twitter = $('.share_twitter'),
		$tumblr = $('.share_tumblr'),
		$email = $('.share_email');
	$facebook.attr({
		"href": "https://www.facebook.com/dialog/feed?app_id=" + sharer.facebook.appid + 
				"&link=" + encodeURIComponent(sharer.facebook.url) + 
				"&picture=" + encodeURIComponent(sharer.facebook.img) +
				"&name=" +  encodeURIComponent(sharer.facebook.name) + 
				"&description=" + sharer.facebook.description + 
				"&redirect_uri=" + encodeURIComponent(sharer.facebook.redirect)
	});
	console.log($facebook)
	$twitter.attr({
		"href": "https://twitter.com/intent/tweet?text=" + sharer.twitter.text
	});
	$pinterest.attr({
		"href" : "http://www.pinterest.com/pin/create/button/?url=" + encodeURIComponent(sharer.pinterest.url) + "&media=" + encodeURIComponent(sharer.pinterest.img) + "&description=" + encodeURIComponent(sharer.pinterest.description)
	});
	$tumblr.attr({
		"href" : "http://www.tumblr.com/share/photo?source=" + encodeURIComponent(sharer.tumblr.img) + "&caption=" + encodeURIComponent(sharer.tumblr.description) + "&clickthru=" + encodeURIComponent(sharer.tumblr.url)
	})
	$email.attr({
		"href" : "mailto:?subject=" + sharer.email.subject + "&body=" + sharer.email.body
	});
}
function prepareDownload(){
	var $dCanvas = $('<canvas>').attr('width',612).attr('height',612);
	var tmpCanvasContext = $dCanvas[0].getContext('2d');
    tmpCanvasContext.fillStyle="#123456";
    tmpCanvasContext.fillRect(0,0,612,612);

    if(!platform.isDesktop){
    	$('<img>').attr('src',$dCanvas[0].toDataURL("image/jpeg")).appendTo($('.download-img')).css({
    		'position':'absolute',
    		'opacity':'0',
    		'top':'0px',
    		'left':'0',
    		'z-index':'3',
    		'width':'100%',
            'height':'100%'
        });
    }else{
    	console.log('asda');
    	$('.download-img').on('click',function(){
    		var type = 'jpg',name = 'hahaha';
            $dCanvas[0].toBlob(function(blob) {
                saveAs(blob, (name == ''?'yyyy':name) + '.' + type);
            });
    	});
    }
}

prepareDownload();
initShare();