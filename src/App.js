import { useState } from 'react'
import ExpensesList from './Expenses/ExpensesList'
import NewExpense from './NewExpense/NewExpense'

const EXPENSES = [
	{
		id: 'e1',
		title: 'Toilet Paper',
		amount: 94.12,
		date: new Date(2020, 7, 14),
	},
	{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
	{
		id: 'e3',
		title: 'Car Insurance',
		amount: 294.67,
		date: new Date(2021, 2, 28),
	},
	{
		id: 'e4',
		title: 'New Desk (Wooden)',
		amount: 450,
		date: new Date(2021, 5, 12),
	},
]
function App() {
	const [expense, setExpense] = useState(EXPENSES)

	const addExpense = savedExpense => {
		setExpense(prevsExpenses => [savedExpense, ...prevsExpenses])
	}

	return (
		<div className='App'>
			<main>
				<NewExpense onSavedExpense={addExpense} />
				<ExpensesList expenses={expense} />
			</main>
		</div>
	)
}

export default App
