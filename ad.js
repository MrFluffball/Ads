let click = { x:0, y:0 }
let mouse = { x:0, y:0 }

document.addEventListener('click', (event) => {
  click.x = event.clientX;
  click.y = event.clientY;

  adList.forEach((i) => {
    i.handleClick()
  })
})
document.addEventListener('mousemove', (event) => {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
})


// Masterlist of existing ads
var adList = []

class Ad {
  constructor() {
    this.x = 100
    this.y = 200
    this.w = 0
    this.h = 0
    // for this we have to assume the "close" button the Ad sprite is in the same place
    // each time because sadly we lack buttons
    this.close = new BoundingRect(3*pixelSize, 2*pixelSize, 11*pixelSize, 11*pixelSize)
    this.isOpen = true
  }
  checkMouseOverClose(position) {
    if (position.x >= (this.close.x + this.x) && position.x <= (this.close.x + this.x) + this.close.w &&
        position.y >= (this.close.y + this.y) && position.y <= (this.close.y + this.y) + this.close.h) {
          return true
        }
    return false
  }
  handleClick() {
    if (this.checkMouseOverClose(click)) {
      this.isOpen = false
    }
  }
  // nice visual effects
  highlightCloseOnMouseover() {
    if (this.checkMouseOverClose(mouse)) {
      ctx.globalAlpha = 0.4
      ctx.fillRect(this.x + this.close.x, this.y + this.close.y, this.close.w-(3*pixelSize), this.close.h-(3*pixelSize))
      ctx.globalAlpha = 1
    }
  }
}

class LongAd extends Ad {
  constructor(x,y) {
    super(Ad)
    this.x = x
    this.y = y
    this.w = 150
    this.h = 100
    // Each ad type has a base image (the ad background) and sprite image that acts as the ad content
    this.base = new Sprite(long_base, this.x, this.y, this.w*pixelSize, this.h*pixelSize)
    this.sprite = new TileSprite(this.w*pixelSize, this.h*pixelSize, this.w, this.h, 0, 0)
  }
  draw() {
    this.base.draw(this.x, this.y)
    this.sprite.draw(this.x, this.y)
  }
}

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
}

function newAd() {
  let ad = new LongAd(getRandomInt(0,500), getRandomInt(0,500))
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
