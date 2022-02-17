import { sortColors } from '../../main/array/SortColors'

describe('test sort colors', () => {
    const case1 = [2, 0, 2, 1, 1, 0]
    const expected1 = [0, 0, 1, 1, 2, 2]

    it(`${case1} becomes ${expected1} after sorting`, () => {
        sortColors(case1)
        expect(case1).toEqual(expected1)
    })

    const case2 = [2, 0, 1]
    const expected2 = [0, 1, 2]
    it(`${case2} becomes ${expected2} after sorting`, () => {
        sortColors(case2)
        expect(case2).toEqual(expected2)
    })

    const case3 = [1, 2, 0]
    const expected3 = [0, 1, 2]
    it(`${case3} becomes ${expected3} after sorting`, () => {
        sortColors(case3)
        expect(case3).toEqual(expected3)
    })
    const case4 = [2, 2, 0]
    const expected4 = [0, 2, 2]
    it(`${case4} becomes ${expected4} after sorting`, () => {
        sortColors(case4)
        expect(case4).toEqual(expected4)
    })
})