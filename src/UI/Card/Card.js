import './Card.css'
function Card(props) {
	let classes = `card ${props.className && props.className}`

	return (
	<>
	{props.type === `section` ? (
		<section className={classes}>{props.children}</section>
	): 
	<div className={classes}>{props.children}</div>
	} 


	</> 
	)

}

export default Card
