import React , {useState} from 'react'
import "./App.css"

function App() {

  const [showMobile, setShowMobile] = useState(false)

  return (
    <div className='App'>
      <div className="navbar">
        <div className="container">

          <h1>Logo</h1>
          <div className={`cnt-rel  ${showMobile ? "show" : "hide"} `}>
            <ul className='nav-links'>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Skillz</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          <button  className='btn' onClick={() => setShowMobile(!showMobile)}><h1 >=</h1></button>


        </div>
      </div>
    </div>
  )
}

export default App