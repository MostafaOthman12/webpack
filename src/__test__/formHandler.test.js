import { handleSubmit } from '../client/js/formHandler';

describe("Test That it's a function", () => {
	it('is it correctly defined ', () => {
		expect(handleSubmit).toBeDefined();
	});
});
describe("Test That it's a function", () => {
	it('is it Function ', () => {
		expect(typeof handleSubmit).toBe('function');
	});
});
