const getCoordinates = require('./index');
const solution = require('./system/solution');
const { getRandomInt } = require('./system/environment');

test('Функция должна вернуть объект в виде: { x: number, y: number }', () => {
	const res = getCoordinates([
		[0, 0],
		[0, 1]
	]);

	expect(typeof res).toBe('object');
	expect(res.x).toBeDefined();
	expect(res.y).toBeDefined();
	expect(typeof res.x).toBe('number');
	expect(typeof res.y).toBe('number');
});

test('Тест. x = 1, y = 1', () => {
	const res = getCoordinates([
		[0, 0],
		[0, 1]
	]);

	expect(res.x).toBe(1);
	expect(res.y).toBe(1);
});

test('Тест. x = 1, y = 2', () => {
	const res = getCoordinates([
		[ 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0 ],
		[ 0, 1, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0 ]
	]);

	expect(res.x).toBe(1);
	expect(res.y).toBe(2);
});

test('Тест. x = 8, y = 4', () => {
	const res = getCoordinates([
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 1 ]
	]);

	expect(res.x).toBe(8);
	expect(res.y).toBe(4);
});

test('Тест. x = 3, y = 6', () => {
	const res = getCoordinates([
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 1, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
	]);

	expect(res.x === 3 && res.y === 6).toBeTruthy();
});

test('Auto: random outcomes', () => {
	const generateMatrix = () => {
		const rowsAmount = getRandomInt(1, 15);
		const cellsAmount = getRandomInt(1, 15);
		const xIndex = getRandomInt(0, cellsAmount - 1);
		const yIndex = getRandomInt(0,  rowsAmount - 1);

		const matrix = [];

		for (let i = 0; i < rowsAmount; i++) {
			const row = new Array(cellsAmount);
			row.fill(0);
			matrix.push(row);
		}

		matrix[yIndex][xIndex] = 1;

		return matrix;
	};

	for (let i = 0; i < 20; i++) {
		const matrix = generateMatrix();

		const solutionResult = solution(matrix);
		const userResult = getCoordinates(matrix);

		expect(userResult.x).toBe(solutionResult.x);
		expect(userResult.y).toBe(solutionResult.y);
	}
});