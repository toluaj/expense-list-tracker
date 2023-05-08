import { useState } from "react"
import './App.css'
import './index.css'
import ExpenseList from "./expense-tracker/components/ExpenseList"
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter"
import ExpenseForm from "./expense-tracker/components/ExpenseForm"

function App() {
    const [selectedCategory, setSelectedCategory] = useState('')
    const [expenses, setExpenses] = useState([
      { id: 0, description: '', amount: 0, category: '' },
])

    const onDelete = (id: number) => {
      setExpenses(expenses.filter(x => x.id!== id))
    }

    const filteredExpenses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses.splice(1)
    
    return (
    <div>
      <div className="mb-5">
      <ExpenseForm onSubmit={(expense) => setExpenses([...expenses, { id: expenses.length + 1, ...expense }])} />
      </div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)} />
      </div>
      <ExpenseList expenses={filteredExpenses} onDelete={onDelete} />
    </div>  
    )
}

export default App