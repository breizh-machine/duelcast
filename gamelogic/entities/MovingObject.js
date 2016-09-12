import WorldObject from 'WorldObject'

class MovingObject extends WorldObject {

	constructor(position, speed, direction) {
		super(position)
		this.speed = speed
		this.direction = direction
	}

	updatePosition() {
		this.position += direction * speed;
	}

}

export default WorldObject;
