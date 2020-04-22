class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("pictures/wood1.png");
    this.Visiblity1 = 255;
  }
  display(){if(this.body.speed < 15){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity1 = this.Visiblity1 - 5;
     tint(255,this.Visiblity1);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
   
 }
score (){
  if (this.Visiblity1<0 && this.Visiblity1>-200){
    score++;
  }
}
};
