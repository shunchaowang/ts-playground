import { Component } from '../src/component/Component';

let item: Component;

describe('A suite is just a function', function () {
    beforeEach(() => {
        item = new Component();
    });

    it('2 x 2 === 4', function () {
        const result = item.testMultiplyMethod(2, 2);
        expect(result).toBe(4);
    });
});