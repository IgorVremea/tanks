// cd C:\Users\Дмитрий\Desktop\WEB\MySites\Tanks
// browser-sync start --server -f -w   - creating local server;
var Textures;
var player1score = 0;
	player2score = 0;
var numberofBlocks = 20;
var mainTank1Texture;
var mainTank2Texture;
var fireMainTexture;
var MainSize = 48;
var TankSize = MainSize;
var ShootSize = MainSize / 9;
var shootSpeed = 10;
var cols = 13; // кол-во столбцов 		->   получается
var rows = 13; // кол-во строк          ->          сетка
var Click = false;
var BrickArray = [];
var tankSpeed = 2;
var teleportPX = 10;
var level = {
		lvl : '1',
		MainTank1X : ((cols - 1) * MainSize / 2),
		MainTank1Y : ((rows - 1) * MainSize),
		MainTank2X : ((cols - 1) * MainSize / 2),
		MainTank2Y : (0),
};

function preload () {
 	 mainTankTextureUp = loadImage('src/tank.png');
 	 mainTankTextureLeft = loadImage('src/tank-left.png');
 	 mainTankTextureDown = loadImage('src/tank-down.png');
 	 mainTankTextureRight = loadImage('src/tank-right.png');


 	 fireUp = loadImage('src/fire.png');
 	 fireLeft = loadImage('src/fire-left.png');
 	 fireRight = loadImage('src/fire-right.png');
 	 fireDown = loadImage('src/fire-down.png');


 	 blockTexture3 = loadImage('src/brick3.png');
 	 blockTexture2 = loadImage('src/brick2.png');
 	 blockTexture1 = loadImage('src/brick1.png');
 	 blockTexture0 = loadImage('src/brick0.png');


 	 fireMainTexture = fireUp;
}
function setup () {
	BrickArray = createBlocksArray(level.lvl);
	createCanvas (MainSize*cols, MainSize*rows);
	MainTank2 = new MainTank(level.MainTank2X, level.MainTank2Y);
	MainTank = new MainTank(level.MainTank1X, level.MainTank1Y);
	Textures = new Textures();
}
function draw () {
Click1 = false;
Click2 = false;
			if (keyIsDown(UP_ARROW) && !Click1) {
				Click1 = true;
				MainTank.Direction = 'UP';
				MainTank.mainTankTexture = mainTankTextureUp;
				if (!MainTank.noCollisionUp()) {
						MainTank.move(0, -tankSpeed);
				}
			}
			if (keyIsDown(DOWN_ARROW) && !Click1)  {
				Click1 = true;
				MainTank.Direction = 'DOWN';
				if (!MainTank.noCollisionDown()) {
					MainTank.move(0, tankSpeed);	
				}
				MainTank.mainTankTexture = mainTankTextureDown;
			}
			if (keyIsDown(LEFT_ARROW) && !Click1)  {
				Click1 = true;
				MainTank.Direction = 'LEFT';
				if (!MainTank.noCollisionLeft()) {
					MainTank.move(-tankSpeed, 0);
				}
				MainTank.mainTankTexture = mainTankTextureLeft;
			}
			if (keyIsDown(RIGHT_ARROW) && !Click1) {
				Click1 = true;
				MainTank.Direction = 'RIGHT';
				if (!MainTank.noCollisionRight()) {
					MainTank.move(tankSpeed, 0);
				}
				MainTank.mainTankTexture = mainTankTextureRight;
			}
			//-------------------Tank2---------------------//
			if (keyIsDown(87) && !Click2) {
				Click2 = true;
				MainTank2.Direction = 'UP';
				MainTank2.mainTankTexture = mainTankTextureUp;
				if (!MainTank2.noCollisionUp()) {
						MainTank2.move(0, -tankSpeed);
				}
			}
			if (keyIsDown(83) && !Click2)  {
				Click2 = true;
				MainTank2.Direction = 'DOWN';
				if (!MainTank2.noCollisionDown()) {
					MainTank2.move(0, tankSpeed);	
				}
				MainTank2.mainTankTexture = mainTankTextureDown;
			}
			if ((keyIsDown(65) || keyIsDown(81)) && !Click2)  {
				Click2 = true;
				MainTank2.Direction = 'LEFT';
				if (!MainTank2.noCollisionLeft()) {
					MainTank2.move(-tankSpeed, 0);
				}
				MainTank2.mainTankTexture = mainTankTextureLeft;
			}
			if (keyIsDown(68) && !Click2) {
				Click2 = true;
				MainTank2.Direction = 'RIGHT';
				if (!MainTank2.noCollisionRight()) {
					MainTank2.move(tankSpeed, 0);
				}
				MainTank2.mainTankTexture = mainTankTextureRight;
			}
			//-------------------Tank2---------------------//
			

	frameRate(60);
	background(0);
	Textures.drawTexture();
	MainTank.show();
	MainTank2.show();	
	EndGame();
}



