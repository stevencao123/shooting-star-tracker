import React from 'react'
import './Nav.css'

function Nav() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <div className='navbar-logo'>
                  <h1>LOGO</h1>
                </div>

                <div className='navbar-menu'>
                  <ul className='navbar-list'>
                    <li className='navbar-list-item'>
                      FAQ
                    </li>
                    <li className='navbar-list-item'>
                      Discord
                    </li>
                  </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Nav