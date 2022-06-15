import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
// import ExpensesChart from './ExpensesChart';
// import Card from "./Card";
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

    return (
      <div className="expenses">
          <h2>Expense Tracker</h2>
          <ExpenseFilter 
            selected={filteredYear} 
            onChangeFilter={filterChangeHandler}
          />

          {/* <ExpensesChart expenses={filteredExpenses} /> */}
          <ExpensesList items={filteredExpenses}/>

          {/* Using and&& operator to define condition */}
          {/* {filteredExpenses.length === 0 && <p>No expense found.</p>} */}

          {/* Using Ternary Operator */}
          {/* {filteredExpenses.length === 0 ? (
            <p>No expense found</p>
            ) : (
              filteredExpenses.map((expense) => (
                <ExpenseItem
                  key={expense.id}
                  title={expense.title}
                  amount={expense.amount}
                  date={expense.date}
                />
              ))
            )} */}
          
          {/* <ExpenseItem 
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
         <ExpenseItem 
            title={props.items[2].title}
            amount={props.items[2].amount}
            date={props.items[2].date}
          /> */}
      </div>
    );
};

export default Expenses;