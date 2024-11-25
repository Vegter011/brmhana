import React from 'react'
import "./Main.css"
import stress_img from "../Assets/stress.png"
import depress_img from "../Assets/depress.png"
import anger_img from "../Assets/anger.png"
import anxiety_img from "../Assets/anxiety.png"
import logo_img from "../Assets/logo.png"

function Main() {
  return (
    <div className='main-content'>
        <div className="mood" style={{'--quantity': 4}}>
            <div className="mood-1" style={{'--position': 1}}><img src={anger_img}/></div>
            <div className="mood-1" style={{'--position': 2}}><img src={depress_img}/></div>
            <div className="mood-1" style={{'--position': 3}}><img src={anxiety_img}/></div>
            <div className="mood-1" style={{'--position': 4}}><img src={stress_img}/></div>
        </div>
        <div className="model"></div>
        <div className="quote">
          <h1 className='head-quote-1'>DISCOVER </h1>
          <h1 className='head-quote-2'>NIRVANA</h1>
        </div>
    </div>
  )
}

export default Main