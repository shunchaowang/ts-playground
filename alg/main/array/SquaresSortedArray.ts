/**
 * <h3>Two Pointers</h3>
 * <h4>Medium</h4>
 * Given an integer array `nums` sorted in **non-decreasing** order, 
 * return an array of the **squares of each number** sorted in non-decreasing order.
 * ---
 * **Example 1:**
 * ```
 * Input: nums = [-4,-1,0,3,10]
 * Output: [0,1,9,16,100]
 * Explanation: After squaring, the array becomes [16,1,0,9,100].
 * After sorting, it becomes [0,1,9,16,100].
 * ```
 * **Example 2:**
 * ```
 * Input: nums = [-7,-3,2,3,11]
 * Output: [4,9,9,49,121]
 * ---
 * **Containts:**
 * > - 1 <= nums.length <= 10,000
 * > - -10,000 <= nums[i] <= 10,000
 * > - nums is sorted in non-decreasing order
 * ---
 * Floow up
 * Squaring each element and sorting the new array is very trivial, 
 * could you find an O(n) solution using a different approach?
 * 
 * @param nums the sorted non-decreasing array
 * @returns the sorted array of the square of each elements
 */
const squaresSortedArray = (nums: number[]): number[] => {
    if (nums === null || nums.length === 0) return []
    if (nums.length === 1) return nums.map((v) => v * v)
    const result = new Array<number>()
    // edge cases are all positive or negative
    // if all are negative, the new array will be reverse
    if (nums[nums.length - 1] <= 0) {
        for (let j = nums.length - 1; j >= 0; j--) {
            result.push(nums[j] * nums[j])
        }
        return result
    }
    // if all are positive, the new array will be the same order
    if (nums[0] >= 0) {
        for (const n of nums) {
            result.push(n * n)
        }
        return result
    }

    // if the array contains both positive and negative elements, we need to find 'middle' one 
    // between negative and positive elements, this middle element will be the 1st of the result
    let minIndex
    let i = 0
    let min = Number.MAX_VALUE
    while (i < nums.length) {
        if (nums[i] * nums[i] < min) {
            min = nums[i] * nums[i]
            minIndex = i
        }

        // break if we have reached the bottom
        if (nums[i] * nums[i] > min) {
            break
        }
        i++
    }

    // with the minIndex, we have 2 pointers moving from the minIndex to the beginning and the end
    result.push(nums[minIndex] * nums[minIndex])
    let left = minIndex - 1
    let right = minIndex + 1
    while (left >= 0 || right <= nums.length - 1) {
        // find the smaller one and add to the result, shift the pointer
        const leftSquare = left < 0 ? Number.MAX_VALUE : nums[left] * nums[left]
        const rightSquare = right > nums.length - 1 ? Number.MAX_VALUE : nums[right] * nums[right]
        if (leftSquare < rightSquare) {
            result.push(leftSquare)
            left--
        } else {
            result.push(rightSquare)
            right++
        }
    }

    return result
}

export { squaresSortedArray }