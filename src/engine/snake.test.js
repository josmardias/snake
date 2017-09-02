import {
  create,
  feed,
} from './snake'

/*
    1 2 3 4 5
  1 . . . . .
  2 . . . O .
  3 . . o o .
  4 . o o . .
  5 . . . . .
*/
const snake = [
  { x: 4, y: 2 }, // head
  { x: 4, y: 3 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
  { x: 2, y: 4 }, // tail
]

test('should create a snake', () => {
  const newSnake = create(3, 5)
  expect(newSnake).toEqual([{ x: 3, y: 5 }])
})

test('should gets bigger properly', () => {
  const changedSnake = feed(snake, { x: 3, y: 2 })

  expect(changedSnake).toEqual([
    { x: 3, y: 2 }, // new head
    { x: 4, y: 2 }, // old head
    { x: 4, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 },
    { x: 2, y: 4 }, // tail
  ])
})
