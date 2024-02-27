let getal = 0
basic.forever(function () {
    let tel = 0
    if (tel % 2 == 1) {
        led.plot(4, 1)
    } else {
    	
    }
})
basic.forever(function () {
    if (getal <= 15) {
        getal += 1
        basic.pause(500)
    } else {
        basic.clearScreen()
        getal = 0
    }
})
basic.forever(function () {
    if (getal <= 15) {
        basic.clearScreen()
        basic.pause(1000)
        led.plot(4, 0)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
        led.plot(3, 0)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
        led.plot(4, 0)
        led.plot(3, 0)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
        led.plot(2, 0)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
        led.plot(2, 0)
        led.plot(4, 0)
        basic.pause(1000)
        basic.clearScreen()
        basic.pause(1000)
    } else {
        basic.clearScreen()
    }
})
