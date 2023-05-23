import React, { useEffect, useState,useRef } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Card(props) {
    let dispatch=useDispatchCart();
    let data= useCart()
  
    const priceRef=useRef();
    let options = props.options;
    let priceOptions= Object.keys(options);
    const [qty,setQty]=useState(1)
    const [size,setSize]=useState("")

    const handleaddToCart=async()=>{

        let gift=[]
        for (const item of data){
            if(item.id===props.giftItem._id){
                gift=item;

                break;
            }
        }
       
        if(gift!==[]){
            if(gift.size===size){
                await dispatch({type:"UPDATE",id:props.giftItem._id, price: finalPrice, qty: qty})
                return
            }
        
        else if(gift.size!==size){
            await dispatch({type:"ADD",id:props.giftItem._id,name:props.giftItem.name,price:finalPrice,qty:qty,size:size})
            return
        }
        return
        }
       // await console.log(data)
       await dispatch({type:"ADD",id:props.giftItem._id,name:props.giftItem.name,price:finalPrice,qty:qty,size:size})

        
    } 
      let finalPrice=qty*parseInt(options[size]);
        useEffect(()=>{
            setSize(priceRef.current.value)
        },[])


    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "400px" }}>
                    <img src={props.giftItem.img} className="card-img-top" alt="..." style={{height:"180px",objectFit:"fill"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.giftItem.name}</h5>
                    
                        <div className='container w-100'>
                            <select className='m-2  h-100 bg-success rounded'onChange={(e)=>setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>

                                    )
                                })}
                            </select>
                            <select className='m-2  h-100  bg-success rounded' ref={priceRef} onChange={(e)=>setSize(e.target.value)}>
                               {priceOptions.map((data)=>{
                                return <option key={data} value={data}>{data}</option>
                               })}
                            </select>

                            <div className='d-line h-100 fs-5'>
                                 ₹{finalPrice}/-
                            </div>
                            
                            <hr/>
                            <button className={'btn btn-success justify-center ms-1'} onClick={handleaddToCart}>Add to Cart</button>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}
