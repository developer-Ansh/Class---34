// class  Ball{
//     constructor(x,y,r){
//     var options = {
//        restitution:0.8,
//        friction:1.0,
//        density:0.5
//     }  
//         this.body = Bodies.circle(x,y,r,options);
//         this.radius = r
//         World.add(world, this.body);    

//     }

//   display(){
//     var angle = this.body.angle;
//     var pos = this.body.position
//     push(); 
//     translate(pos.x,pos.y);
//     rotate(angle);
//     fill(0,0,180);
//     ellipse(0, 0, this.radius, this.radius);
//     pop();
//   }  
// };

class Ball {
    constructor(x, y, width, height, angle) {
      var options = { 
        density: 1, 
        frictionAir: 0.005};
  
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
  
    display() {
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill("pink");
      ellipse(0, 0, this.width, this.height);
      pop();
    }
  }