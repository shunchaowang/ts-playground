/**
 * Given the head of a singly linked list, return the middle node of the linked list.
 * If there are two middle nodes, return the second middle node.
 * ---
 * **Example 1:**
 * ```
 * Input: head = [1,2,3,4,5]
 * Output: [3,4,5]
 * Explanation: The middle node of the list is node 3.
 * ```
 * **Example 2:**
 * ```
 * Input: head = [1,2,3,4,5,6]
 * Output: [4,5,6]
 * Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 * ```
 * **Constraints:**
 * - The number of nodes in the list is in the range [1, 100].
 * - 1 <= Node.val <= 100
 * @param head Given the head of a singly linked list, return the middle node of the linked list.
 */
const middleNode = (head: ListNode | null): ListNode | null => {
    // two pointers, the fast one is moving twice as the slow one moving once
    if (head === null || head.next === null) return head
    if (head.next.next === null) return head.next // return the 2nd if there are 2

    // from here there are at least 3 elements
    let fast = head
    let slow = head
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next
        slow = slow.next
    }

    return slow

}

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export { middleNode as middleOfLinkedList }