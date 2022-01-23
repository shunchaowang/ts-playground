import { LinkedNode } from "./LinkedList"

/**
 * You are given the heads of two sorted linked lists `list1` and `list2`.
 * Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.
 * Return the head of the merged linked list.
 * ---
 * ### Example 1
 * **Input:** `list1 = [1,2,4], list2 = [1,3,4]`
 * **Output:** `[1,1,2,3,4,4]`
 * ### Example 2
 * **Input:** `list1 = [], list2 = []`
 * **Output:** `[]`
 */
export const mergeTwoSortedList = (list1: LinkedNode<number>, list2: LinkedNode<number>): LinkedNode<number> => {

    // if either of the list is empty, return the other one
    if (list1 === null) return list2
    if (list2 === null) return list1
    // 1->2->4->6->8
    // 1->3->4
    // set up the new head pointing the smaller elements of the list
    // compare the current nodes of two list, attach the smaller one to the new list and shift it until reaching
    // the end of either list
    let curr1 = list1
    let curr2 = list2
    const head = new LinkedNode<number>()
    let curr = head

    while (curr1 !== null && curr2 !== null) {
        if (curr2.value < curr1.value) {
            curr.next = curr2
            curr2 = curr2.next
        } else {
            curr.next = curr1
            curr1 = curr1.next
        }
        curr = curr.next
    }

    // we need to link the rest of the unfinished list
    if (curr1 !== null) curr.next = curr1
    if (curr2 !== null) curr.next = curr2

    return head
}