class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,100,100);
    this.image = loadImage("sprites/cannonball.png");
    
  }

  display() {
    if(keyCode === 32){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    }
    
      
      
    super.display();
  }
}
