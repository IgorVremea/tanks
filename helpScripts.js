function uniq(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      if (arr[i] == arr[j]) 
      {
        arr.splice(j,1);
        uniq(arr);
      }
    }
  }
  return arr;
}

function getRandomInt(min, max) {
			return Math.floor(Math.random() * (max - min + 1)) + min;
}

var keyPressed = () => {
  if (keyCode == 32) {
    if (!MainTank.Shoot) {
      MainTank.fire();
    }
  }
  if (keyCode == 86) {
    if (!MainTank2.Shoot) {
      MainTank2.fire()
    }
  }
}


var EndGame = () => {
      if (MainTank.Shoot) {
        if (           (MainTank.ShootX >= MainTank2.x)&&(MainTank.ShootX <= MainTank2.x + MainSize)       
                        && (MainTank.ShootY >= MainTank2.y)&&(MainTank.ShootY <= MainTank2.y + MainSize) ) {
              MainTank.Shoot = false;
              MainTank2.die();
              player1score += 1;
              console.log('Player1 - ', player1score);
              console.log('Player2 - ', player2score); 
        }
      }
      if (MainTank2.Shoot) {
        if (           (MainTank2.ShootX >= MainTank.x)&&(MainTank2.ShootX <= MainTank.x + MainSize)       
                        && (MainTank2.ShootY >= MainTank.y)&&(MainTank2.ShootY <= MainTank.y + MainSize) ) {
              MainTank2.Shoot = false;
              MainTank.die();
              player2score += 1;
              console.log('Player1 - ', player1score);
              console.log('Player2 - ', player2score); 
        }
      }
}