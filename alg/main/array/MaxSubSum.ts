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

/**
 * Given an array of integers of size `n`, calculate the maximum sum of `k` consecutive elements in the array.
 * - example 1
 * ```
 * Input  : arr[] = {100, 200, 300, 400}
 * k = 2
 * Output : 700
 * ```
 * - example 2
 * ```
 * Input: arr[] = {1, 4, 2, 10, 23, 3, 1, 0, 20}
 * k = 4
 * Output : 39
 * We get maximum sum by adding subarray {4, 2, 10, 23} of size 4.
 * ```
 * - example 3
 * Input  : arr[] = {2, 3}
 * k = 3
 * Output : Invalid
 * There is no subarray of size 3 as size of whole array is 2.
 * ```
 */
const maxSubSumOfLength = (arr: readonly number[], length: number): any => {
    /**
     * sliding windows to move the pane with the fixed length
     * first formulate a window of `length`, calculate the sum window
     * then move the window by steps, minus the 1st element of the wiendow, and add the last element
     * get the largest sum
     */
    if (arr === null || arr === undefined || arr.length < length) return 'invalid'
    let max = 0
    let i = 0
    while (i < length) {
        max += arr[i++]
    }
    let maxSum = max
    while (i < arr.length) {
        max -= arr[i - length]
        max += arr[i++]
        maxSum = Math.max(maxSum, max)
    }

    return maxSum
}

export { maxSubSum, maxSubSumOfLength }
