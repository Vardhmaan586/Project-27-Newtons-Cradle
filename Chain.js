class Chain{
   constructor(BodyA,BodyB,offsetX,offsetY){

   this.offsetX = offsetX
   this.offsetY = offsetY
   
   var options = {
       bodyA : BodyA,
       bodyB : BodyB,
       pointB:{x:this.offsetX,y:this.offsetY}
   }


    this.Rope = Constraint.create(options);
    World.add(world,this.Rope);

}

   display(){
    
       push();
       var pointA = this.body.bodyA.position;
       var pointB = this.body.bodyB.position;
       strokeWeight(2);
       line(pointA.x,pointA.y,pointB.x+this.offsetX,pointB.y+this.offSetY);
       pop();
   }

}