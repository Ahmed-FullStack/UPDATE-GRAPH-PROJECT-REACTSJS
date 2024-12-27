import { useRef, useState } from 'react'
import './GraphBar.css'

const GraphBar = props => {
	if (props.maxValue > 0) {
		var barFill = Math.round((props.value / props.maxValue) * 100) + '%'
	}
	return (
		<li className='graph-bar'>
			<div className='graph-bar__inner'>
				<div className='graph-bar__fill' style={{ ['--height']: barFill }}></div>
			</div>
			<div className='overflow no-pointer-events'>
				<div className='hover'>
					{props.maxValue === 0 ? (
						<p>No Expenses</p>
					) : (
						`${barFill}  In ${props.label}`
					)}
				</div>
			</div>
			<div className='graph-bar__label'>{props.label}</div>
		</li>
	)
}

export default GraphBar
