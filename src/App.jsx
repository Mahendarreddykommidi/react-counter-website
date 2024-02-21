import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function incre(){
    setCount(count+1);
  }
  function decre(){
    if(count>0){
      setCount(count-1)
    }else{
      alert('count limit reached')
    setCount(0)
    }

  }


  return (
    <>
    <div className="box_container">
      <div className="main_div">
        <h1>{count}</h1>
        <div className="button_div">
          <button onClick={incre}>Icrem</button>
          <button onClick={decre}>Decrem</button>

        </div>



      </div>
      </div>
  
      
    </>
  )
}

export default App
