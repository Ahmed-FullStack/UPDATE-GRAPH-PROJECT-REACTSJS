const FIlteredChart = props => {
	let dataPoints = [
		{ id: '3d1', month: 'Jan', value: 0 },
		{ id: '3d1', month: 'Feb', value: 0 },
		{ id: '3d1', month: 'March', value: 0 },
		{ id: '3d1', month: 'Jun', value: 0 },
		{ id: '3d1', month: 'July', value: 0 },
		{ id: '3d1', month: 'Aug', value: 0 },
		{ id: '3d1', month: 'Sep', value: 0 },
		{ id: '3d1', month: 'Oct', value: 0 },
		{ id: '3d1', month: 'Nov', value: 0 },
		{ id: '3d1', month: 'Dec', value: 0 },
	]
	for (const expense of props.dataPoints) {
		const month = expense.getMonth()
		console.log(month)
	}
}

export default FIlteredChart
