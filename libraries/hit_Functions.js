function enemyHit(enemy,bullet){
  if(enemy.type > 0){
    //get rid of the bullet
    bullet.remove();
    //change color
    enemy.shapeColor = 'yellow';
    //subtract health
    enemy.type--;
  }else if(enemy.type === 0){
    //create explosion when bullet hits enemy
    for(var i=0; i<explosionDensity; i++) {
      var p = createSprite(bullet.position.x, bullet.position.y,2,2);
      
      p.setSpeed(random(3,5), random(360));
      p.friction = 0.95;
      p.life = 15;
    }
    
    enemy.remove();
    bullet.remove();
     score++;
     
  }
  
}

function button1Hit(enemy,button1){
 if (keyIsDown(49)){
  enemy.remove();
  button1.shapeColor = 'red';
  score++
 }
}
function button2Hit(enemy,button2){
 if (keyIsDown(50)){
  enemy.remove();
  button2.shapeColor = 'blue';
  score++
 }
}
function button3Hit(enemy,button3){
 if (keyIsDown(51)){
  enemy.remove();
  button3.shapeColor = 'green';
  score++
 }
 
 if(score > 50 && gameState === "levelOne"){
   gameState = 'countDown1'
   
   level1_music.stop();
   Countdown_Song.amp(0.6);
   Countdown_Song.loop();
 }
 if(score > 130 && gameState === "levelTwo"){
   gameState = 'countDown2'
   level2_music.stop();
   Countdown_Song.amp(0.6);
   Countdown_Song.loop();
 }
  if(score > 150 && gameState === "levelThree"){
   gameState = 'countDown3'
   level3_music.stop();
   Countdown_Song.amp(0.6);
   Countdown_Song.loop();
  }
 if(score > 200 && gameState === "levelFour"){
   gameState = 'countDown4'
   level4_music.stop();
   Countdown_Song.amp(0.6);
   Countdown_Song.loop();
  }
  if(score > 250 && gameState === "levelFive"){
   gameState = 'win'
    level5_music.stop();
    win_song.amp(0.9);
    win_song.loop();
    }
  if(score < 1 ){
   gameState = 'lose'
   level1_music.stop();
   level2_music.stop();
   level3_music.stop();
   level4_music.stop();
   level5_music.stop();
   lose_song.amp(0.6);
   lose_song.loop();
  }
}
