import React, { useContext } from 'react'
import '../LoginSignUp/styles.css'
import { MyContext } from '../../Context/Context'

export default function LoginSignUp() {

    const {isLoggedIn, setIsloggedIn} = useContext(MyContext);

  return (
    <div id='login-signup-page' className='text-center' >
    <h2>Aapki Shop</h2>
      <div className='d-flex container' style={{height:'500px'}} >
      <div className='container border d-flex flex-column' style={{height:'500px', justifyContent:'center', alignItems:'center', backgroundColor:'lightblue' }} >
        <div className='py-2'>
        <span className='px-2' ><button className='btn btn-outline-success' >Login</button></span>
        <span className='px-2' ><button className='btn btn-outline-success' >Sign Up</button></span>
        </div>
        <p className='py-2' >Get access to your Orders, Wishlist and Recommendations</p>
      </div>
      <div className='container border mx-1 py-5' style={{display:'flex', flexDirection:'column', backgroundColor:'lightgray'}}>
        <input type="" className='form-control me-2' aria-label="Search" placeholder='Enter Email/Mobile number' />
        <p> <input type='checkbox' />Aapki Shop's Terms of Use and Privacy Policy.</p>
        <button className='btn btn-outline-success' >Request Otp</button>
        <p className='py-1'>Or</p>
        <input type="" className='form-control me-2' aria-label="Search" placeholder='Enter Email/Mobile number' /><br/>
        <input type="" className='form-control me-2' aria-label="Search" placeholder='Password' />
        <p> <input type='checkbox'/> Aapki Shop's Terms of Use and Privacy Policy.</p>
        <button className='btn btn-outline-success' >Request Otp</button>
      </div>
      </div>
    </div>
  )
}
