import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { ADD_TO_CART_ACTION , GET_PRODUCT_LIST_ACTION, productList , } from '../Redux/Action/Action';
import { useDispatch , useSelector} from 'react-redux';

const ProductContainer = styled.div`
box-sizing:border-box;
width:100%;
display:grid;
grid-template-columns: repeat(4, auto);
border:1px solid black;
grid-gap:20px;
justify-content: space-evenly;

  div{
    heigth:300px;
  }

`;
// import { callProductAPI } from './API/Product.api'
const Productlist = () => {
  const [Product, setProduct] = useState([])

  const dispatch=useDispatch();
  useEffect(() => {
    // loadData()
  }, [])

  const loadData = async () => {
    // let productListRes = await axios.get("https://fakestoreapi.com/products");
    // setProduct(productListRes.data)

    // dispatch(GET_PRODUCT_LIST_ACTION())

  }


const handleAddToCart=(val)=>{
  // console.log(val)
  // dispatch(ADD_TO_CART_ACTION())


}

  return (
    <>
      <h1>Productlist</h1>
      <button onClick={()=>{dispatch(GET_PRODUCT_LIST_ACTION())}}>Load Product</button>
      {/* <ProductContainer>
        {Product?.map((val) => {
          return (
            <div key={val.id} className="card" style={{ width: "90%",height:"400px", padding:"0px" }}>
              <img className="card-img-top" style={{width:"100%",height:"40%",}} src={val.image} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{val.title}</h5>
                <h5 className="card-title">RS {val.price}</h5>
                <p className="card-text">{val.description.substr(0,30)}</p>
                <button className="btn btn-primary" onClick={(e)=>{handleAddToCart(val)}}>Add to cart</button>
              </div>
             
            </div>

          )
        })}
      </ProductContainer> */}

    </>
  )
}

export default Productlist