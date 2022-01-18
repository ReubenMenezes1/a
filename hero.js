class Hero {
  constructor(img, x, y, scale, health) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.health = health;
    this.isPlayable = false;
  }


  
  
  handleControls() {
  
    this.showHealth();
    if (keyDown("RIGHT_ARROW")) {
    
      this.hero.x += 10;
      if (this.hero.x > 1400) {
        this.hero.x = 1300;
      }
    } else if (keyDown("LEFT_ARROW")) {
      this.hero.x -= 10;
      if (this.hero.x < 600) {
        this.hero.x = 800;
        this.health -= 10;
        console.log(this.health);
      }
    }
    if (this.health < 0) {
      this.gameOver();
    }
  }
  display() {
    this.hero = createSprite(this.x, this.y);
    this.hero.addImage(this.img);
    this.hero.scale = this.scale;
  }

  showHealth() {
    push();
    fill("white");
    rect(width / 2 + 500, height - 750, 100, 20);
    fill("red");
    rect(width / 2 + 500, height - 750, this.health, 20);
    noStroke();
    pop();
  }


  gameOver() {
    this.isPlayable = false;
}
}