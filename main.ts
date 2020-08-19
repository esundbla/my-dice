input.onGesture(Gesture.Shake, function () {

 let dice =  randint(1, 6) 
    if (dice == 1){
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    }
    else if (dice == 2){
        basic.showLeds(`
        . . . . .
        . . # . .
        . . . . .
        . . # . .
        . . . . .
        `)
    }
    else if (dice == 3){
        basic.showLeds(`
        . . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . .
        `)
    }
    else if (dice == 4){
        basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . . . .
        `)
    }
    else if (dice == 5){
        basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        . . . . .
        # . . . #
        `)
    }
    else if(dice == 6){
        basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
