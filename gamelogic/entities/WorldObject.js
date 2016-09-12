import UUID from 'uuid-js';

class WorldObject {

    constructor(position) {
        this.position = position;
        this.id = UUID.create().toString();
    }
}

export default WorldObject;