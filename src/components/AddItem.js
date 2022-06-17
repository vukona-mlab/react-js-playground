import { toBeChecked } from '@testing-library/jest-dom/dist/matchers';
import React, { Component, useState, useEffect } from 'react';
import '../styles/AddItem.css'
import DisplayTransactions from './DisplayTransaction';
function AddItem() {
    const [item, setItem] = useState('');
    const [amount, setAmount] = useState(0);
    const [transactionType, setTransactionType] = useState('Expense');
    const [displayTrans, setDisplay] = useState(false)
    const [transactions, setTransactions] = useState([])
    const check = () => {
        console.log({ item, amount, transactionType });
        setTransactions([...transactions, { item, amount, transactionType }])
        console.log(transactions);
        // setDisplay(true)
    }

    useEffect( () => {
        console.log(transactions);
    }, [transactions])
    return (
        <div>
            <div className="form">
                <input placeholder='Enter Item' onBlur={(e) => setItem(e.target.value)}></input>
                <input placeholder="Enter Amount" onBlur={(e) => setAmount(e.target.value)}></input>
                <select onChange={(e) => setTransactionType(e.target.value)}>
                    <option value="Expense">Expense</option>
                    <option value="Income">Income</option>
                </select>
                <input type="button" value="Add" onClick={() => check()}></input>
            </div>
            { <DisplayTransactions transactions={ transactions }></DisplayTransactions> }
        </div>
    )
}

export default AddItem;

