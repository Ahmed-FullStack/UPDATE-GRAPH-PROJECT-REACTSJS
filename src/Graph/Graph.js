import GraphBar from './GraphBar'
import './Graph.css'
const Graph = props => {
	const arrayOfValues = props.dataPoints.map(point => point.value)
	const MaxValue = Math.max(...arrayOfValues)
	return (
		<ul className='graph card'>
			{props.dataPoints.map(point => (
				<GraphBar
					key={point.label}
					label={point.label}
					maxValue={MaxValue}
					value={point.value}
				/>
			))}
		</ul>
	)
}

export default Graph
