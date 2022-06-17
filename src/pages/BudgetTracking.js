import React, { useState, useEffect } from 'react';
import AddParentItem from '../components/AddParentItem';
import DisplayCounter from '../components/DisplayCounter';
import DisplayTransactions from '../components/DisplayTransaction';
import '../styles/BudgetTracking.css'
export default function BudgetTracking() {
    const [transactions, setTransactions] = useState([]);
    const addItem = (item) => {
        console.log(item);
        setTransactions([...transactions, item]);
    
      }
    return (
        <div className='budget-container'>
            {/* <div className=""> */}
                {/* <AddItem></AddItem> */}
                <AddParentItem onSubmit={ addItem }></AddParentItem>
                <DisplayTransactions transactions={ transactions }></DisplayTransactions>
                {/* <p>{listOfItems}</p> */}

            {/* </div> */}
        </div>
    )
}
