function Textures () {
	this.drawTexture = () => {
		for (var i = 0; i < BrickArray.length; i++) {
			if (BrickArray[i][1] == 3) {
			image(blockTexture3, BrickArray[i][0].x, BrickArray[i][0].y, [MainSize], [MainSize]);
			}
			if (BrickArray[i][1] == 2) {
			image(blockTexture2, BrickArray[i][0].x, BrickArray[i][0].y, [MainSize], [MainSize]);
			}
			if (BrickArray[i][1] == 1) {
			image(blockTexture1, BrickArray[i][0].x, BrickArray[i][0].y, [MainSize], [MainSize]);
			}
			if (BrickArray[i][1] == 0) {
				image(blockTexture0, BrickArray[i][0].x, BrickArray[i][0].y, [MainSize], [MainSize]);
			}
			if (BrickArray[i][1] == -1) {
				BrickArray[i][0].x = -MainSize;
				BrickArray[i][0].y = -MainSize;
			}

		}
	}
}

var createBlocksArray = (lvl) => {
    var coordArray = [];
    var count = 0;
    if (lvl == '0') {
	    for (var i = 0; i < numberofBlocks; i++) {
	      coordArray[i] = [createVector(getRandomInt(0, rows - 1) * MainSize, getRandomInt(0, cols - 1) * MainSize), 3];
	      if (coordArray[i][0].x == MainTank.x && coordArray[i][0].y == MainTank.y) {coordArray.splice(i,1)}
	    }
    	uniq(coordArray);
    	return coordArray;
	}
	if (lvl == '1') {
				for (var i = 0; i < rows - 1; i++) {
					for (var j = 0; j < cols - 1; j++) {
						if ((i % 2 == 1) && (j % 2 == 1)) {
							coordArray[count] = [createVector(i * MainSize, j * MainSize), 3];
							count++;
						}
					}
				}
		return coordArray;
	}
}