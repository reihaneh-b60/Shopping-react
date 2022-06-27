import { useEffect } from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import './basket.css'
let sumPrice=0;

const Basket = (props) => {

    const [count,setcount] = useState(1);

    function delItem(id, number) {
        number = number - 1;
        if (number ==0 ) {
            props.setBasketList(props.basketList.filter(pr => pr.producId != id)) 
        }
        else {   
            props.setBasketList(props.basketList.filter(pr =>pr.producId != null))
        }
        return number
    }

    return (

        <>
            <div className="h-100 ">
                <h3 className="text-success"> سبد خرید شما</h3>
                <table className="table w-100 table-bordered">
                    <thead>
                        <tr>
                            <th scope="col"><div>نام محصول </div></th>
                            <th scope="col"> <div>تعداد</div></th>
                            <th scope="col"><div>قیمت</div></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                </table>
                <div className="w-100 bask_class d-flex flex-column  border rounded gap-2">
                    {props.basketList.map( item => { 
                        return (
                        <div key={`basketList: ${item.producId}`} className="w-100 d-flex justify-content-between fs-7">
                            <div className="w-50 text_wrap">{item.productName} </div>
                            <div> {item.order_count}</div>
                            <div > {item.productPrice}$  </div> 
                            <div >  <Button variant="danger" className="btn-sm"
                                onClick={ ()=>item.order_count=delItem(item.producId,item.order_count)}> حذف</Button></div>
                        </div>
                    ) } ) } 
                </div>
                <div  className="text-success fs-6 pb-3 fw-bold">   مجموع قیمت :
                    <span>
                       $ {sumPrice = props.basketList.reduce((sum,current) => sum + (current.productPrice*current.order_count),0)}
                    </span>
                </div>
            </div>
        </>

    )
}
 export default Basket;