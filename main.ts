let luce = 0
input.onButtonPressed(Button.A, function () {
    music.rest(music.beat(BeatFraction.Sixteenth))
    luce = input.lightLevel()
    if (luce < 25) {
        music.ringTone(262)
    } else if (luce < 50) {
        music.ringTone(294)
    } else if (luce < 100) {
        music.ringTone(330)
    } else if (luce < 150) {
        music.ringTone(349)
    } else if (luce < 180) {
        music.ringTone(392)
    } else {
        music.ringTone(440)
    }
})
basic.forever(function () {
	
})
