# snake
:game_die: snake

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


[TODO]
- create()  
  it's creating a single segment snake.
  In the real game we need at least 3 segments to start

- feed()  
  game should detect if the next movement will put the head in the same place as the food
  if yes, it should call feed(), instead of move()
  in other words, a frame that a snake will eat, is a frame that snake does not really moves

- move()  
  its detecting and preventing move against its own neck (a.k.a prevents 180º turn)

- isEatingItself()  
  answers properly if snake is eating some part of it's body

- other:  
  right now, there is no such thing as grid and limits.
  pending: create grid, teleport snake on grid edges and create food random appearance
