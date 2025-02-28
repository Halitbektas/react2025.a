import './ExpenseList.css'

function ExpenseList({ date, amount, title }) {
    const month = date.toLocaleDateString("en-US", { month: "long" });
    const day = date.toLocaleDateString("en-US", { month: "2-digit" });
    const year = date.getFullYear();

    return (
        <div className="expense-item">
            <div>
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount.toFixed(2)}</div>
            </div>
        </div>
    )
}

export default ExpenseList
