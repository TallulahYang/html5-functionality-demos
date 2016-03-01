function a()
{
	var lib=fl.getDocumentDOM().library;
	for(var i in lib.items)
	{
		lib.items[i].name=lib.items[i].name.replace('hair_a','hair1_');
	}
}

b()
function b()
{
	var tl=fl.getDocumentDOM().getTimeline();
	var layers=tl.layers;
	for(var i in layers)
	{
		layers[i].name='l'+i;
	}
}



