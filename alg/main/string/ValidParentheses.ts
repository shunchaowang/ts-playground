/**
 * Given a string s containing just the characters `(`, `)`, `{`, `}`, `[` and `]`, 
 * determine if the input string is valid.
 * ---
 * An input string is valid if:
 * 1. Open brackets must be closed by the same type of brackets.
 * 2. Open brackets must be closed in the correct order.
 * ---
 * ### Example 1
 * ```
 * **Input:** s = "()"
 * **Output:** true
 * ```
 * ### Example 2
 * ```
 * **Input:** s = "()[]{}"
 * **Output:** true
 * ```
 * ### Example 3
 * ```
 * **Input:** s = "(])]"
 * **Output:** false
 * ```
 * ### Example 4
 * ```
 * **Input:** s = "({})"
 * **Output:** true
 * ```
 */
import { Stack } from 'stack-typescript'

export const validParentheses = (s: string): boolean => {

    // ()[]{}
    // ({})
    // we can use stack, FILO, push when a left parenthese occurs; pop when a right 
    // parenthese occurs, check if the popping element is paired with the current element.
    // 2 edge cases, if the stack is not empty when the iteration is done, it's not valid;
    // if the stack is empty when the encounter a right parenthese, it's not valid.
    // create a map to store the paired parenthese
    // try map literal
    const maps = new Map<string, string>([
        [')', '('],
        [']', '['],
        ['}', '{']
    ])

    const stack = new Stack<string>()
    const chars = [...s]
    for (const c of chars) {
        switch (c) {
            case '(':
            case '[':
            case '{':
                stack.push(c)
                break
            case ')':
            case ']':
            case '}':
                if (stack.size === 0) return false
                const top = stack.pop()
                if (top !== maps.get(c)) {
                    return false
                }
                break
        }
    }
    if (stack.length !== 0) return false
    return true
}
