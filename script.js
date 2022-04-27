var Game = {}

Game.tick = function() {
  ctx.clearRect(0,0,canvas.width,canvas.height)

  drawAds()
  closeAds()

  adList.forEach((i) => {
    i.highlightCloseOnMouseover()
  })
  window.requestAnimationFrame(this.tick)
}.bind(Game)

window.onload = function() {
  Game.tick()
}
