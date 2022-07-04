input.onButtonPressed(Button.A, function () {
    if (digital == 0) {
        basic.showLeds(`
            # # # . .
            # . . # .
            # . . # .
            # . . # .
            # # # . .
            `)
        pins.digitalWritePin(DigitalPin.P0, 0)
        digital = 1
    } else {
        basic.showLeds(`
            # # # . #
            # . . # #
            # . . # #
            # . . # #
            # # # . #
            `)
        pins.digitalWritePin(DigitalPin.P0, 1)
        digital = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (analógico == 0) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # .
            `)
        pins.analogWritePin(AnalogPin.P0, 0)
        analógico = 200
    } else if (analógico == 200) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # .
            # . . # #
            `)
        pins.analogWritePin(AnalogPin.P0, 200)
        analógico = 400
    } else if (analógico == 400) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # .
            # . . # #
            # . . # #
            `)
        pins.analogWritePin(AnalogPin.P0, 400)
        analógico = 600
    } else if (analógico == 600) {
        basic.showLeds(`
            . # # . .
            # . . # .
            # # # # #
            # . . # #
            # . . # #
            `)
        pins.analogWritePin(AnalogPin.P0, 600)
        analógico = 800
    } else if (analógico == 800) {
        basic.showLeds(`
            . # # . .
            # . . # #
            # # # # #
            # . . # #
            # . . # #
            `)
        pins.analogWritePin(AnalogPin.P0, 800)
        analógico = 1023
    } else {
        basic.showLeds(`
            . # # . #
            # . . # #
            # # # # #
            # . . # #
            # . . # #
            `)
        pins.analogWritePin(AnalogPin.P0, 1023)
        analógico = 0
    }
})
let analógico = 0
let digital = 0
digital = 0
analógico = 0
basic.showIcon(IconNames.Happy)
