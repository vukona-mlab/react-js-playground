import React from 'react'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { add, subtract } from '../reducers/counterReducer';
export default function DisplayCounter() {
    const dispatch = useDispatch();
    const counter = useSelector( (state) => state.counter )
  return (
    <div>
        <input type="button" value="Minus" onClick={ () => dispatch(subtract()) }/>
        <h2>{ counter }</h2>
        <input type="button" value="Add" onClick={ () => dispatch(add()) }/>
    </div>
  )
}
