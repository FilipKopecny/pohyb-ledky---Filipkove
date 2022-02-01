input.onButtonPressed(Button.A, function () {
    led.unplot(xPamat, yPamat)
    yPamat += 1
    if (yPamat > 4) {
        yPamat = 0
    }
})
input.onGesture(Gesture.Shake, function () {
    yPamat = 0
    xPamat = 0
})
input.onButtonPressed(Button.B, function () {
    led.unplot(xPamat, yPamat)
    xPamat += 1
    if (xPamat > 4) {
        xPamat = 0
    }
})
let xPamat = 0
let yPamat = 0
yPamat = 0
xPamat = 0
basic.forever(function () {
    led.plot(xPamat, yPamat)
})
