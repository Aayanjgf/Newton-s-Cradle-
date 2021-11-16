class rope{
	constructor(body1,body2,offsetX)
	{
		var options={
			bodyA:body1,
			bodyB:body2,
		    stiffness:0.09,
			length:200
		}

		this.offsetX=offsetX
		this.rope=Constraint.create(options)
		World.add(world,this.rope)

		
	}

	display()
	{
		
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;
        strokeWeight(2);
        stroke("black");
        line(pointA.x,pointA.y,pointB.x + this.offsetX,pointB.y);
	  
		
	}

}