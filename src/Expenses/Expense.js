import Card from '../UI/Card/Card'
import ExpenseDate from './ExpenseDate'
import './Expense.css'

const Expense = props => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense__description'>
				<h3>{props.title}</h3>
				<h3>${props.amount}</h3>
			</div>
		</Card>
	)
}

export default Expense
