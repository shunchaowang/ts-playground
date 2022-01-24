import { toLinkedList, toArray } from '../../main/linkedlist/LinkedList'
import { mergeTwoSortedList } from '../../main/linkedlist/MergeTwoSortedList'

describe('merge two sorted link list', () => {

    const arr1 = [1, 2, 4]
    const arr2 = [1, 3, 4]
    const expected1 = [1, 1, 2, 3, 4, 4]
    it(`${arr1} and ${arr2} merged to be ${expected1}`, () => {
        const list1 = toLinkedList(arr1)
        const list2 = toLinkedList(arr2)
        const actual = toArray(mergeTwoSortedList(list1, list2))
        expect(actual).toBe(actual)
    })

    const emptyArr: number[] = []
    it(`${emptyArr} and ${emptyArr} merged to be ${emptyArr}`, () => {
        const list1 = toLinkedList(emptyArr)
        const list2 = toLinkedList(emptyArr)
        expect(toArray(mergeTwoSortedList(list1, list2))).toStrictEqual([])
    })
})