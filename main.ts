input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.showIcon(IconNames.Heart)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
})
let int_i = 0
let int_2 = 0
let array2 = 0
let on_start = false
basic.forever(function () {
    if (on_start) {
        array2 = 5
        if (input.buttonIsPressed(Button.A)) {
            if (int_2 > 1) {
                int_2 = 0
            }
            if (int_i < array2) {
                int_i += 1
            }
        }
    }
})
basic.forever(function () {
    if (int_i == 1) {
    	
    }
    if (int_i == 2) {
    	
    }
    if (int_i == 3) {
    	
    }
    if (int_i == 4) {
    	
    }
    if (int_i == 5) {
    	
    }
})
basic.forever(function () {
    if (on_start == false) {
        if (input.buttonIsPressed(Button.A)) {
            on_start = true
        }
    }
})
