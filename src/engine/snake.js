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
