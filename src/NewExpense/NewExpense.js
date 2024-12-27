import ExpenseForm from './ExpenseForm'

const NewExpense = props => {
	const expenseAdded = submittedData => {
		const expenseData = {
			...submittedData,
			id: Math.floor(Math.random() * 5000),
		}

		props.onSavedExpense(expenseData)
	}
	return (
		<div>
			<ExpenseForm onFormSubmit={expenseAdded} />
		</div>
	)
}

export default NewExpense
