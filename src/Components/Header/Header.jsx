import React from 'react'
import '../Header/styles.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <div id='header' className='fixed-top'>
        <ul >
            <li><Link to='/'>Mobiles</Link></li>
            <li><Link to='/'>Electromic</Link></li>
            <li><Link to='/'>Home And Kitchen</Link></li>
            <li><Link to='/' >Fashion</Link></li>
        </ul>
      </div>
    </div>
  )
}
