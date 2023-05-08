import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { categories } from '../categories'

const schema = z.object({
    description: z.string().min(3, 'Description should be at least 3 characters').max(50, 'Description should not be more than 50 characters'),
    amount: z.number().min(20, 'Amount can\'t be less than 20 naira').max(100_000_000, 'Amount can\'t be more than 100 million naira'),
    category: z.enum(categories, {
        errorMap: () => ({ message: 'Category is required.' })
    })
})

type ExpenseFormData = z.infer<typeof schema>

interface ExpenseFormProps {
    onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: ExpenseFormProps) => {

    const { register, handleSubmit, formState: { errors, isValid }, reset } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) })

  return (
    <form onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
    })}>
        <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" type="text" className="form-control" />
                {errors.description && <p className='text-danger'>{errors.description.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', { valueAsNumber: true })} id="amount" type="number" className="form-control" />
                {errors.amount && <p className='text-danger'>{errors.amount.message}</p>}
        </div>
        <div className="mb-3">
            <label htmlFor="category" className="form-label">Category</label>
                <select {...register('category')} id="category" className="form-select">
                    <option value="">All categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                    ))}
                </select>
                {errors.category && <p className='text-danger'>{errors.category.message}</p>}
        </div>
        <button disabled={!isValid} className="btn btn-primary">Add Expense</button>
    </form>
  )
}

export default ExpenseForm