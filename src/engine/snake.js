export const UP = 'UP'
export const RIGHT = 'RIGHT'
export const DOWN = 'DOWN'
export const LEFT = 'LEFT'

/*
  1 2 3 4 5
  . . . . . 1
  . . . O . 2
  . . o o . 3
  . o o . . 4
  . . . . . 5

  Head to tail
  [{ x: 5, y: 2 }, { x: 4, y: 3 }, { x: 3, y: 3 }, { x: 3, y: 4 }, { x: 2, y: 4 }]
*/
export const create = (x, y) => (
  [{ x: x, y: y }]
)

export const feed = (snake, food) => (
  [food, ...snake]
)

export const move = (snake, direction = RIGHT) => {
  const newHead = moveToDirection(snake[0], direction)

  if (snake[1] && newHead.x === snake[1].x && newHead.y === snake[1].y) {
    return snake
  }

  return snake.map((position, index, arr) => {
    if (index > 0) {
      return arr[index - 1]
    }

    return newHead
  })
}

const moveToDirection = (position, direction) => {
  switch (direction) {
  case UP:
    return { ...position, y: position.y - 1 }
  case DOWN:
    return { ...position, y: position.y + 1 }
  case LEFT:
    return { ...position, x: position.x - 1 }
  case RIGHT:
  default:
    return { ...position, x: position.x + 1 }
  }
}
