/**
 * quick sort with a pivot defined in place
 * @param nums the array to sort
 * @param start the inclusive start index to sort
 * @param end the inclusive end index to sort
 * @param pivot the pivot difined
 */
const quickSort = (nums: number[], start: number, end: number) => {
    if (nums === null || nums === undefined) return

    if (start < end) {
        const p = partition(nums, start, end)
        quickSort(nums, start, p - 1)
        quickSort(nums, p + 1, end)
    }
}

/**
 * return the partition of the array from [start, end] which elements on left is not 
 * greater than the partition and elements on right is not bigger than the partition.
 * the pivot will be `nums[end]`
 * @param nums the array to partition
 * @param start the start index of the array, >= 0
 * @param end the end index of the array, < nums.length
 */
const partition = (nums: number[], start: number, end: number): number => {

    let index = start - 1 // will be the index for all elements less than the pivot
    const pivot = nums[end]
    for (let j = start; j < end; j++) {
        // iterate the array from start to end - 1, increment index if encountering the element less than 
        // pivot, and swap the elements at index+1 with j. why? 
        // think of every smaller elements needs a space on left, so incrementing the index;
        // we index starts from start-1, so index is smaller than j, we already passed index+1,
        // which means nums[index+1]>=pivot, we swap (index+1, j).
        if (nums[j] < pivot) {
            index++
            swap(nums, index, j)
        }
    }

    // now elements from index++ to end - 1 are larger than pivot
    // let's swap index+1 with end
    swap(nums, index + 1, end)

    return index + 1
}

const swap = (nums: number[], i: number, j: number) => {
    const t = nums[i]
    nums[i] = nums[j]
    nums[j] = t
}

export { quickSort, swap }