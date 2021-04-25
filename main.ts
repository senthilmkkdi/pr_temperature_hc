basic.forever(function () {
    if (input.temperature() < 22) {
        basic.showString("turn on the the heater")
    } else {
        basic.clearScreen()
    }
})
