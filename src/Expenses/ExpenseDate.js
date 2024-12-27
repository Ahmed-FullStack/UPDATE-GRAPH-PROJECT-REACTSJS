import Card from '../UI/Card/Card'
import './ExpenseDate.css'
const ExpenseDate = props => {
	const month = props.date.toLocaleDateString('en-US', {
		month: 'long',
	})
	const getFullYear = props.date.getFullYear()
	const numericDate = props.date.toLocaleDateString('en-US', {
		day: 'numeric',
	})
	return (
		<Card>
		<h2 className='expense__date'>
			<span className='expense-date--month'>{month}</span>
			<span className='expense-date--year'>{getFullYear}</span>
			<span className='expense-date--date'>{numericDate}</span>
		</h2>
		</Card>
	)
}

export default ExpenseDate
