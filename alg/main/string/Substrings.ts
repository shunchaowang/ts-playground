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

export { longestSubstrWithUniqueChar }