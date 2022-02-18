/**
 * <h3>Sliding Window</h3>
 * <h4>Hard</h4>
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
 * <h4>Medium</h4>
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
 * ```
 * **Containts:**
 * ```
 * 1 <= s1.length, s2.length <= 10000
 * s1 and s2 consist of lowercase english letters
 * 
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
    // assume the string only contains the alphabets encoding in 8 bits, create an array of 26
    // to store all counts for the individual character,
    // first iterate s1 to set the occurence of each character,
    // then sliding the window on s2, minus the character encountered,
    // if the array still all 0, we found the permutation. 
    // utf-8 encoding starts at 97 as 'a', 'z' is 97+25=122.
    const NO_OF_LETTER = 26
    let count = new Array<number>(NO_OF_LETTER)
    count.fill(0)
    // iterate s1
    for (let i = 0; i < s1.length; i++) {
        count[s1.charCodeAt(i) - 97]++
    }
    // create the sliding windows
    let start = 0
    let end = s1.length - 1
    let count2 = new Array<number>(NO_OF_LETTER)
    count2.fill(0)
    while (end < s2.length) {
        for (let j = start; j <= end; j++) {
            count2[s2.charCodeAt(j) - 97]++
        }
        if (arrayEquals(count, count2)) return true
        count2.fill(0)
        start++
        end++
    }
    return false
}

/**
 * <h3>Two Pointers</h3>
 * <h4>Hard</h4>
 * Given two strings `s` and `t` of lengths `m` and `n` respectively, 
 * return the minimum window substring of `s` such that every character in `t` (including duplicates) is included in the window. 
 * If there is no such substring, return the empty string `""`.
 * The testcases will be generated such that the answer is unique.
 * A substring is a contiguous sequence of characters within the string.
 * ---
 * **Example 1:**
 * ```
 * Input: s = "ADOBECODEBANC", t = "ABC"
 * Output: "BANC"
 * Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
 * ```
 * **Example 2:**
 * ```
 * Input: s = "a", t = "a"
 * Output: "a"
 * Explanation: The entire string s is the minimum window.
 * ```
 * **Example 3:**
 * ```
 * Input: s = "a", t = "aa"
 * Output: ""
 * Explanation: Both 'a's from t must be included in the window.
 * Since the largest window of s only has one 'a', return empty string.
 * ```
 * **Constraints:**
 * - m == s.length
 * - n == t.length
 * - 1 <= m, n <= 105
 * - s and t consist of uppercase and lowercase English letters.
 * ---
 * **Follow up:** Could you find an algorithm that runs in `O(m + n)` time?
 * ---
 * @param s the string to find the minumum substring
 * @param t the pattern to match
 * @returns the minimum substring or empty string if not existing
 */
const minimumWindow = (s: string, t: string): string => {
    if (s.length < t.length) return ''
    const NO_OF_LETTER = 26
    const patternCount = new Array<number>(NO_OF_LETTER)
    patternCount.fill(0)
    const sourceCount = new Array<number>(NO_OF_LETTER)
    sourceCount.fill(0)
    for (let i = 0; i < t.length; i++) {
        patternCount[t.charCodeAt(i) - 97]++
    }
    return ''
}

const arrayEquals = (a: any[], b: any[]): boolean => {
    return a.length === b.length
        && a.every((v, i) => v === b[i])
}

export { longestSubstrWithUniqueChar, checkStringPermutation, minimumWindow }