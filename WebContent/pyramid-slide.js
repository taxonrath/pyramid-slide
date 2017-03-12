var sliderVal = document.getElementById('slider');
var sliderLabel = document.getElementById('slider_label');
var symbolVal = document.getElementById('symbol');
var brickType = setBrickType();


function setBrickType() {
	brickType = symbolVal.value;
	drawPyramid(sliderVal.value, brickType);
	return brickType;
}


function setVisValue() {
	sliderLabel.innerHTML="How High?: " + sliderVal.value;
}


function sliderChanged() {
	drawPyramid(sliderVal.value, brickType);
}


function drawPyramid(height, brick) {
	setVisValue();
	document.getElementById('pyramid_field').innerHTML = '';
	
	// for each row
	for (var row = 0; row < height; row++) {
		
		// figure out number of bricks and spaces
		var numBricks = row + 2;
		var numSpaces = height - row - 1;
		
		// build up a string for this row
		var rowStr = '';
		for (var i = 0; i < numSpaces; i++) {
			var spaceChar = "&nbsp";
			rowStr += spaceChar;
		}
		for (var i = 0; i < numBricks; i++) {
			rowStr += brick;
		}
		
		// make a <p> element for this row, and inset it into the pyramid_field
		rowElem = document.createElement('p');
		rowElem.innerHTML = rowStr;
		document.getElementById('pyramid_field').appendChild(rowElem);
	}
}

