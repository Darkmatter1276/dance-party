tiles.setTilemap(tilemap`level`)
effects.starField.startScreenEffect()
let stev: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 3 3 3 . . . . . . .
    . . . . . . 3 3 3 . . . . . . .
    . . . . . . 3 3 3 . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
stev.setPosition(80, 100)
let steve: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
let spe = 40
game.onUpdateInterval(2000, function () {
    speed += 1
})
let spee = 40
game.onUpdateInterval(500, function () {
    let lane = randint(1, 4)
    if (lane == 1) {
        let left: Sprite = null
        left = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        let up: Sprite = null
        up = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        let down: Sprite = null
        down = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        let right: Sprite = null
        right = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
}) 
info.setScore(0)
info.setLife(5)

info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})


info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let stevs= null
scene.setBackgroundColor(11)

effects.starField.startScreenEffect()
tiles.setTilemap(tilemap`level`)

steve = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . 3 f f . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
steve.setPosition(80, 100)
info.setScore(0)
info.setLife(5)
let speed = 40
game.onUpdateInterval(500, function () {
    lane = randint(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
game.onUpdateInterval(2000, function () {
    speed += 1
})