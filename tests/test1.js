describe("pow", function() {

	it("при возведении 2 в 3ю степень результат 8", function() {
		assert.equal(pow(2, 3), 8);
	});

	it("при возведении 3 в 4ю степень равен 81", function() {
		assert.equal(pow(3, 4), 81);
	});

	it("при возведении в отрицательную степень результат NaN", function() {
		assert(isNaN(pow(2, -1)), "pow(2, -1) не NaN");
	});

	it("при возведении в дробную степень результат NaN", function() {
		assert(isNaN(pow(2, 1.5)), "pow(2, -1) не NaN");
	});

});