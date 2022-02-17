import { swap } from "./Sorting"
/**
 * <h3>Two Pointers</h3>
 * <h4>Medium</h4>
 * Given an array nums with n objects colored red, white, or blue, sort them in-place so that objects of the same color are adjacent,
 * with the colors in the order red, white, and blue.
 * We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.
 * You must solve this problem without using the library's sort function.
 * ---
 * **Example 1:**
 * ```
 * Input: nums = [2,0,2,1,1,0]
 * Output: [0,0,1,1,2,2]
 * ```
 * **Example 2:**
 * ```
 * Input: nums = [2,0,1]
 * Output: [0,1,2]
 * ---
 * **Constraints:**
 * > - n == nums.length
 * > - 1 <= n <= 300
 * > - nums[i] is either 0, 1, or 2.
 * **Follow up:**
 *  Could you come up with a one-pass algorithm using only constant extra space?
 * 
 * @param nums the colors code to sorted in place
 */
const sortColors = (nums: number[]) => {
    if (nums === null || nums === undefined ||
        nums.length === 0 || nums.length === 1) return

    // borrow the idea from quick sort, but 2 pointers are used here
    // we can finish it with one-pass using only constant extra space
    // iterate through the array, when we see 0, put to the beginning;
    // when we see 2, put to the end
    let s = -1
    let i = 0
    let e = nums.length

    while (i < e) {
        if (nums[i] === 0) {
            s++
            swap(nums, s, i)
            i++
        } else if (nums[i] === 2) {
            e--
            swap(nums, e, i)
        } else {
            i++
        }
    }
}

export { sortColors }