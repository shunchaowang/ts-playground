/**
 * Given an integer array nums, find the contiguous subarray 
 * (containing at least one number) which has the largest sum and return its sum.
* A **subarray** is a **contiguous** part of an array.
 * @param arr the int array not empty
 * @returns the max sum of the sub array
 */
function maxSumOfSubArray(arr: readonly number[]): number {
    var maxSum = arr[0]
    var sum = 0
    var minSum = 0
    // iterate through the array, the goal is to find both the max(maxSum) and min sum(minSum) before the current element,
    // the result will be maxSum - minSum
    // eg 1 2 -1 4 -2 3
    arr.forEach(num => {
        sum += num
        maxSum = Math.max(maxSum, sum - minSum)
        minSum = Math.min(minSum, sum)
    })
    return maxSum
}

export { maxSumOfSubArray }
