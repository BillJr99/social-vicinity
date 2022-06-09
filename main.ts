input.onButtonPressed(Button.A, function () {
    radio_number += 1
    basic.showNumber(radio_number)
})
input.onButtonPressed(Button.B, function () {
    friend_index = (friend_index + 1) % 10
    basic.showString("#")
    basic.showNumber(friend_index)
    basic.showString(":")
    basic.showNumber(friends[friend_index])
})
radio.onReceivedValue(function (name, value) {
    if (name == "hello") {
        friends[value] = friends[value] + 1
    }
})
let friend_index = 0
let radio_number = 0
let friends: number[] = []
friends = [
0,
0,
0,
0,
0,
0,
0,
0,
0,
0
]
radio.setGroup(1)
radio_number = 0
friend_index = 0
basic.showNumber(0)
basic.forever(function () {
    radio.sendValue("hello", radio_number)
})
