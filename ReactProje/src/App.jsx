import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [newitem, setnewitem] = useState("")
  const [items,setitems]= useState([])

  function addItem(){
    const item={
      id: Math.floor(Math.random()*9999999999),
      value: newitem
    }  
    setitems(oldItems=>[...oldItems,item])
    setnewitem("");
  }

  return (
    <div className='App'>
      <h1>To Do List</h1>

      <input type="text" placeholder='Bir görev girin...' value={newitem} onChange={e=>setnewitem(e.target.value)} />

      <button onClick={()=>addItem()}>Ekle</button>

      <ul>
        {items.map(item=>{
          return(
            <li key={item.id}>{item.value}</li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
