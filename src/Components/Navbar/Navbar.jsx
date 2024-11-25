import React from 'react'
import './Navbar.css'
// import logo_img from "../Assets/logo.png"
// import name_img from "../Assets/name.png"
import user_img from "../Assets/user.png"
function Navbar() {
  return (
    <div className='navbar grid-item'>
        <div className="logo  item-1"><h1 className='title'>Brmhana</h1></div>
        <div className="options  item-2">
            {/* <a className='item-4'>Contact</a> */}
            <p className='greeting item-5'>Hi! there..</p>
            <button className='user item-6'><p>Login</p><img src={user_img} className='user' height='30px' width='30px' style={{padding: '0.2rem'}}></img></button>
            <a className='item-3' href='#quiz' >Take the Quiz!</a>
        </div>
    </div>
  )
}

export default Navbar