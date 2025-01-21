import './App.css';
import { useState } from 'react'

const App = () => {

  const [ name, setName ] = useState('john')

  const changeName = () => {
    if ( name === 'Ben') {
      setName('Cian')
    }
    else {
      setName('Ben')
    }
  }

  return (
    <div className='container'>
      <h1>Your name is:</h1>
      <span className='text'>{ name }</span>
      <div className='container2'>
        <p>test1</p>
        <p>test1</p>
        <p>test1</p>
      </div>
      <button onClick={() => { changeName() }} >Test</button>
    </div>
  )
}

export default App