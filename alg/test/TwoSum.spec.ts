import { twoSum } from "../main/array/TwoSum";

describe('test suite for two sum', () => {
    const case1 = [2, 7, 11, 15]
    const target1 = 9
    const expected1 = [2, 7]
    const case2 = [3, 2, 4]
    const target2 = 6
    const expected2 = [2, 4]
    const case3 = [3, 3]
    const target3 = 6
    const expected3 = [3, 3]

    test(`${case1} has items ${expected1} to sum ${target1}`, () => {
        expect(twoSum(case1, target1)).toEqual(expected1)
    })
    test(`${case2} has items ${expected2} to sum ${target2}`, () => {
        expect(twoSum(case2, target2)).toEqual(expected2)
    })
    test(`${case3} has items ${expected3} to sum ${target3}`, () => {
        expect(twoSum(case3, target3)).toEqual(expected3)
    })
})