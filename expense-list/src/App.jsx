
import ExpenseList from './components/ExpenseList'

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { title: "Toilet Paple", amount: 94.12, date: new Date(2021, 2, 12) },
    { title: "New Phone", amount: 90.50, date: new Date(2022, 2, 28) },
    { title: "A Desk (Wooden)", amount: 140.02, date: new Date(2021, 2, 30) },

  ]
  return (
    <div>
      <ExpenseList
        title={expenses[0].title}
        date={expenses[0].date}
        amount={expenses[0].amount}>

      </ExpenseList>
      <ExpenseList title={expenses[1].title}
        date={expenses[1].date}
        amount={expenses[1].amount}></ExpenseList>
      <ExpenseList title={expenses[2].title}
        date={expenses[2].date}
        amount={expenses[2].amount}></ExpenseList>
      <ExpenseList title={expenses[3].title}
        date={expenses[3].date}
        amount={expenses[3].amount}></ExpenseList>

    </div>
  )
}

export default App
