import { quickSort } from '../../main/array/Sorting'

describe('test quick sort', () => {
    const case1 = [1, 2, 3, 4, 2]
    const expected1 = [1, 2, 2, 3, 4]

    it(`${case1} should be ${expected1} after quick sorting`, () => {
        quickSort(case1, 0, case1.length - 1)
        expect(case1).toEqual(expected1)
    })
})