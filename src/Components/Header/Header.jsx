import React from 'react'

export default function Header() {
  return (
    <div>
      <div className='fixed-top' style={{backgroundColor:'lightblue', width:'100%', position:'fixed', marginTop:'50px'}} >
        <ul className='' style={{listStyle:'none', display:'flex', justifyContent:'space-evenly'}} >
            <li>Mobiles</li>
            <li>Electromic</li>
            <li>Home And Kitchen</li>
            <li>Fashion</li>
        </ul>
      </div>
    </div>
  )
}
