controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . 9 9 9 . . 
        . 9 9 9 9 9 9 9 9 9 9 9 2 2 . . 
        . . . . . . . . . . 9 9 9 2 . . 
        . . . . . . . . . . . . 9 9 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.disintegrate, 200)
})
let enemyShip: Sprite = null
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . 4 6 6 6 4 . 
    . . . . . . . 4 4 4 4 6 6 . . . 
    . . . . . . 4 4 4 4 4 4 4 . . . 
    . . . . 6 6 6 6 6 6 6 6 6 . . . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . 4 4 4 4 4 4 4 4 4 4 4 4 . . . 
    . . . 6 6 6 6 6 6 6 6 6 6 . . . 
    . . . . . . 4 4 4 4 4 4 6 6 . . 
    . . . . . . . . . . 4 4 6 6 . . 
    . . . . . . . . . . . . 6 6 4 . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(1003)
game.onUpdateInterval(500, function () {
    enemyShip = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . 4 4 2 . . . . . . . 
        . . . . . 2 4 2 5 . . . . . . . 
        . . . . . 4 2 2 5 . . . . . . . 
        . . . . 4 4 2 2 5 . . . . . . . 
        . . . 2 2 2 2 2 5 . . . . . . . 
        . . 2 2 2 2 2 2 5 . . . . . . . 
        . . . 2 4 2 2 2 5 . . . . . . . 
        . . . . 4 4 2 2 5 . . . . . . . 
        . . . . . 4 4 2 2 . . . . . . . 
        . . . . . . 4 4 2 . . . . . . . 
        . . . . . . . 4 2 . . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    enemyShip.x = scene.screenWidth()
    enemyShip.vx = -20
    enemyShip.y = randint(10, scene.screenHeight() - 10)
})
