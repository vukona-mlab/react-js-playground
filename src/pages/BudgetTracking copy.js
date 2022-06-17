import React from 'react'
import AddParentItem from '../components/AddParentItem'
import DisplayCounter from '../components/DisplayCounter'
import DisplayTransactions from '../components/DisplayTransaction'
export default function BudgetTracking() {
    return (
        <div>
            <div className="App">
                {/* <AddItem></AddItem> */}
                <AddParentItem onSubmit={addItem}></AddParentItem>
                <DisplayTransactions transactions={listOfItems}></DisplayTransactions>
                {/* <p>{listOfItems}</p> */}
                <input type='button' onClick={() => getCollectionDocs()} value="Generate store" />

                <DisplayCounter />
            </div>
        </div>
    )
}
