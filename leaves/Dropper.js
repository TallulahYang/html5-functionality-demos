function Dropper(element, startPosition, endPosition, duration)
{
	this.element = element;
	this.startPositionOnYAxis = startPosition;
	this.endPositionOnYAxis = endPosition;
	this.duration = duration;
	this.timeout = null;
};
Dropper.prototype.start = function ()
{
	if (this.startPositionOnYAxis == this.endPositionOnYAxis) 
	{
		return;
	}
	this.startTime = new Date();
	this.endTime = this.startTime.getTime() + (this.duration * 1000);
	this.loop();
};

Dropper.prototype.loop = function ()
{
	var now = new Date();
	if (now >= this.endTime) 
	{
		this.setTopAttribute(this.endPositionOnYAxis);
		
		window.clearTimeout(this.timeout);
		
		this.start();
		return;
	}
	var offset = (now - this.startTime) / (this.duration * 1000);
	
	this.setTopAttribute(this.startPositionOnYAxis + (offset * (this.endPositionOnYAxis - this.startPositionOnYAxis)));
	
	this.setOpacity( (offset > 0.95) ? 1.0 - (offset - 0.95) * 20.0 : 1.0 );
	
	var _this = this;
	this.timeout = window.setTimeout(function () { _this.loop() }, 10);
};

Dropper.prototype.setTopAttribute = function (newTopPosition)
{
	this.element.style.top = pixelValue(newTopPosition);
};

Dropper.prototype.setOpacity = function (newOpacity)
{
	this.element.style.opacity = newOpacity;
};
