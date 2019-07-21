var angle = 0;
var radius = 45;
var interval = 2800;
var flag = 0;

function setup() {
  // キャンバスを画面いっぱいにする
  createCanvas(windowWidth, windowHeight);
    
  background("#1D3557");
  noStroke();
  
  setTimeout(resetBg,interval);


}

function draw() {
  
  // - - - - - ここから名前
  //  // 色
  fill("#F1FAEE");

//  fill(255);
  
  // 文字の大きさ
  textSize(150);
  
  // フォント
  textFont('Limelight');
  
  // 文字と文字の位置
  text('N O I R', 400, 500);

  // 文字の大きさ
  textSize(30);
  
  // 文字と文字の位置
  text('Engineer', 200, 500);
  
  // 角度を変化させる
  angle += 0.05;

  // sin関数を使って縦の位置を計算する
  var positionY = sin(angle) * radius; // -45 ~ 45
  // cos関数を使って縦の位置を計算する
  var positionX = cos(angle) * radius; // -45 ~ 45
  
  mWidth = 400;
  mHeight = 400;

  fill(125, mouseX, mouseY);

  // 中心円
  ellipse(mWidth/2 + positionX*1.2, mHeight/2 + positionY*1.2, 3);
  // 最大円
  ellipse(mWidth/2 + positionX*3.5, mHeight/2 + positionY*3.5, 3);
  
  // 上の円
  ellipse(mWidth/2 + positionX*1.5, mHeight /3 + positionY*1.5, 3);
  // 下の円
  ellipse(mWidth/2 + positionX*1.5, mHeight*2 /3 + positionY*1.5, 3);
  // 左の円
  ellipse(mWidth/3 + positionX*1.5, mHeight / 2 + positionY*1.5, 3);
  // 右の円
  ellipse(mWidth*2 /3 + positionX*1.5, mHeight / 2 + positionY*1.5, 3);

  // 第一象限の円
  ellipse(mWidth*7.4 / 12 + positionX*1.5, mHeight*4.6 / 12 + positionY*1.5, 3);
  // 第四象限の円
  ellipse(mWidth*7.4 / 12 + positionX*1.5, mHeight*7.4 / 12 + positionY*1.5, 3);
  // 第二象限の円
  ellipse(mWidth*4.6 / 12 + positionX*1.5, mHeight*4.6 / 12 + positionY*1.5, 3);
  // 第三象限の円
  ellipse(mWidth*4.6 / 12 + positionX *1.5, mHeight*7.4 / 12 + positionY*1.5, 3);

  // 右直線
  ellipse(mWidth*3.05 / 4 + positionX * 1.15, mHeight / 2, 3);
  // 左直線
  ellipse(mWidth*0.95 / 4 + positionX * 1.15, mHeight / 2, 3);
  // 上直線
  ellipse(mWidth / 2, mHeight*0.95 / 4 + positionY * 1.15, 3);
  // 下直線
  ellipse(mWidth / 2, mHeight*3.05 / 4 + positionY * 1.15, 3);

  // 第二象限の線
  ellipse(mWidth*1.25 / 4 + positionX * 0.8, mWidth*1.25 / 4 + positionX * 0.8 , 3);
  // 第四象限の線
  ellipse(mWidth*2.75 / 4 + positionX * 0.8, mWidth*2.75 / 4 + positionX * 0.8 , 3);
  // 第三象限の線
  ellipse(mWidth*1.25 / 4 + -positionX * 0.8, mWidth*2.75 / 4 + positionX * 0.8 , 3);
  // 第一象限の線
  ellipse(mWidth*2.75 / 4 + -positionX * 0.8, mWidth*1.25 / 4 + positionX * 0.8 , 3);
  
  
  if (mouseIsPressed) {
    switch(flag){
      case 1:
        fill(0, random(255), random(255),50);
        ellipse(mWidth*7.4 / 12 +  1.5, mHeight*4.6 / 12 + 1.5, 140);
        ellipse(mWidth*7.4 / 12 +  1.5, mHeight*7.4 / 12 + 1.5, 140);
        ellipse(mWidth*4.6 / 12 +  1.5, mHeight*4.6 / 12 + 1.5, 140);
        ellipse(mWidth*4.6 / 12 +  1.5, mHeight*7.4 / 12 + 1.5, 140); 
        break;
      case 2:
        fill(random(255), 0, random(255),50);
        ellipse(mWidth / 2 + 1.5, mHeight / 3 + 1.5, 140);
        ellipse(mWidth / 2 + 1.5, mHeight*2 / 3 + 1.5, 140);
        ellipse(mWidth / 3 + 1.5, mHeight / 2 + 1.5, 140);
        ellipse(mWidth*2 / 3 + 1.5, mHeight / 2 + 1.5, 140);
        break;
      case 3:
        fill(random(255) ,random(255),0,50);
        ellipse(mWidth / 2  + 1.2 , mHeight / 2 + 1.2, 115);
        break;
    }
  }  
}

function resetBg(){
  setTimeout(resetBg2,interval);
  flag = 1;

  fill('rgba(69,123,157,0.75)');
  ellipse(mWidth*7.4 / 12 +  1.5, mHeight*4.6 / 12 + 1.5, 140);
  ellipse(mWidth*7.4 / 12 +  1.5, mHeight*7.4 / 12 + 1.5, 140);
  ellipse(mWidth*4.6 / 12 +  1.5, mHeight*4.6 / 12 + 1.5, 140);
  ellipse(mWidth*4.6 / 12 +  1.5, mHeight*7.4 / 12 + 1.5, 140);
  
}

function resetBg2(){
  setTimeout(resetBg3,interval);
  flag = 2;

  fill('rgba(230,57,70,0.75)');
  ellipse(mWidth / 2 + 1.5, mHeight / 3 + 1.5, 140);
  ellipse(mWidth / 2 + 1.5, mHeight*2 / 3 + 1.5, 140);
  ellipse(mWidth / 3 + 1.5, mHeight / 2 + 1.5, 140);
  ellipse(mWidth*2 / 3 + 1.5, mHeight / 2 + 1.5, 140);
}

function resetBg3(){
  setTimeout(resetBg4,interval);
  fill('rgba(168,218,220,0.75)');
  ellipse(mWidth / 2  + 1.2 , mHeight / 2 + 1.2, 115);
  flag = 3
}

function resetBg4(){
  flag = 0;
  setTimeout(resetBg,interval);
  background("#1D3557");
}
