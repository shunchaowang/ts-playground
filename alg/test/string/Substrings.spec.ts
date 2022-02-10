import { longestSubstrWithUniqueChar } from '../../main/string/Substrings'

describe('test the longest sub str with k unique characters', () => {
    const case1 = 'aabbcc'
    const k1 = 2
    const expected1 = 'aabb'
    it(`the longest substr of ${case1} with ${k1} unique characters should be ${expected1}`, () => {
        const actual = longestSubstrWithUniqueChar(case1, k1)
        console.log(actual)
        expect(actual).toBe(expected1)
    })
    const case2 = 'aabbcc'
    const k2 = 1
    const expected2 = 'aa'
    it(`the longest substr of ${case2} with ${k2} unique characters should be ${expected2}`, () => {
        const actual = longestSubstrWithUniqueChar(case2, k2)
        console.log(actual)
        expect(actual).toBe(expected2)
    })

    const case3 = 'aaabbb'
    const k3 = 3
    const expected3 = 'not existing'
    it(`the longest substr of ${case3} with ${k3} unique characters should be ${expected3}`, () => {
        const actual = longestSubstrWithUniqueChar(case3, k3)
        expect(actual).toBe(expected3)
    })
})