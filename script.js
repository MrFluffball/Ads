var Game = {}

Game.tick = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height)

  // create a new ad when there isn't one
  if (adList.length <= 0) {
    newAd()
  }

  updateAds()
  closeAds()

  window.requestAnimationFrame(this.tick)
}.bind(Game)

window.onload = function() {
  Game.tick()
}
