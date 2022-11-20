function getCoordinates(matrix) {
	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			if (matrix[i][j] === 1) {
				return {
					x: j,
					y: i
				};
			}
		}
	}
}

module.exports = getCoordinates;