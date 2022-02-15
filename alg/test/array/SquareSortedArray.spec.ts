import { squaresSortedArray } from '../../main/array/SquaresSortedArray'

describe('test for squares of sorted array', () => {
    const case1 = [-4, -1, 0, 3, 10]
    const expected1 = [0, 1, 9, 16, 100]
    it(`${case1} squares should be ${expected1}`, () => {
        expect(squaresSortedArray(case1)).toEqual(expected1)
    })
})