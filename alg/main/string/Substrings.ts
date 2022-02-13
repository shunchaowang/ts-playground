/**
 * **Google Interview**
 * Given a string you need to print longest possible substring that has exactly M unique characters. 
 * If there are more than one substring of longest possible length, then print any one of them.
 * ---
 * Examples: 
 * ```
 * "aabbcc", k = 1
 * Max substring can be any one from {"aa" , "bb" , "cc"}.
 * 
 * "aabbcc", k = 2
 * Max substring can be any one from {"aabb" , "bbcc"}.
 * 
 * "aabbcc", k = 3
 * There are substrings with exactly 3 unique characters {"aabbcc" , "abbcc" , "aabbc" , "abbc" }
 * Max is "aabbcc" with length 6.
 * "aaabbb", k = 3
 * There are only two unique characters, thus show not existing. 
 * ```
 * @param str the source string
 * @param k the count of unique characters
 * @returns the longest substring if it exists
 */
const longestSubstrWithUniqueChar = (str: string, k: number): string => {

    let result = ''
    // use sliding windows, which provides of linear complexity of O(n)
    // we need a helper function to calculate the unique characters of the current window
    // hash map and set are used to accomodate this
    const map = new Map<string, number>()
    // initialize the map when iterating the string
    const chars = [...str]
    chars.forEach((c, i) => {
        map.set(c, 0)
    })

    // return not existing if there are not enough characters in str
    if ([...map.keys()].length < k) {
        return 'not existing'
    }

    let leftIndex = 0
    let rightIndex = 0
    let unique = 1
    let maxLength = 0
    map.set(chars[rightIndex], 1)
    while (rightIndex < chars.length) {

        if (unique <= k) {
            if (unique === k) {
                if (rightIndex - leftIndex + 1 > maxLength) {
                    maxLength = rightIndex - leftIndex + 1
                    result = str.substring(leftIndex, rightIndex + 1)
                }
            }
            rightIndex++
            // the unique needs to be updated if the char at current rightIndex is changing from 0 to 1 in the map
            map.set(chars[rightIndex], map.get(chars[rightIndex]) + 1)
            if (map.get(chars[rightIndex]) === 1) {
                unique += 1
            }

        } else { // unique > k
            // the unique needs to be updated if the char at current rightIndex is changing from 0 to 1 in the map
            map.set(chars[leftIndex], map.get(chars[leftIndex]) - 1)
            if (map.get(chars[leftIndex]) === 0) {
                unique -= 1
            }
            leftIndex++
        }

    }
    return result
}

/**
 * <h3>sliding window</h3>
 * Given two strings `s1` and `s2`, return `true` if `s2` contains a permutation of `s1`, or `false` otherwise.
 * In other words, return `true` if one of `s1`'s permutations is the substring of `s2`.
 * **Example 1:**
 * ```
 * Input: s1 = "ab", s2 = "eidbaooo"
 * Output: true
 * Explanation: s2 contains one permutation of s1 ("ba").
 * ```
 * **Example 2:**
 * ```
 * Input: s1 = "ab", s2 = "eidboaoo"
 * Output: false
 ```
 * check if s1 is the permutation of one sub string of s2
 * @param s1 the pattern
 * @param s2 the target
 * @returns true if s1 is the permutation of substring of s2, otherwise false
 */
const checkStringPermutation = (s1: string, s2: string): boolean => {
    // another word we need to find the substring of s2 containing k of a, j of b, etc...
    // sliding window of the fixed width of the length of s1, the uniqueness here is that 
    // we move the left and right index the same time if it's not matching
    // edge case 
    if (s1 === null || s2 === null || s2.length < s1.length) return false
    let left = 0
    let right = s1.length - 1

    return false
}

export { longestSubstrWithUniqueChar, checkStringPermutation }