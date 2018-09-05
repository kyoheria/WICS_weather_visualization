class Fog {
	constructor(){
		let x = random (width);
		let y = random (-100,-10); 
		this.pos = createVector(x,y);
		this.vel = createVector(0,0);
		this.acc= createVector();
		this.r = random(50,100);
	}
	render(){
		stroke(255,50);
		strokeWeight(this.r);
		point(this.pos.x, this.pos.y);
	}
	update(){
		this.acc=gravity;
		this.vel.add(this.acc);
		this.pos.add(this.vel);
	}

}