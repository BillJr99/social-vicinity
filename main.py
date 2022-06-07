def on_button_pressed_a():
    global radio_number
    radio_number += 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_value(name, value):
    if name == "hello":
        friends[value] = friends[value] + 1
radio.on_received_value(on_received_value)

friends: List[number] = []
friends = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
radio.set_group(1)
radio_number = 0

def on_forever():
    radio.send_value("hello", radio_number)
basic.forever(on_forever)
