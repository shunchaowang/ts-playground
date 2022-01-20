import { maxSubSum } from "../main/array/MaxSubSum";

describe('find the max sum of sub array', () => {
    const case1 = [-2, 1, -3, 4, -1, 2, 1, -5,]
    const expected1 = 6
    const case2 = [- 2, -1, -3, -4, -1, -2, -1, -5, -4]
    const expected2 = -1
    test(`${case1} has the max sum of ${expected1}`, () => {
        const actual = maxSubSum(case1)
        expect(actual).toBe(expected1)
    })

    test(`${case2} has the max sum ${expected2}`, () => {
        expect(maxSubSum(case2)).toBe(expected2)
    })
})