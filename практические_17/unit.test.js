import { getPercents, reverseStr, getMonth } from './1.js';

describe('test getPercents', () => {
	it('getPercents 10 - 100', () => {
		const result = getPercents(10, 100);
		expect(result).toBe(10);
	})
});
