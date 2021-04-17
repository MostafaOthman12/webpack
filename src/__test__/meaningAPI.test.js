import { MeaningAPI } from '../client/js/meaningAPI';
import 'regenerator-runtime/runtime';
describe("Test That it's a function", () => {
	it('is it correctly defined ', async () => {
		expect(MeaningAPI).toBeDefined();
	});
});
describe('Test that Api Returning Object', () => {
	let result = MeaningAPI();
	it('is it Function ', async () => {
		await expect(typeof result).toBe('object');
	});
});
