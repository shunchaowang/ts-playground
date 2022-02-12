/**
 * <h3>Sliding Window<h3>
 * You are visiting a farm that has a single row of fruit trees arranged from left to right.
 * The trees are represented by an integer array fruits where `fruits[i]` is the type of fruit the `ith` tree produces.
 * You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
 * You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
 * Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right.
 * The picked fruits must fit in one of your baskets.
 * Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
 * Given the integer array fruits, return the maximum number of fruits you can pick.
 * ---
 * **Example 1:**
 * ```
 * Input: fruits = [1,2,1]
 * Output: 3
 * Explanation: We can pick from all 3 trees.
 * ```
 * **Example 2:
 * ```
 * Input: fruits = [0,1,2,2]
 * Output: 3
 * Explanation: We can pick from trees [1,2,2].
 * If we had started at the first tree, we would only pick from trees [0,1].
 * ```
 * **Example 3:**
 * ```
 * Input: fruits = [1,2,3,2,2]
 * Output: 4
 * Explanation: We can pick from trees [2,3,2,2].
 * If we had started at the first tree, we would only pick from trees [1,2].
 * ```
 * @param fruits the fruit type 
 * @returns the total fruit we can pick
 */
const totalFruits = (fruits: number[]): number => {
    // this is the same with longest sub array with 2 distinct elements
    // check the edge case 
    if (fruits === null || fruits === undefined) return 0
    if (fruits.length <= 2) return fruits.length
    // first create a map to store the occurence of the elements
    const map = new Map<number, number>()
    fruits.forEach((v, i) => {
        map.set(v, 0)
    })

    // start from the 1st element
    let left = 0
    let right = 0
    let maxLength = 1
    let distinct = 1
    map.set(fruits[right], 1)
    while (right < fruits.length) {
        if (distinct <= 2) {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1
            }
            right++
            map.set(fruits[right], map.get(fruits[right]) + 1)
            if (map.get(fruits[right]) === 1) {
                distinct++
            }
        } else {
            map.set(fruits[left], map.get(fruits[left]) - 1)
            if (map.get(fruits[left]) === 0) {
                distinct--
            }
            left++
        }
    }

    return maxLength
}

export { totalFruits }