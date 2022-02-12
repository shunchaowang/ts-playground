import { totalFruits } from '../../main/array/FruitsIntoBaskets'

describe('test total fruits into baskets', () => {
    const case1 = [1, 2, 1]
    const expected1 = 3
    it(`${case1} should have ${expected1}`, () => {
        expect(totalFruits(case1)).toBe(expected1)
    })

    const case2 = [1, 2, 3, 2, 2]
    const expected2 = 4
    it(`${case2} should have ${expected2}`, () => {
        expect(totalFruits(case2)).toBe(expected2)
    })
    const case3 = [3, 3, 3, 3, 3, 3]
    const expected3 = 6
    it(`${case3} should have ${expected3}`, () => {
        expect(totalFruits(case3)).toBe(expected3)
    })
})