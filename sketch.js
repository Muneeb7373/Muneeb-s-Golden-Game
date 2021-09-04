var nameplate, bg;
var pacman, pacmanLeftImg,pacmanRightImg,pacmanUpImg,pacmanDownImg;
var pacmanwhole,pacmanhalf,pacmansemihalf;

function preload(){
nameplate = loadImage("Name Plate 2.png")
pacmanLeftImg = loadAnimation("PacmanAll.png","PacmanLeftImg1.png","PacmanLeftImg2.png","PacmanLeftImg1.png")
pacmanRightImg = loadAnimation("PacmanAll.png","PacmanRightImg1.png","PacmanRightImg2.png","PacmanRightImg1.png")
pacmanUpImg = loadAnimation("PacmanAll.png","PacmanUpImg1.png","PacmanUpImg2.png","PacmanUpImg1.png")
pacmanDownImg = loadAnimation("PacmanAll.png","PacmanDownImg1.png","PacmanDownImg2.png","PacmanDownImg1.png")
pacmanwhole = loadAnimation("PacmanAll.png")
pacmanhalf = loadAnimation("PacmanLeftImg2.png")
pacmansemihalf = loadAnimation("PacmanLeftImg1.png")

}

function setup() {
  createCanvas(1500,800);
  bg = createSprite(700, 300, 50, 50);
  bg.addImage (nameplate)
  bg.scale = 0.8

  pacman = createSprite(695,490,40,40)
  pacman.addAnimation("pacmanwhole",pacmanwhole)
  pacman.addAnimation("pacmanhalf",pacmanhalf)
  pacman.addAnimation("pacmansemihalf",pacmansemihalf)
  pacman.addAnimation("pacmanLeftImg",pacmanLeftImg)
  pacman.addAnimation("pacmanRightImg",pacmanRightImg)
  pacman.addAnimation("pacmanUpImg",pacmanUpImg)
  pacman.addAnimation("pacmanDownImg",pacmanDownImg)
  pacman.scale = 0.13

  var wall1 = createSprite(195,315,7,275)
  var wall2 = createSprite(345,300,7,302)
  var wall3 = createSprite(320,315,7,275)
  var wall4 = createSprite(175,300,7,302)
  var wall5 = createSprite(750,300,7,302)
  var wall6 = createSprite(920,300,7,302)
  var wall7 = createSprite(813,150,133,7)
  var wall8 = createSprite(983,150,133,7)
  var wall9 = createSprite(990,275,100,7)
  var wall10 = createSprite(822,275,100,7)
  var wall11 = createSprite(822,315,100,7)
  var wall12 = createSprite(990,315,100,7)
  var wall13 = createSprite(944,367,7,100)
  var wall14 = createSprite(776,367,7,100)
  var wall15 = createSprite(776,230,7,90)
  var wall16 = createSprite(944,230,7,90)
  var wall17 = createSprite(995,188,109,7)
  var wall18 = createSprite(827,188,109,7)
  var wall19 = createSprite(828,418,111,7)
  var wall20 = createSprite(996,418,111,7)
  var wall21 = createSprite(985,452,137,7)
  var wall22 = createSprite(816,452,139,7)
  var wall23 = createSprite(220,330,7,250)
  wall23.rotation = -11
  var wall24 = createSprite(296,330,7,250)
  wall24.rotation = 11
  var wall25 = createSprite(230,272,7,260)
  wall25.rotation = -12
  var wall26 = createSprite(286,272,7,260)
  wall26.rotation = 12
  var wall27 = createSprite(190,147,37,7)
  var wall28 = createSprite(330,147,37,7)
  var wall29 = createSprite(333,450,31,7)
  var wall30 = createSprite(258,450,26,7)
  var wall31 = createSprite(185,450,27,7)
  var wall32 = createSprite(1084,300,7,302)
  var wall33 = createSprite(1121,150,80,7)
  var wall34 = createSprite(1121,450,80,7)
  var wall35 = createSprite(1220,365,7,80)
  var wall36 = createSprite(1215,235,7,80)
  var wall37 = createSprite(1190,170,60,7)
  wall37.rotation = 40
  var wall38 = createSprite(1190,430,70,7)
  wall38.rotation = -35
  var wall39 = createSprite(1203,285,35,7)
  wall39.rotation = -40 
  var wall40 = createSprite(1205,305,40,7)
  wall40.rotation = 40
  var wall41 = createSprite(1164,150,9,7)
  var wall42 = createSprite(1215,193,7,7)
  var wall43 = createSprite(1220,321,7,9)
  var wall44 = createSprite(1220,408,7,9)
  var wall45 = createSprite(1107,230,7,90)
  var wall46 = createSprite(1110,365,7,105)
  var wall47 = createSprite(1144,310,75,7)
  var wall48 = createSprite(1142,185,75,7)
  var wall49 = createSprite(1142,273,75,7)
  var wall50 = createSprite(1144,415,75,7)
  var wall51 = createSprite(1180,362,7,110)
  var wall52 = createSprite(1180,229,7,95)
  var wall53 = createSprite(385,280,7,260)
  var wall54 = createSprite(525,280,7,260)
  var wall55 = createSprite(500,280,7,260)
  var wall56 = createSprite(410,280,7,260)
  var wall57 = createSprite(405,435,7,65)
  wall57.rotation  = -40
  var wall58 = createSprite(505,435,7,65)
  wall58.rotation  = 40
  var wall59 = createSprite(455,458,65,7)
  var wall60 = createSprite(455,410,97,7)
  var wall61 = createSprite(398,150,32,7)
  var wall62 = createSprite(513,150,32,7)
  var wall63 = createSprite(880,169,7,45)
  var wall64 = createSprite(1050,169,7,45)
  var wall65 = createSprite(882,433,7,35)
  var wall66 = createSprite(1050,433,7,35)
  var wall67 = createSprite(870,295,7,45)
  var wall68 = createSprite(1040,295,7,47)
  var wall69 = createSprite(565,301,7,302)  
  var wall70 = createSprite(710,301,7,302)  
  var wall71 = createSprite(590,335,7,235)  
  var wall72 = createSprite(682,265,7,230)  
  var wall73 = createSprite(635,335,7,250)  
  wall73.rotation = -21
  var wall74 = createSprite(635,266,7,250)  
  wall74.rotation = -22
  var wall75 = createSprite(577,150,30,7)  
  var wall76 = createSprite(696,150,35,7)  
  var wall77 = createSprite(577,450,30,7)  
  var wall78 = createSprite(695,450,35,7)  
  var boundary1 = createSprite(700,80,1300,5)
  boundary1.shapeColor = "Blue"
  var boundary2 = createSprite(700,90,1260,5)
  boundary2.shapeColor = "Blue"
  var boundary3 = createSprite(700,520,1300,5)
  boundary3.shapeColor = "Blue"
  var boundary4 = createSprite(53,170,5,175)
  boundary4.shapeColor = "Blue"
  var boundary5 = createSprite(1347,170,5,175)
  boundary5.shapeColor = "Blue"
  var boundary6 = createSprite(53,430,5,175)
  boundary6.shapeColor = "Blue"
  var boundary7 = createSprite(1347,430,5,175)
  boundary7.shapeColor = "Blue"
  var boundary8 = createSprite(68,162,5,150)
  boundary8.shapeColor = "Blue"
  var boundary9 = createSprite(1332,162,5,150)
  boundary9.shapeColor = "Blue"
  var boundary10 = createSprite(68,437,5,147)
  boundary10.shapeColor = "Blue"
  var boundary11 = createSprite(1332,437,5,147)
  boundary11.shapeColor = "Blue"
  var boundary12 = createSprite(80,257,60,5)
  boundary12.shapeColor = "Blue"
  var boundary13 = createSprite(80,340,60,5)
  boundary13.shapeColor = "Blue"
  var boundary14 = createSprite(1320,340,60,5)
  boundary14.shapeColor = "Blue"
  var boundary15 = createSprite(1320,257,60,5)
  boundary15.shapeColor = "Blue"
  var boundary16 = createSprite(1304,237,60,5)
  boundary16.shapeColor = "Blue"
  var boundary17 = createSprite(96,237,60,5)
  boundary17.shapeColor = "Blue"
  var boundary18 = createSprite(96,361,60,5)
  boundary18.shapeColor = "Blue"
  var boundary19 = createSprite(1304,361,60,5)
  boundary19.shapeColor = "Blue"
  var boundary20 = createSprite(125,260,5,50)
  boundary20.shapeColor = "Blue"
  var boundary21 = createSprite(1275,260,5,50)
  boundary21.shapeColor = "Blue"
  var boundary22 = createSprite(1275,338,5,50)
  boundary22.shapeColor = "Blue"
  var boundary23 = createSprite(125,338,5,50)
  boundary23.shapeColor = "Blue"
  var boundary24 = createSprite(110,260,5,10)
  boundary24.shapeColor = "Blue"
  var boundary25 = createSprite(1290,260,5,10)
  boundary25.shapeColor = "Blue"
  var boundary26 = createSprite(1290,337,5,10)
  boundary26.shapeColor = "Blue"
  var boundary27 = createSprite(110,337,5,10)
  boundary27.shapeColor = "Blue"
  var boundary28 = createSprite(83,265,60,5)
  boundary28.shapeColor = "Blue"
  var boundary29 = createSprite(1318,265,60,5)
  boundary29.shapeColor = "Blue"
  var boundary30 = createSprite(83,332,60,5)
  boundary30.shapeColor = "Blue"
  var boundary31 = createSprite(1318,332,60,5)
  boundary31.shapeColor = "Blue"
  var boundary32 = createSprite(90,282,75,5)
  boundary32.shapeColor = "Blue"
  var boundary33 = createSprite(90,315,75,5)
  boundary33.shapeColor = "Blue"
  var boundary34 = createSprite(1310,315,75,5)
  boundary34.shapeColor = "Blue"
  var boundary35 = createSprite(1310,282,75,5)
  boundary35.shapeColor = "Blue"
  var boundary36 = createSprite(215,510,300,5)
  boundary36.shapeColor = "Blue"
  var boundary37 = createSprite(1185,510,300,5)
  boundary37.shapeColor = "Blue"
  var boundary38 = createSprite(365,497,5,30)
  boundary38.shapeColor = "Blue"
  var boundary39 = createSprite(1033,497,5,30)
  boundary39.shapeColor = "Blue"
  var boundary40 = createSprite(1023,497,5,30)
  boundary40.shapeColor = "Blue"
  var boundary41 = createSprite(375,497,5,30)
  boundary41.shapeColor = "Blue"
  var boundary42 = createSprite(525,510,300,5)
  boundary42.shapeColor = "Blue"
  var boundary43 = createSprite(875,510,300,5)
  boundary43.shapeColor = "Blue"
  var boundary44 = createSprite(672,497,5,30)
  boundary44.shapeColor = "Blue"
  var boundary45 = createSprite(727,497,5,30)
  boundary45.shapeColor = "Blue"
  var boundary46 = createSprite(680,497,5,30)
  boundary46.shapeColor = "Blue"
  var boundary47 = createSprite(718,497,5,30)
  boundary47.shapeColor = "Blue"
  var boundary48 = createSprite(700,509,35,5)
  boundary48.shapeColor = "Blue"
  var boundary49 = createSprite(117,400,35,5)
  boundary49.shapeColor = "Blue"
  var boundary50 = createSprite(1275,400,35,5)
  boundary50.shapeColor = "Blue"
  var boundary51 = createSprite(104,408,10,5)
  boundary51.shapeColor = "Blue"
  var boundary52 = createSprite(129,408,10,5)
  boundary52.shapeColor = "Blue"
  var boundary53 = createSprite(1263,408,10,5)
  boundary53.shapeColor = "Blue"
  var boundary54 = createSprite(1288,408,10,5)
  boundary54.shapeColor = "Blue"
  var boundary55 = createSprite(111,421,5,30)
  boundary55.shapeColor = "Blue"
  var boundary56 = createSprite(122,421,5,30)
  boundary56.shapeColor = "Blue"
  var boundary57 = createSprite(1270,421,5,30)
  boundary57.shapeColor = "Blue"
  var boundary58 = createSprite(1281,421,5,30)
  boundary58.shapeColor = "Blue"
  var boundary59 = createSprite(115,433,10,5)
  boundary59.shapeColor = "Blue"
  var boundary60 = createSprite(1274,433,10,5)
  boundary60.shapeColor = "Blue"
  var boundary61 = createSprite(368,485,10,5)
  boundary61.shapeColor = "Blue"
  var boundary62 = createSprite(675,485,10,5)
  boundary62.shapeColor = "Blue"
  var boundary63 = createSprite(720,485,10,5)
  boundary63.shapeColor = "Blue"
  var boundary64 = createSprite(1026,485,10,5)
  boundary64.shapeColor = "Blue"
  var boundary65 = createSprite(100,404,5,12)
  boundary65.shapeColor = "Blue"
  var boundary66 = createSprite(133,404,5,12)
  boundary66.shapeColor = "Blue"
  var boundary67 = createSprite(1259,404,5,12)
  boundary67.shapeColor = "Blue"
  var boundary68 = createSprite(1292,404,5,12)
  boundary68.shapeColor = "Blue"
  var boundary69 = createSprite(225,465,200,5)
  boundary69.shapeColor = "Blue"
  var boundary70 = createSprite(225,475,200,5)
  boundary70.shapeColor = "Blue"
  var boundary71 = createSprite(1175,465,200,5)
  boundary71.shapeColor = "Blue"
  var boundary72 = createSprite(1175,475,200,5)
  boundary72.shapeColor = "Blue"
  var boundary73 = createSprite(128,470,5,10)
  boundary73.shapeColor = "Blue"
  var boundary74 = createSprite(322,470,5,10)
  boundary74.shapeColor = "Blue"
  var boundary75 = createSprite(1078,470,5,10)
  boundary75.shapeColor = "Blue"
  var boundary76 = createSprite(1273,470,5,10)
  boundary76.shapeColor = "Blue"
  var boundary77 = createSprite(115,205,35,5)
  boundary77.shapeColor = "Blue"
  var boundary78 = createSprite(1275,205,35,5)
  boundary78.shapeColor = "Blue"
  var boundary79 = createSprite(103,195,10,5)
  boundary79.shapeColor = "Blue"
  var boundary80 = createSprite(126,195,10,5)
  boundary80.shapeColor = "Blue"
  var boundary81 = createSprite(1263,195,10,5)
  boundary81.shapeColor = "Blue"
  var boundary82 = createSprite(1286,195,10,5)
  boundary82.shapeColor = "Blue"
  var boundary83 = createSprite(110,183,5,30)
  boundary83.shapeColor = "Blue"
  var boundary84 = createSprite(120,183,5,30)
  boundary84.shapeColor = "Blue"
  var boundary85 = createSprite(1270,183,5,30)
  boundary85.shapeColor = "Blue"
  var boundary86 = createSprite(1280,183,5,30)
  boundary86.shapeColor = "Blue"
  var boundary87 = createSprite(225,135,200,5)
  boundary87.shapeColor = "Blue"
  var boundary88 = createSprite(225,125,200,5)
  boundary88.shapeColor = "Blue"
  var boundary89 = createSprite(1175,135,200,5)
  boundary89.shapeColor = "Blue"
  var boundary90 = createSprite(1175,125,200,5)
  boundary90.shapeColor = "Blue"
  var boundary91 = createSprite( 100,198,5,10)
  boundary91.shapeColor = "Blue"
  var boundary92 = createSprite(130,198,5,10)
  boundary92.shapeColor = "Blue"
  var boundary93 = createSprite(1260,198,5,10)
  boundary93.shapeColor = "Blue"
  var boundary94 = createSprite(1290,198,5,10)
  boundary94.shapeColor = "Blue"
  var boundary95 = createSprite(127,128,5,10)
  boundary95.shapeColor = "Blue"
  var boundary96 = createSprite(322,128,5,10)
  boundary96.shapeColor = "Blue"
  var boundary97 = createSprite(1078,128,5,10)
  boundary97.shapeColor = "Blue"
  var boundary98 = createSprite(1273,128,5,10)
  boundary98.shapeColor = "Blue"
  var boundary99 = createSprite(114,170,10,5)
  boundary99.shapeColor = "Blue"
  var boundary100 = createSprite(1274,170,10,5)
  boundary100.shapeColor = "Blue"

  noFill()
  //stroke("Yellow")

 for(i=85;i<1315;i = i + 15) {
  foodTop = createSprite(i,110,5,5)
  foodTop.shapeColor = "Red"
}
for(i=85;i<355;i = i + 15) {
  foodTop = createSprite(i,495,5,5)
  foodTop.shapeColor = "Red"
}
for(i=395;i<655;i = i + 15) {
  foodTop = createSprite(i,495,5,5)
  foodTop.shapeColor = "Red"
}
for(i=745;i<1005;i = i + 15) {
  foodTop = createSprite(i,495,5,5)
  foodTop.shapeColor = "Red"
}
for(i=1050;i<1310;i = i + 15) {
  foodTop = createSprite(i,495,5,5)
  foodTop.shapeColor = "Red"
}
for(i=110;i<220;i = i + 15) {
  foodTop = createSprite(85,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=110;i<220;i = i + 15) {
  foodTop = createSprite(1315,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=375;i<510;i = i + 15) {
  foodTop = createSprite(1320,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=375;i<510;i = i + 15) {
  foodTop = createSprite(85,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=470;i<490;i = i + 15) {
  foodTop = createSprite(340,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=470;i<490;i = i + 15) {
  foodTop = createSprite(395,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=470;i<490;i = i + 15) {
  foodTop = createSprite(1000,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=470;i<490;i = i + 15) {
  foodTop = createSprite(1050,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=1020;i<1050;i = i + 15) {
  foodTop = createSprite(i,470,5,5)
  foodTop.shapeColor = "Red"
}
for(i=360;i<390;i = i + 15) {
  foodTop = createSprite(i,470,5,5)
  foodTop.shapeColor = "Red"
}
for(i=100;i<150;i = i + 15) {
  foodTop = createSprite(i,375,5,5)
  foodTop.shapeColor = "Red"
}
for(i=100;i<150;i = i + 15) {
  foodTop = createSprite(i,450,5,5)
  foodTop.shapeColor = "Red"
}
for(i=100;i<150;i = i + 15) {
  foodTop = createSprite(i,155,5,5)
  foodTop.shapeColor = "Red"
}
for(i=1240;i<1315;i = i + 15) {
  foodTop = createSprite(i,215,5,5)
  foodTop.shapeColor = "Red"
}
for(i=1240;i<1315;i = i + 15) {
  foodTop = createSprite(i,375,5,5)
  foodTop.shapeColor = "Red"
}
for(i=100;i<150;i = i + 15) {
  foodTop = createSprite(i,450,5,5)
  foodTop.shapeColor = "Red"
}
for(i=100;i<150;i = i + 15) {
  foodTop = createSprite(i,155,5,5)
  foodTop.shapeColor = "Red"
}
for(i=100;i<150;i = i + 15) {
  foodTop = createSprite(i,215,5,5)
  foodTop.shapeColor = "Red"
}
for(i=1240;i<1315;i = i + 15) {
  foodTop = createSprite(i,155,5,5)
  foodTop.shapeColor = "Red"
}
for(i=1240;i<1315;i = i + 15) {
  foodTop = createSprite(i,450,5,5)
  foodTop.shapeColor = "Red"
}
for(i=170;i<205;i = i + 15) {
  foodTop = createSprite(145,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=390;i<445;i = i + 15) {
  foodTop = createSprite(145,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=170;i<205;i = i + 15) {
  foodTop = createSprite(1240,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=390;i<445;i = i + 15) {
  foodTop = createSprite(1240,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=130;i<490;i = i + 15) {
  foodTop = createSprite(545,i,5,5)
  foodTop.shapeColor = "Red"
}
for(i=130;i<490;i = i + 15) {
  foodTop = createSprite(905,i,5,5)
  foodTop.shapeColor = "Red"
}
}

function draw() {
  background(180);  

  console.log (displayHeight)

  if (keyDown(RIGHT_ARROW)){
  pacman.x = pacman.x + 4
  pacman.changeAnimation("pacmanRightImg",pacmanRightImg)
  }
  if (keyDown(LEFT_ARROW)){
  pacman.x = pacman.x - 4
  pacman.changeAnimation("pacmanLeftImg",pacmanLeftImg)
  }
  if (keyDown(UP_ARROW)){
  pacman.y = pacman.y - 4
  pacman.changeAnimation("pacmanUpImg",pacmanUpImg)
  }
  if (keyDown(DOWN_ARROW)){
  pacman.y = pacman.y + 4
  pacman.changeAnimation("pacmanDownImg",pacmanDownImg)
  }
  
  drawSprites();

  fill("Red")
 text(mouseX + ', ' + mouseY,mouseX,mouseY)
  

}
/*if (fruitGroup.get(i).isTouching(players)) {
  fruitGroup.get(i).destroy();
   player.score = player.score + 1*/