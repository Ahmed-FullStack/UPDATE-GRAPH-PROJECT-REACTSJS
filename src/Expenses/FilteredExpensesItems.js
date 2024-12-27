import Expense from './Expense'
import './FilteredExpensesItems.css'

const FilteredExpensesItems = props => {
	return props.filteredItems.length !== 0 ? (
		props.filteredItems.map(item => (
			<Expense
				key={item.id}
				title={item.title}
				amount={item.amount}
				date={item.date}
			/>
		))
	) : (
		<p className='not-found'>No Items Found</p>
	)
}

export default FilteredExpensesItems
