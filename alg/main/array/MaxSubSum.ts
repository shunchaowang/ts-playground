/**
 * Given an integer array, find the contiguous subarray 
 * (containing at least one number) which has the largest sum and return its sum.
 * ---
 * A **subarray** is a **contiguous** part of an array.
 * @param arr the int array not empty
 * @returns the max sum of the sub array
 */
function maxSubSum(arr: readonly number[]): number {
    let maxSum = arr[0]
    let sum = 0
    let minSum = 0
    // iterate through the array, get the sum till the current element, the max sum to the current element
    // will be the sum minus the minimize sum of the prefix arrays before the current node. 
    // eg 1 2 -1 4 -2 3
    arr.forEach(num => {
        sum += num
        maxSum = Math.max(maxSum, sum - minSum)
        minSum = Math.min(minSum, sum)
    })
    return maxSum
}

export { maxSubSum }
