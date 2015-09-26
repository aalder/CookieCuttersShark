
// Create new scene named Main
game.createScene('Main', {

var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = 900;
canvas.height = 500;
document.body.appendChild(canvas);

	keydown: function(key){
		if (key === "UP") {
			body.position.y
		}
	}

    // Create physics world
this.world = new game.World();


// Create new body
var body = new game.Body();

// Set body position
body.position.x = 200;
body.position.y = 200;

var shark = new game.Sprite("shark.png")

// Add shape to body
body.addAsset(shark);

// Add body to world
this.world.addBody(body);

}