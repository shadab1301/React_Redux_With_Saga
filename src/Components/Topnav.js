import React from 'react'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'



export const Topnav = () => {
  let cartData=useSelector((state)=>state.cart?.length)
  // console.log("Cartdata is : ",cartData)
  return (
    <>
     <div className="header">
            <Link to="/"><h1 className='logo'>E-Comm</h1></Link>
            <div className='search-box'>
                {/* <input type="text" onChange={(event) => dispatch(productSearch(event.target.value))} placeholder='Search Product' /> */}
            </div>
            <Link to="/cart">
                <div className="cart-div">
                    <span>{cartData}</span>
                    <img src="https://cdn-icons-png.flaticon.com/512/263/263142.png" alt="" />
                </div></Link>
        </div>
    </>
  )
}
