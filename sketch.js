var lives;
var money_Collected;

function preload() {
  Policemen = loadImage("policeman image.png");
  Ghost = loadImage("thief.png");
  Coin = loadImage("coins image.jpg");
  //Lost = loadImage("youloseimage.png");
  Win = loadImage("you win.png");
}


function setup() {
  createCanvas(900, 800);

  lives = 3;
  money_Collected = 0;

  ghost = createSprite(40, 40);
  ghost.addImage(Ghost);
  ghost.scale = 0.11;

  Policeman = createSprite(420, 230);
  Policeman.addImage(Policemen);
  Policeman.scale = 0.25;
  Policeman.velocityY = 4;

  Policeman2 = createSprite(200, 600);
  Policeman2.addImage(Policemen);
  Policeman2.scale = 0.25;
  Policeman2.velocityY = 6;

  Policeman3 = createSprite(855, 400);
  Policeman3.addImage(Policemen);
  Policeman3.scale = 0.25;
  Policeman3.velocityY = 5;

  money1 = createSprite(40, 480, 10, 20);
  money1.addImage(Coin);
  money1.scale = 0.06;

  money2 = createSprite(550, 650, 10, 20);
  money2.addImage(Coin);
  money2.scale = 0.06;

  money3 = createSprite(550, 160, 10, 20);
  money3.addImage(Coin);
  money3.scale = 0.06;

  money4 = createSprite(240, 250, 10, 20);
  money4.addImage(Coin);
  money4.scale = 0.06;
  wallGroup = createGroup()
  maze();
  gameState = "play"
}

function draw() {
  if (gameState === "play") {
    background("black");

    
    if (keyDown(UP_ARROW)) {
      ghost.y = ghost.y - 5;

    }

    if (keyDown(DOWN_ARROW)) {
      ghost.y = ghost.y + 5;

    }

    if (keyDown(LEFT_ARROW)) {
      ghost.x = ghost.x - 5;

    }

    if (keyDown(RIGHT_ARROW)) {
      ghost.x = ghost.x + 5;

    }

    ghost.collide(wallGroup);

    Policeman.bounceOff(wallGroup);
    Policeman2.bounceOff(wallGroup);
    Policeman3.bounceOff(wallGroup);

    if (Policeman.isTouching(ghost) || Policeman2.isTouching(ghost) || Policeman3.isTouching(ghost)) {
      lives--
      ghost.x = 40;
      ghost.y = 40;

    }

    if (ghost.isTouching(money1)) {
      money1.destroy();
      money_Collected++
    }

    if (ghost.isTouching(money2)) {
      money2.destroy();
      money_Collected++
    }

    if (ghost.isTouching(money3)) {
      money3.destroy();
      money_Collected++
    }

    if (ghost.isTouching(money4)) {
      money4.destroy();
      money_Collected++
    }
    if (lives === 0 || money_Collected === 4) {
      gameState = "end"
    }
    textSize(30);
    fill("white");
    text("Lives:- " + lives, 100, 750);

    text("Money Collected:- " + money_Collected, 500, 750);


    drawSprites();
  }
  if (gameState === "end") {
    background("black");
    image(Win,450,350,300,300);

    if (lives === 0) {
      Policeman.velocityY = 0;
      Policeman2.velocityY = 0;
      Policeman3.velocityY = 0;

      ghost.velocityY = 0;
      ghost.velocityX = 0;

    }

    if (money_Collected === 4) {

      Policeman.velocityY = 0;
      Policeman2.velocityY = 0;
      Policeman3.velocityY = 0;

      ghost.velocityY = 0;
      ghost.velocityX = 0;


    }

  }
}

function maze() {
  wall1 = createSprite(450, 10, 900, 15);
  wall1.shapeColor = color(220, 245, 22);
  wall2 = createSprite(450, 690, 900, 15);
  wall2.shapeColor = color(220, 245, 22);
  wall3 = createSprite(890, 350, 15, 900);
  wall3.shapeColor = color(220, 245, 22);
  wall4 = createSprite(10, 380, 15, 2000);
  wall4.shapeColor = color(220, 245, 22);
  wall5 = createSprite(50, 80, 80, 10);
  wall5.shapeColor = color(220, 245, 22);
  wall6 = createSprite(160, 80, 10, 150);
  wall6.shapeColor = color(220, 245, 22);
  wall7 = createSprite(125, 155, 80, 10);
  wall7.shapeColor = color(220, 245, 22);
  wall8 = createSprite(90, 180, 10, 110);
  wall8.shapeColor = color(220, 245, 22);
  wall9 = createSprite(110, 300, 70, 10);
  wall9.shapeColor = color(220, 245, 22);
  wall10 = createSprite(100, 355, 10, 120);
  wall10.shapeColor = color(220, 245, 22);
  wall11 = createSprite(50, 365, 90, 10);
  wall11.shapeColor = color(220, 245, 22);
  wall12 = createSprite(90, 500, 160, 10);
  wall12.shapeColor = color(220, 245, 22);
  wall13 = createSprite(90, 550, 10, 100);
  wall13.shapeColor = color(220, 245, 22);
  wall14 = createSprite(165, 460, 10, 80);
  wall14.shapeColor = color(220, 245, 22);
  wall15 = createSprite(290, 100, 10, 170);
  wall15.shapeColor = color(220, 245, 22);
  wall16 = createSprite(250, 110, 80, 10);
  wall16.shapeColor = color(220, 245, 22);
  wall17 = createSprite(250, 180, 90, 10);
  wall17.shapeColor = color(220, 245, 22);
  wall18 = createSprite(210, 260, 10, 160);
  wall18.shapeColor = color(220, 245, 22);
  wall19 = createSprite(170, 240, 80, 10);
  wall19.shapeColor = color(220, 245, 22);
  wall20 = createSprite(800, 290, 10, 10);
  wall20.shapeColor = color(220, 245, 22);
  wall21 = createSprite(35, 440, 50, 10);
  wall21.shapeColor = color(220, 245, 22);
  wall22 = createSprite(150, 640, 10, 100);
  wall22.shapeColor = color(220, 245, 22);
  wall23 = createSprite(300, 280, 170, 10);
  wall23.shapeColor = color(220, 245, 22);
  wall24 = createSprite(290, 330, 10, 90);
  wall24.shapeColor = color(220, 245, 22);
  wall25 = createSprite(380, 185, 10, 180);
  wall25.shapeColor = color(220, 245, 22);
  wall26 = createSprite(400, 100, 90, 10);
  wall26.shapeColor = color(220, 245, 22);
  wall27 = createSprite(360, 450, 10, 330);
  wall27.shapeColor = color(220, 245, 22);
  wall28 = createSprite(300, 490, 120, 10);
  wall28.shapeColor = color(220, 245, 22);
  wall29 = createSprite(315, 620, 100, 10);
  wall29.shapeColor = color(220, 245, 22);
  wall29 = createSprite(490, 520, 250, 10);
  wall29.shapeColor = color(220, 245, 22);
  wall30 = createSprite(490, 630, 10, 100);
  wall30.shapeColor = color(220, 245, 22);
  wall31 = createSprite(615, 560, 10, 90);
  wall31.shapeColor = color(220, 245, 22);
  wall32 = createSprite(810, 590, 160, 10);
  wall32.shapeColor = color(220, 245, 22);
  wall33 = createSprite(480, 400, 10, 230);
  wall33.shapeColor = color(220, 245, 22);
  wall34 = createSprite(490, 390, 100, 10);
  wall34.shapeColor = color(220, 245, 22);
  wall35 = createSprite(510, 100, 10, 170);
  wall35.shapeColor = color(220, 245, 22);
  wall36 = createSprite(580, 190, 260, 10);
  wall36.shapeColor = color(220, 245, 22);
  wall37 = createSprite(580, 190, 10, 100);
  wall37.shapeColor = color(220, 245, 22);
  wall38 = createSprite(650, 300, 10, 230);
  wall38.shapeColor = color(220, 245, 22);
  wall39 = createSprite(690, 300, 260, 10);
  wall39.shapeColor = color(220, 245, 22);
  wall40 = createSprite(800, 220, 10, 150);
  wall40.shapeColor = color(220, 245, 22);
  wall41 = createSprite(730, 500, 10, 190);
  wall41.shapeColor = color(220, 245, 22);
  wall42 = createSprite(760, 500, 160, 10);
  wall42.shapeColor = color(220, 245, 22);
  wall43 = createSprite(830, 430, 10, 130);
  wall43.shapeColor = color(220, 245, 22);
  wall44 = createSprite(830, 80, 120, 10);
  wall44.shapeColor = color(220, 245, 22);
  wall45 = createSprite(690, 60, 10, 120);
  wall45.shapeColor = color(220, 245, 22);


  wallGroup.add(wall1);
  wallGroup.add(wall2);
  wallGroup.add(wall3);
  wallGroup.add(wall4);
  wallGroup.add(wall5);
  wallGroup.add(wall6);
  wallGroup.add(wall7);
  wallGroup.add(wall8);
  wallGroup.add(wall9);
  wallGroup.add(wall10);
  wallGroup.add(wall11);
  wallGroup.add(wall12);
  wallGroup.add(wall13);
  wallGroup.add(wall14);
  wallGroup.add(wall15);
  wallGroup.add(wall16);
  wallGroup.add(wall17);
  wallGroup.add(wall18);
  wallGroup.add(wall19);
  wallGroup.add(wall20);
  wallGroup.add(wall21);
  wallGroup.add(wall22);
  wallGroup.add(wall23);
  wallGroup.add(wall24);
  wallGroup.add(wall25);
  wallGroup.add(wall26);
  wallGroup.add(wall27);
  wallGroup.add(wall28);
  wallGroup.add(wall29);
  wallGroup.add(wall30);
  wallGroup.add(wall31);
  wallGroup.add(wall32);
  wallGroup.add(wall33);
  wallGroup.add(wall34);
  wallGroup.add(wall35);
  wallGroup.add(wall36);
  wallGroup.add(wall37);
  wallGroup.add(wall38);
  wallGroup.add(wall39);
  wallGroup.add(wall40);
  wallGroup.add(wall41);
  wallGroup.add(wall42);
  wallGroup.add(wall43);
  wallGroup.add(wall44);
  wallGroup.add(wall45);

}

