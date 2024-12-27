import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = props => {
	const [expenseForm, setExpenseForm] = useState({
		title: '',
		amount: 0,
		date: '',
	})

	const expenseFormHandler = e => {
		const { name, value } = e.target
		setExpenseForm(prevsForm => ({
			...prevsForm,
			[name]: value,
		}))
	}
	const submitHandler = e => {
		e.preventDefault()
		const date = 'date'
		const expenseData = {
			...expenseForm,
			[date]: new Date(expenseForm.date),
		}
		console.log(expenseData)
		props.onFormSubmit(expenseData)

		setExpenseForm({
			title: '',
			amount: 0,
			date: '',
		})
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='expenses-form'>
				<div className='input__flex'>
					<div className='input__info'>
						<label className='expenses__label'>Title</label>
						<input
							className='input__expenses'
							type='text'
							name='title'
							value={expenseForm.title}
							onChange={expenseFormHandler}
						/>
					</div>
					<div className='input__info amount'>
						<label className='expenses__label'>Amount</label>

						<input
							className='input__expenses'
							type='number'
							name='amount'
							value={expenseForm.amount}
							onChange={expenseFormHandler}
						/>
					</div>
					<div className='input__info'>
						<label className='expenses__label'>Date</label>

						<input
							className='input__expenses'
							type='date'
							min='2019-03-24'
							max='2022-12-25'
							name='date'
							value={expenseForm.date}
							onChange={expenseFormHandler}
						/>
					</div>
				</div>
				<button className='expense__btn' type='submit'>
					Add Expenses
				</button>
			</div>
		</form>
	)
}

export default ExpenseForm
