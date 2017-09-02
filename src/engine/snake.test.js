import {
  UP,
  RIGHT,
  DOWN,
  LEFT,
  create,
  feed,
  move,
  isEatingItself,
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

test('should move to UP properly', () => {
  const changedSnake = move(snake, UP)

  expect(changedSnake).toEqual([
    { x: 4, y: 1 }, // new head
    { x: 4, y: 2 }, // old head
    { x: 4, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 }, // new tail
    // { x: 2, y: 4 }, // old tail
  ])
})

test('should move to RIGHT properly', () => {
  const changedSnake = move(snake, RIGHT)

  expect(changedSnake).toEqual([
    { x: 5, y: 2 }, // new head
    { x: 4, y: 2 }, // old head
    { x: 4, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 }, // new tail
    // { x: 2, y: 4 }, // old tail
  ])
})

test('should not be allowed to move DOWN', () => {
  const changedSnake = move(snake, DOWN)

  expect(changedSnake).toBe(snake)
})

test('should move to LEFT properly', () => {
  const changedSnake = move(snake, LEFT)

  expect(changedSnake).toEqual([
    { x: 3, y: 2 }, // new head
    { x: 4, y: 2 }, // old head
    { x: 4, y: 3 },
    { x: 3, y: 3 },
    { x: 3, y: 4 }, // new tail
    // { x: 2, y: 4 }, // old tail
  ])
})

describe('#isEatingItself', () => {
  test('should answer false when snake head is not eating itself', () => {
    expect(isEatingItself(snake)).toBe(false)
  })

  test('should answer true when snake head is eating itself', () => {
    /*
        1 2 3 4 5
      1 . . . . .
      2 . o o . .
      3 . o o . .
      4 . o X . .
      5 . . o . .
    */
    const _snake = [
      { x: 3, y: 4 }, // head
      { x: 2, y: 4 },
      { x: 2, y: 3 },
      { x: 2, y: 2 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 }, // eating itself here
      { x: 3, y: 5 }, // tail
    ]

    expect(isEatingItself(_snake)).toBe(true)
  })
})
