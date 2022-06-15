import ExpenseDate from './ExpenseDate';
// import Card from './Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

    // const clickHandler = () => {
    //     console.log("Yeah!! You Clicked Me!!!")
    // }

    return (
        <li>
            <div className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <div className="expense-item__price">${props.amount}</div>
                </div>
                {/* <button onClick={clickHandler}>Click Meee!</button> */}
            </div>
        </li>
    );
};

export default ExpenseItem;