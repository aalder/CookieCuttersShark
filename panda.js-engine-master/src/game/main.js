game.module(
    'game.main'
)

var randomCoordinate = function() {
    var x = Math.floor(Math.random() * 1080) + 1 ;
    var y = Math.floor(Math.random() * 800) + 1 ;
    return [x,y];
}

.body(function() {

game.addAsset('logo.png');

game.createScene('Main', {
    backgroundColor: 0xb9bec7,

    init: function() {
        var logo = new game.Sprite('logo.png').center().addTo(this.stage);
    }
});

});

//generate the trash
//Input: nothing
//Output: generates 1 piece of trash at the edge of the screen
function generateTrash(){
  var trash = new game.Body({
              position: [generateRandom()],
              collisionGroup: 0,
              collideAgainst: 0,
              mass: 0,
          });

}
 
