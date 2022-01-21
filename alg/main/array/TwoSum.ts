/**
 * Given an array of integers nums and an integer target, return the two numbers such that 
 * they add up to target.
 * You may assume that you may not use the same element twice.
 * You can return the answer in non decending order.
 * ---
 * * Example 1:
 *  - Input: nums = [2,7,11,15], target = 9
    - Output: [2,7]
    - Explanation: Because nums[0] + nums[1] == 9, we return [2,7].
Example 2:
Input: nums = [3,2,4], target = 6
Output: [2,4]
Example 3:
Input: nums = [3,3], target = 6
Output: [3,3]
 */

// use hash map, iterate the array, for each element e, check if target - e exists in the map,
// if existing, one result is found, remove e from the map, this will make sure each element is only used once;
// if not existing, put e into the map.
// demo of nums = [3,2,4,3,5], target = 6
// initialize a map {}, result []
// e = 3, since map doesn't have 6-3, the map becomes {0->3};
// e=2, target-e=4, not existing, map {0->3, 1->2}
// e=4, target-e=2, existing, map {0->3}, result [2,4]

function twoSum(arr: readonly number[], target: number): number[] {

    const map = new Map<number, boolean>()
    for (const element of arr) {
        const remaining = target - element
        if (map.get(remaining)) {
            return [element, remaining].sort()
        } else {
            map.set(element, true)
        }
    }

    return []
}

export { twoSum }