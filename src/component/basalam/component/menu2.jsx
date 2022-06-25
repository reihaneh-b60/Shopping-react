import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { AiOutlineStrikethrough } from "react-icons/ai";
import {GrStar,GrBasket} from "react-icons/gr"
// import Basket from './basket/basket';
import './menuStyle.css'
let count=0

const Menu_2 = (props) => {
    const [tagState,setTag]=useState('');
    
    

    useEffect (() => {
        if (props.count < 200) {
            setTag('موجودی محدود')
        }
    },(props.count))
function AddItem(mybasket) {
    let flag= 0
    console.log(`before: ${mybasket}`)
    mybasket.map(item =>{ if (item.productId == id) {
        console.log(`item id: ${item.producId}`)
        flag = 1
        item.order_count++;
    }}
    )
    console.log(`flag ${flag}`)
    if (flag ==0) {
        console.log('add new')
         props.setBasketList([...mybasket,
        {productName:props.carttext,productPrice:props.price,
         producId:props.productId, order_count:count+1}])
    } 
     console.log(`after :${props.basketList}`)

}

    return (
        <div >
        <div className="cartbox gap-3">
            <div className='w-100 imageclass position-relative'>
                <img className="w-100 h-100" src={props.cartimage}/>
                <div className='cart_tag position-absolute top-0 px-2 text-white fs-6 '>
                     <span >{tagState} </span>
                </div>
            </div>
            <h5 className="float-right my-2 text_wrap">{props.carttext}</h5>
            <div className="mb-1 text-black-50 text_wrap"><GrBasket/> <span>{props.category}</span></div>
            <div className="mb-3"> 
                <GrStar/> <span>{props.count}</span>
                <span className="text-black-50 fontprice"> ( <span>{props.rate}</span>) نظر</span>
            </div>
            <div className='d-flex justify-content-between'>
                <div>               
                    <Button type='button' className='Added fw-bold fs-5' 
                        onClick={()=>{ props.setBasketList([...props.basketList,
                            {productName:props.carttext,productPrice:props.price,
                             producId:props.productId, order_count:count+1}])}}> + </Button>
                    
                </div>
                <div > {props.price} <AiOutlineStrikethrough/> </div>
            </div>
        </div>
     </div>

    )
}

export default Menu_2;