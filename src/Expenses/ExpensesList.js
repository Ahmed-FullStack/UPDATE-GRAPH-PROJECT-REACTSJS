import { useState } from 'react'
import Card from '../UI/Card/Card'
import FilteredExpensesItems from './FilteredExpensesItems'
import ExpensesFilter from './ExpenseFilter'
import './ExpensesList.css'
import ExpensesChart from './ExpenseChart'
const ExpensesList = props => {
	const [year, setYear] = useState('2021')
	const changedYear = filteredYear => {
		setYear(filteredYear)
	}

	const filteredItems = props.expenses.filter(
		expense => expense.date.getFullYear().toString() === year
	)

	return (
		<Card type='section' className='expense-list'>
			<ExpensesFilter defaultYear={year} onChange={changedYear} />
			<ExpensesChart data={filteredItems} />
			<FilteredExpensesItems filteredItems={filteredItems} />
		</Card>
	)
}

export default ExpensesList
