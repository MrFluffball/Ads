var canvas = document.getElementById("game")
var ctx = canvas.getContext("2d")

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var pixelSize = 3

class BoundingRect {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
  }
}

class Sprite {
  constructor(img, x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.img = img

    this.draw = function(x,y) {
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(this.img, x, y, this.w, this.h);
    }
  }
}

class TileSprite {
  constructor(w, h, spriteW, spriteH, tilemapX, tilemapY) {
    this.w = w
    this.h = h
    this.spriteW = spriteW
    this.spriteH = spriteH
    this.tilemapX = tilemapX
    this.tilemapY = tilemapY

    this.draw = function(x,y) {
      ctx.imageSmoothingEnabled = false;
      //ctx.drawImage(tileAtlas, this.tilemapX * atlasTilesize + (this.tilemapX + 1), this.tilemapY*atlasTilesize + (this.tilemapY + 1), atlasTilesize, atlasTilesize, x, y, this.w, this.h)
      //ctx.drawImage(tile_atlas, this.tilemapX * this.spriteW + (this.tilemapX), this.tilemapY * this.spriteH + (this.tilemapY), this.tilemapW, this.tilemapH, x, y, this.w, this.h)
      ctx.drawImage(tile_atlas, 0, 0, this.spriteW, this.spriteH, x, y, this.w, this.h)
    }
  }
}


// sprites
let tile_atlas = document.getElementById("tile_atlas")
let long_base = document.getElementById("long_base")
let wide_base = document.getElementById("wide_base")
