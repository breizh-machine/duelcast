class World {

    constructor() {
        this.entities = {};
        this.worldTimer = null;
    }

    create() {
        this._runLoop();
    }

    _runLoop() {
        if (!this.worldTimer) {
            this.worldTimer = setInterval(() => {
                Object.keys(this.entities).forEach(function (key) {
                    //let entity = this.entities[key];

                });
            }, 1);
        }
    }
}

export default World;
