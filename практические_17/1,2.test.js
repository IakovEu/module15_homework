import { getPercents, reverseStr } from './functions-here.js';

xdescribe('test getPercents', () => {
	it('getPercents 10 - 100', () => {
		const result1 = getPercents(10, 100);
		expect(result1).toBe(10);
	}),
		it('getPercents 300 - 200', () => {
			const result2 = getPercents(300, 200);
			expect(result2).toBe(600);
		}),
		it('getPercents 0 - 333', () => {
			const result3 = getPercents(0, 333);
			expect(result3).toBe(0);
		}),
		xit('getPercents -5 - 100', () => {
			const result3 = getPercents(-5, 100);
			expect(result3).toBe(5);
		});
});

xdescribe('test reverseStr', () => {
	it('reverseStr', () => {
		const result = reverseStr('001');
		expect(result).toBe('100');
	});
});
