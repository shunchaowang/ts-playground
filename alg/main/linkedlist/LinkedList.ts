export class LinkedNode<T> {
    value: T
    next: LinkedNode<T>

    constructor(value?: T) {
        this.value = value
        this.next = null
    }
}

// we add a head as a entry point
export function toLinkedList<T>(values: T[]): LinkedNode<T> {

    const head = new LinkedNode<T>()
    let curr = head
    for (const value of values) {
        const node = new LinkedNode<T>(value)
        curr.next = node
        curr = curr.next
    }

    return head.next
}

// we convert the LinkedList into an array
export function toArray<T>(node: LinkedNode<T>): T[] {
    const arr: T[] = []
    let curr = node
    while (curr !== null) {
        arr.push(curr.value)
        curr = curr.next
    }
    return arr
}
