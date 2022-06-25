import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
let sumPrice=0;

const Basket = (props) => {

    const [selectItem,setSelectItem] = useState([]);

    return (

        <>
            <div className="h-100 ">
                <h3 className="text-success"> سبد خرید شما</h3>
                <p>آیتمهای خرید شما </p>
                <div className="w-100 d-flex justify-between gap-5 ps-5 " dir="ltr">
                        <div>نام محصول </div>
                        <div>تعداد</div>
                        <div>قیمت</div>
                    </div>
                <div className="w-100 h-100 d-flex flex-column  border rounded gap-2">
                    {props.basketList.map( item => { return (
                        <div key={`basketList: ${item.producId}`} className="w-100 h-75 d-flex justify-between gap-2 fs-7">
                            <div><Button variant="danger" className="btn-sm"
                             onClick={()=> props.setBasketList(props.basketList.filter(pr => pr.producId != item.producId))}> حذف</Button></div>
                            <div className="">{item.productPrice}$ : </div>
                            <div >  {item.order_count} </div>
                            <div className="text_wrap">{item.productName}</div>                            
                        </div>
                         ) } ) } 
                        
                    
                </div>
                <p> مجموع قیمت :
                <span>
                    {sumPrice = props.basketList.reduce((sum,current) => sum + current.productPrice,0)}
                </span>
                </p>
            </div>
        </>

    )
}
 export default Basket;