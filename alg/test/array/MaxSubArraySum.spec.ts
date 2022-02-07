import { maxSubSum, maxSubSumOfLength } from "../../main/array/MaxSubSum"

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

describe('find the max sum of sub array of length', () => {
    const case1 = [100, 200, 300, 400]
    const length1 = 2
    const expected1 = 700
    test(`${case1} has the max sum of sub array in length ${length1} of ${expected1}`, () => {
        expect(maxSubSumOfLength(case1, length1)).toBe(expected1)
    })
})