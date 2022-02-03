/**
 * Given an array of integers nums which is sorted in ascending order, and an integer target, 
 * write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
 * ---
 * You must write an algorithm with O(log n) runtime complexity.
 * ---
 * - Example 1:
 * ```
 * Input: nums = [-1,0,3,5,9,12], target = 9
 * Output: 4
 * Explanation: 9 exists in nums and its index is 4
 * ```
 * - Example 2:
 * ```
 * Input: nums = [-1,0,3,5,9,12], target = 2
 * Output: -1
 * Explanation: 2 does not exist in nums so return -1
 * ```
 */
const binarySearch = (nums: number[], target: number): number => {
    let beginning = 0
    let ending = nums.length - 1
    while (beginning <= ending) {
        const middle = Math.floor((beginning + ending) / 2)
        if (nums[middle] === target) {
            return middle
        }
        if (nums[middle] > target) {
            ending -= 1
        } else {
            beginning += 1
        }
    }
    return -1
}

/**
 * Given a sorted array of distinct integers and a target value, return the index if the target is found.
 * If not, return the index where it would be if it were inserted in order.
 * You must write an algorithm with O(log n) runtime complexity.
 * ---
 * - Example 1:
 * ```
 * Input: nums = [1,3,5,6], target = 5
 * Output: 2
 * ```
 * - Example 2:
 * ```
 * Input: nums = [1,3,5,6], target = 2
 * Output: 1
 * ```
 * - Example 3:
 * Input: nums = [1,3,5,6], target = 7
 * Output: 4
 * ```
 * @param nums 
 * @param target 
 * @returns 
 */
const searchInsert = (nums: number[], target: number): number => {

    let start = 0
    let end = nums.length - 1
    // check 2 edge cases first
    if (target < nums[start]) return start
    if (target > nums[end]) return nums.length
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) {
            end = mid - 1
        } else {
            if (nums[mid + 1] > target) return mid + 1
            start = mid + 1
        }
    }
    return -1
}

export { binarySearch, searchInsert }