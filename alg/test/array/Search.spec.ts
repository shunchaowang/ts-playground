import { binarySearch } from '../../main/array/Search'

describe('test search', () => {
    const nums = [2, 5]
    const target = 2
    it(`${nums} has ${target} at index 0`, () => {
        const expected = binarySearch(nums, target)
        expect(expected).toBe(0)
    })
})