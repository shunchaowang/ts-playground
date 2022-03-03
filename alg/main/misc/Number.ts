/**
 * Write an algorithm to determine if a number `n` is happy.
 * ---
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits.
 * Repeat the process until the number equals `1` (where it will stay), or it loops endlessly in a cycle which does not include `1`.
 * Those numbers for which this process ends in `1` are happy.
 * Return `true` if `n` is a happy number, and `false` if not.
 * ---
 * **Example 1:**
 * ```
 * Input: n = 19
 * Output: true
 * Explanation:
 * 12 + 92 = 82
 * 82 + 22 = 68
 * 62 + 82 = 100
 * 12 + 02 + 02 = 1
 * ---
 * **Example 2:**
 * ```
 * Input: n = 2
 * Output: false
 * ---
 * @param n 
 * @returns 
 */
const happyNumber = (n: number): boolean => {

    // if the same numbers occur twice, it's going to be a dead loop, and it's not happy
    let set = new Set()
    while (n !== 1) {
        if (set.has(n)) return false
        set.add(n)
        n = permutateNumber(n)
    }
    return true
}

const permutateNumber = (n: number): number => {
    let result = 0
    while (n !== 0) {
        const mod = n % 10
        result += mod * mod
        n = Math.floor(n / 10)
    }
    return result
}

export { happyNumber }