let click = { x:0, y:0 }

document.addEventListener('click', (event) => {
  click.x = event.clientX;
  click.y = event.clientY;
})

const Arrows = {
  UP: 0,
  DOWN: 1,
  LEFT: 2,
  RIGHT: 3
}

// Masterlist of existing ads
var adList = []

class Ad {
  constructor() {
    this.x = 0
    this.y = 0
    this.w = 0
    this.h = 0
    this.isOpen = true
    this.arrow = null
  }
  drawArrow(x,y) {
    var arrowType = null
    // decide what sprite to use based on the arrow object
    if (this.arrow == Arrows.UP) {
      arrowType = new TileSprite(arrows,50*pixelSize,50*pixelSize,50,50,0,0)
    } else if (this.arrow == Arrows.DOWN) {
      arrowType = new TileSprite(arrows,50*pixelSize,50*pixelSize,50,50,1,0)
    } else if (this.arrow == Arrows.LEFT) {
      arrowType = new TileSprite(arrows,50*pixelSize,50*pixelSize,50,50,2,0)
    } else if (this.arrow == Arrows.RIGHT) {
      arrowType = new TileSprite(arrows,50*pixelSize,50*pixelSize,50,50,3,0)
    }
    // then we draw it
    arrowType.draw(x,y)
  }
}

class LongAd extends Ad {
  constructor(x,y) {
    super(Ad)
    this.x = x
    this.y = y
    this.w = 150
    this.h = 100
    this.arrow = Arrows[Object.keys(Arrows)[Math.floor(Math.random() * Object.keys(Arrows).length)]]
    //this.arrow = Object.keys(Arrows)[Math.floor(Math.random() * Arrows.length)];

    // Each ad type has a base image (the ad background) and sprite image that acts as the ad content
    this.base = new Sprite(long_base, this.x, this.y, this.w*pixelSize, this.h*pixelSize)
    //this.sprite = new TileSprite(this.w*pixelSize, this.h*pixelSize, this.w, this.h, 0, 0)
  }
  draw() {
    this.base.draw(this.x, this.y)
    this.drawArrow(this.x+this.w+150,this.y+this.h+50)
    //this.sprite.draw(this.x, this.y)
  }
}
/*
class SmallAd extends Ad {
  constructor() {
    super(Ad)
    this.w = 100
    this.h = 100
    this.base = new Sprite(small_base, this.x, this.y, this.w*pixelSize, this.h*pixelSize)
    //this.sprite = new Sprite(long_base, this.x, this.y, this.w, this.h)
  }
  draw() {
    this.base.draw(this.x, this.y)
  }
}*/

function newAd() {
  let ad = new LongAd(/*getRandomInt(0,500), getRandomInt(0,500)*/0,0)
  adList.push(ad)
}

// cleanup function to remove ads from the list array
function closeAds() {
  for (var i = 0; i < adList.length; i++) {
    if (!adList[i].isOpen) {
      adList.splice(i,1)
    }
  }
}

function drawAds() {
  adList.forEach((i) => {
    i.draw()
  })
}

newAd()
