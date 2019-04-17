var MainTank = function (x, y) {
	this.live = true;
	this.x = x;
	this.y = y;
	this.Direction = 'UP';
	this.mainTankTexture = mainTankTextureUp;

	 		this.Shoot = false;
	 		this.ShootDirect;
	 		this.ShootX;
	 		this.ShootY;

	 this.move = (x, y) => {
	 		if (this.live) {
	 		this.x += x;
	 		this.y += y;
	 	}
	 }

//-----------------------------DRAWING-----------------------------//

	 this.show = () => {
	 		if (this.live) {
			image(this.mainTankTexture, this.x, this.y, [TankSize], [TankSize]);
			}
			if (this.Shoot) {
			image(fireMainTexture, this.ShootX, this.ShootY, ShootSize, ShootSize);
		 	 	if (this.ShootDirect == 'UP') {
		 	 			 		this.ShootX += 0;
								this.ShootY += -shootSpeed;
		 	 	}
		 	 	if (this.ShootDirect == 'DOWN') {
		 	 			 		this.ShootX += 0;
								this.ShootY += shootSpeed;
		 	 	}
		 	 	if (this.ShootDirect == 'LEFT') {
		 	 			 		this.ShootX += -shootSpeed;
								this.ShootY += 0;
		 	 	}
		 	 	if (this.ShootDirect == 'RIGHT') {
		 	 			 		this.ShootX += shootSpeed;
								this.ShootY += 0;
		 	 	}
		 	 	for (var i = 0; i < BrickArray.length; i++) {
		 	 		if (     (this.ShootX + ShootSize >= BrickArray[i][0].x && this.ShootX <= BrickArray[i][0].x + MainSize)
		 	 			  && (this.ShootY >= BrickArray[i][0].y  && this.ShootY <= BrickArray[i][0].y + MainSize)           )
		 	 			    {
		 	 			    this.Shoot = false;
		 	 			    BrickArray[i][1] -= 1;
		 	 			    }

		 	 	}
 				if ( (this.ShootY < 0) || (this.ShootY > height - ShootSize) ||
 				     (this.ShootX < 0) || (this.ShootX > width - ShootSize) ) {
					    this.Shoot = false;	    

				}
			}
	 }
//-----------------------------DRAWING-----------------------------//

//---------------------------COLLISIONS---------------------------//	 
	 this.noCollisionUp    = () => {
								      if (this.y < 0) {
								      	  return true;
								      }		
								      for (var i = 0; i < BrickArray.length; i++) {
						      		     	if ((this.y == (BrickArray[i][0].y + TankSize)) &&
						      		     		((this.x + TankSize > BrickArray[i][0].x)||(this.x > BrickArray[i][0].x)) &&
						      		     		(this.x < (BrickArray[i][0].x + TankSize))) {
						      		     		 
						      		     			if ((MainSize - (BrickArray[i][0].x - this.x) <= teleportPX) && (MainSize - (BrickArray[i][0].x - this.x) > 0)) {
						      		     				this.x = BrickArray[i][0].x - TankSize;
						      		     			} else if (BrickArray[i][0].x + MainSize - this.x <= teleportPX) {
						      		     				this.x = BrickArray[i][0].x + MainSize;
						      		     			} else return true;

						      		     	}
								      }
								      if ((this.y == (MainTank2.y + TankSize)) &&
						      		     ((this.x + TankSize > MainTank2.x)||(this.x > MainTank2.x)) &&
						      		      (this.x < (MainTank2.x + TankSize))) {
								      	return true;
								      }

								      if ((this.y == (MainTank.y + TankSize)) &&
						      		     ((this.x + TankSize > MainTank.x)||(this.x > MainTank.x)) &&
						      		      (this.x < (MainTank.x + TankSize))) {
								      	return true;
								      }
								      return false;	     
	 }
	 this.noCollisionDown  = () => {
								      if (this.y > height - MainSize) {
								      	  return true;
								      }
								      for (var i = 0; i < BrickArray.length; i++) {
						      		     	if (   (this.y + TankSize == BrickArray[i][0].y) &&
						      		     	   (   (this.x > BrickArray[i][0].x) || (this.x + TankSize > BrickArray[i][0].x)) &&
						      		     		   (this.x < (BrickArray[i][0].x + TankSize) ) ) {
						      		     		
						      		     		if ((MainSize - (BrickArray[i][0].x - this.x) <= teleportPX) && (MainSize - (BrickArray[i][0].x - this.x) > 0)) {
						      		     				this.x = BrickArray[i][0].x - TankSize;
						      		     			} else if (BrickArray[i][0].x + MainSize - this.x <= teleportPX) {
						      		     				this.x = BrickArray[i][0].x + MainSize;
						      		     			} else return true;
						      		     	}

						      		     	if (   (this.y + TankSize == MainTank.y) &&
						      		     	   (   (this.x > MainTank.x) || (this.x + TankSize > MainTank.x)) &&
						      		     		   (this.x < (MainTank.x + TankSize) ) ) {
						      		     		return true;
						      		     	}
						      		     	if (   (this.y + TankSize == MainTank2.y) &&
						      		     	   (   (this.x > MainTank2.x) || (this.x + TankSize > MainTank2.x)) &&
						      		     		   (this.x < (MainTank2.x + TankSize) ) ) {
						      		     		return true;
						      		     	}

								      }
								      return false;	 	
	 }
	 this.noCollisionLeft  = () => {
								      if (this.x < 0) {
								      	  return true;
								      }	 
								      for (var i = 0; i < BrickArray.length; i++) {
						      		     	if (   (this.x == BrickArray[i][0].x + TankSize) &&
						      		     	   (   (this.y > BrickArray[i][0].y) || (this.y + TankSize > BrickArray[i][0].y)) &&
						      		     		   (this.y < (BrickArray[i][0].y + TankSize) ) ) {

						      		     		if ((MainSize - (BrickArray[i][0].y - this.y) <= teleportPX) && (MainSize - (BrickArray[i][0].y - this.y) > 0)) {
						      		     				this.y = BrickArray[i][0].y - TankSize;
						      		     			} else if (BrickArray[i][0].y + MainSize - this.y <= teleportPX) {
						      		     				this.y = BrickArray[i][0].y + MainSize;
						      		     			} else return true;
						      		     	}

						      		     	if (   (this.x == MainTank.x + TankSize) &&
						      		     	   (   (this.y > MainTank.y) || (this.y + TankSize > MainTank.y)) &&
						      		     		   (this.y < (MainTank.y + TankSize) ) ) {
						      		     		return true;
						      		     	}
						      		     	if (   (this.x == MainTank2.x + TankSize) &&
						      		     	   (   (this.y > MainTank2.y) || (this.y + TankSize > MainTank2.y)) &&
						      		     		   (this.y < (MainTank2.y + TankSize) ) ) {
						      		     		return true;
						      		     	}

								      }
								      return false;	 	
	 }		
	 this.noCollisionRight = () => {
	 								  if (this.x > width - MainSize) {
								      	  return true;
								      }
								      for (var i = 0; i < BrickArray.length; i++) {
						      		     	if (   (this.x + TankSize == BrickArray[i][0].x) &&
						      		     	   (   (this.y > BrickArray[i][0].y) || (this.y + TankSize > BrickArray[i][0].y)) &&
						      		     		   (this.y < (BrickArray[i][0].y + TankSize) ) ) {

						      		     		if ((MainSize - (BrickArray[i][0].y - this.y) <= teleportPX) && (MainSize - (BrickArray[i][0].y - this.y) > 0)) {
						      		     				this.y = BrickArray[i][0].y - TankSize;
						      		     			} else if (BrickArray[i][0].y + MainSize - this.y <= teleportPX) {
						      		     				this.y = BrickArray[i][0].y + MainSize;
						      		     			} else return true;
						      		     	}

						      		     	if (   (this.x + TankSize == MainTank.x) &&
						      		     	   (   (this.y > MainTank.y) || (this.y + TankSize > MainTank.y)) &&
						      		     		   (this.y < (MainTank.y + TankSize) ) ) {
						      		     		return true;
						      		     	}	
						      		     	if (   (this.x + TankSize == MainTank2.x) &&
						      		     	   (   (this.y > MainTank2.y) || (this.y + TankSize > MainTank2.y)) &&
						      		     		   (this.y < (MainTank2.y + TankSize) ) ) {
						      		     		return true;
						      		     	}
								      }
								      return false;	
	 }
//---------------------------COLLISIONS---------------------------//
//---------------------------FIRE---------------------------//	 		
	 this.fire = () => {
	 	if (this.live) {
	 		this.Shoot = true;	
	 		this.ShootDirect = this.Direction;
	 	 	if (this.ShootDirect == 'UP') {
	 	 					fireMainTexture = fireUp;
	 	 			 		this.ShootX = this.x + MainSize / 2 - 3; //выровнял снаряд по дулу текстуры
	 						this.ShootY = this.y;
	 	 	}
	 	 	if (this.ShootDirect == 'DOWN') {
	 	 					fireMainTexture = fireDown;
	 	 					this.ShootX = this.x + MainSize/2 - 3;
	 						this.ShootY = this.y + MainSize;
	 	 	}
	 	 	if (this.ShootDirect == 'LEFT') {
	 	 					fireMainTexture = fireLeft;
	 	 					this.ShootX = this.x;
	 						this.ShootY = this.y + MainSize/2 - 3;
	 	 	}
	 	 	if (this.ShootDirect == 'RIGHT') {
	 	 					fireMainTexture = fireRight;
	 	 					this.ShootX = this.x + MainSize;
	 						this.ShootY = this.y + MainSize/2 - 3;
	 	 	}
	 	}
	 }
	 this.die = () => {
	 		this.live = false;
	 		this.y = -MainSize;
	 		this.x = -MainSize;
	 		setTimeout( () => {this.live = true; this.x = x; this.y = y}, 5000 );

	 			
	 }
//---------------------------FIRE---------------------------//
}