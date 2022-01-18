class Guard {
  constructor(img, x, y, scale, health) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.health = health;
  }

  display() {
    this.guard = createSprite(this.x, this.y);
    this.guard.addImage(this.img);
    this.guard.scale = this.scale;
  }
}
