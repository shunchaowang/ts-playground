import { maxStockProfit } from '../../main/array/MaxStockProfit'

describe('test to max the profit of stock buy and sell', () => {
    const prices1 = [7, 1, 5, 3, 6, 4]
    const max1 = 5
    const prices2 = [7, 6, 4, 3, 1]
    const max2 = 0
    it(`max of ${prices1} is ${max1}`, () => {
        expect(maxStockProfit(prices1)).toBe(max1)
    })
    it(`max of ${prices2} is ${max2}`, () => {
        expect(maxStockProfit(prices2)).toBe(max2)
    })
})