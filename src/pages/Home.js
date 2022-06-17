import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import '../styles/Home.css'
import '../App.css'
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <h6 className='poppingsr'>Welcome to CodeTribe Playground</h6>
        <p>The purpose of this project is to simply go through the many lessons covered in the CodeTribe platform and provide comprehensive examples to do the same thing covered in theory and through simple tasks. Here I will be providing different ways of doing the same thing, but if a more recent package exists I will be definitely opting for that as it will be used longer compared to deprecated or superseded versions of the package.</p>
        <p>Multiple ways of doing the same thing may be used as way of finding the best way to handle one use case.</p>
        <p>
            Use the links below to route to specific lessons

        </p>
        <ol>
                <li>Video Tutorial: <Link to="../budget-tracking">Tracking income and expenses</Link></li>
            </ol>
      </main>
    </div>
  )
}
