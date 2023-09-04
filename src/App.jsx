import { useState } from 'react'
import './App.css'
import data from "./data"
import List from './component/List'
import list from './component/list.css'

function App() {
  const [people, setPeople] = useState(data)
  const clearAll = () =>  {
    setPeople([])
  }

  return (
    <>
      <h1>WorkShop 1 : Brithday list</h1>
      <main>
        <section className="container">
          <h3>{people.length} Brithday today</h3>
          <List people = {people} />
          <button onClick={clearAll}>Clear All</button>
        </section>
      </main>
    </>
  )
}

export default App
