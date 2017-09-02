import { create } from './snake'

test('should create a snake', () => {
  const snake = create(3, 5)
  expect(snake).toEqual([{ x: 3, y: 5 }])
})
