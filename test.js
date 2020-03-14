

function createRectangles() {  

	var tk=0;
	var rectangles = [];
	var outWrite = document.getElementById('win');
	var startTimer=0;
			var startTime, endTime;

			function start() {
 			 startTime = new Date();
				};

			function end() {
  			endTime = new Date();
  			var timeDiff = endTime - startTime; //in ms
  			// strip the ms
 			 timeDiff /= 1000;

  			// get seconds 
  			var seconds = Math.round(timeDiff);
  			return "for "+seconds+ " seconds";
}

		if (tk=1){
						start();
						}





	for (var i = 0; i < 20; i++) 
	{
		//var arrRect= new Array();
		var canvas = document.getElementById('canvas');
		var rectangle = document.createElement('div');
		rectangle.setAttribute('class', 'rectangle');
		rectangle.setAttribute('data-index', i);
		
		var recHeight = Math.round((Math.random() * 200) + 1);
		var recWidth  = Math.round((Math.random() * 500) + 1);
		
		var xPos = Math.round(Math.random() * 500);
		var yPos = Math.round(Math.random() * 200);
		// var rColor = '#' + Math.round(0xffffff * Math.random()).toString(16);
		/*var color1 = Math.round(255*Math.random());
		var color2 = Math.round(255*Math.random());
		var color3 = Math.round(255*Math.random());
		r = color1.toString(16);
		g = color2.toString(16);
		b = color3.toString(16);
		var rColor = '#'+r+g+b;

		if(rColor.length < 7){
			rColor=+'#d942f4';
		}else if (rColor.length = 0){
			rColor=+'#d942f4';
		} */
		function getRandomColor() {
			  var letters = '0123456789ABCDEF';
  			var color = '#';
 			 for (var i = 0; i < 6; i++) {
    			color += letters[Math.floor(Math.random() * 16)];
 			 }
 			 return color;
					}
		var rColor = getRandomColor();
					
		
		rectangles[i] = {
			x1: xPos,
			x2: xPos + recWidth,
			y1: yPos,
			y2: yPos + recHeight,
			dataIndex: i
		};
		

		rectangle.style.width = recWidth + 'px';
		rectangle.style.height = recHeight + 'px';
		rectangle.style.left = xPos + 'px';
		rectangle.style.top = yPos + 'px';
		rectangle.style.background = rColor;
		console.log(rColor);
		canvas.appendChild(rectangle);
		
		rectangle.onclick = function() {
			
			
			this.parentNode.removeChild(this);
			
						

			var n = this.getAttribute('data-index');
			for (var j = 0; j < rectangles.length; j++) {
				if (rectangles[j].dataIndex == n) {
					rectangles.splice(j, 1);
				}
			}
			tk++;
			if (checkRect(rectangles)) {
				var Lastrectangle = document.createElement('div');
				Lastrectangle.setAttribute("id", "lastRectangle");
				canvas.appendChild(Lastrectangle)
				console.log(Lastrectangle);
				/*outWrite.innerHTML ="The Last one !Well done!!!!!"+'\n\t'+"Rectangles are removed: "+(tk-1)+" pieces"+'\n\t'+end();*/
				lastRectangle.innerHTML ="<br><br><br>The Last one !Well done!!!!!"+'\n\t'+"Rectangles are removed: "+(tk-1)+" pcs"+'\n\t'+end();
										}																	
			
			
										
			


			
			
			
		}
		
	}

	return rectangles;
}
	
function checkRect (rectangles) {


	
	if (rectangles.length <= 1) {
		return true;
	}
	
	for (var i=0; i<rectangles.length; i++) {
		for (var j=0; j<rectangles.length; j++) {
			if (i == j) continue;
			console.log([i,j]);
			if (
				(
					rectangles[j].x1 >= rectangles[i].x1 &&
					rectangles[j].x1 <= rectangles[i].x2 &&
					rectangles[j].y1 >= rectangles[i].y1 &&
					rectangles[j].y1 <= rectangles[i].y2
				) || (
					rectangles[j].x2 >= rectangles[i].x1 &&
					rectangles[j].x2 <= rectangles[i].x2 &&
					rectangles[j].y1 >= rectangles[i].y1 &&
					rectangles[j].y1 <= rectangles[i].y2
				) || (
					rectangles[j].x1 >= rectangles[i].x1 &&
					rectangles[j].x1 <= rectangles[i].x2 &&
					rectangles[j].y2 >= rectangles[i].y1 &&
					rectangles[j].y2 <= rectangles[i].y2
				) || (
					rectangles[j].x2 >= rectangles[i].x1 &&
					rectangles[j].x2 <= rectangles[i].x2 &&
					rectangles[j].y2 >= rectangles[i].y1 &&
					rectangles[j].y2 <= rectangles[i].y2
				) || (
					rectangles[j].x1 >= rectangles[i].x1 &&
					rectangles[j].x2 >= rectangles[i].x1 &&
					rectangles[j].x1 <= rectangles[i].x2 &&
					rectangles[j].x2 <= rectangles[i].x2 &&
					rectangles[j].y1 <= rectangles[i].y1 &&
					rectangles[j].y1 <= rectangles[i].y2 &&
					rectangles[j].y2 >= rectangles[i].y1 &&
					rectangles[j].y2 >= rectangles[i].y2
				)
			) {
				return false;

			
			}
		}
	}
	return true;
	
}

//console.log(rectangles);//DLja razrabotki !!!!Steretj
    
/*
	width: 84px;
    height: 126px;
    left: 60px;
    top: 100px;
	
	width: 12px;
    height: 170px;
    left: 74px;
    top: 199px;
	
	    width: 494px;    
    height: 87px;         780
        left: 286px;
    top: 53px;
	
	    width: 176px;
    height: 279px;         333
        left: 157px;      
    top: 90px;
*/


