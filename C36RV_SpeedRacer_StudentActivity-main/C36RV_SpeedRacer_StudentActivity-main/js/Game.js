class Game {
  constructor() {}

  start() {
    form = new Form();
    form.display();
    player = new Player();
    playerCount = player.getCount()

    car1 = createSprite(width/2 - 100, height - 100)
    car1.addImage(carImg1)
    car1.scale = 0.07

    car2 = createSprite(width/2 + 100, height - 100)
    car2.addImage(carImg2)
    car2.scale = 0.07

    cars = [car1, car2]
  }

  getState(){
    var gameStateRef = database.ref('gameState')
    gameStateRef.on("value",function(data){
      gameState = data.val()
    })

  }
  update(count){
    database.ref("/").update({
      gameState:count
    })
  }
}
