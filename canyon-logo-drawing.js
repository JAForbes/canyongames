
function drawCanyonShadow(shadowX,shadowY,w,colour,sunX,sunY)
{
	shadowX = defaultValue(shadowX,100);
	shadowY = defaultValue(shadowY,100);
	colour = defaultValue(colour,"Blue");
	sunX = defaultValue(sunX,0);
	sunY = defaultValue(sunY,8);
	w =  defaultValue(w,100);

	var canvas = document.getElementById('canyon-canvas');
	var context = canvas.getContext('2d');
	// begin custom shape
	var widthEater = w*0.06;
	context.strokeStyle = colour;
	for (var i=0;i<9;i++)
	{
		context.lineWidth = 2/(i+1);
		context.beginPath();
		context.moveTo((i*sunX*-1)+(i*widthEater)+shadowX, shadowY+(i*sunY));

		context.lineTo((i*sunX*-1)+shadowX+w-(i*widthEater),shadowY+(i*sunY));  
		context.closePath();
		context.stroke(); 
	}
}

function drawMountain(x,y,w,h,colour,fill)
{
	var canvas = document.getElementById('canyon-canvas');
	var context = canvas.getContext('2d');
	// begin custom shape
	var widthEater = 6;
	context.strokeStyle = colour;
	context.lineWidth = 5;
	context.beginPath();
	context.moveTo(x,y);

	context.lineTo(x+(w/2),y-h);  
	context.lineTo(x+(w),y);  
	context.closePath();
	context.stroke();
	context.fillStyle = fill;
	context.fill();
}

function defaultValue(arg,defaultVal)
{
	arg = typeof arg !== 'undefined' ? arg :defaultVal;
	return arg;
}