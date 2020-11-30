class Box{
    constructor(x,y,width,height){
        var options={restitution=0.8}
        this.body=bodies.rectangle(x,y,width,height);
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill(255);
        rect(pos.x,pos.y,this.width,this.height)
    }
}
