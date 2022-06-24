import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Menu_1 from '../component/menu1';
import Menu_2 from '../component/menu2';


import './index.css'

const HomePage = () => {

    const [productList, setProduct]=useState([]);
    const [priceState, setprice]= useState(0)
     

    useEffect(()=>{
    //    setProduct(fakeData)
     axios.get('http://fakestoreapi.com/products') 
     .then((data)=> {
        setProduct(data.data)
     })
     .catch((err) => console.log(err))
       
       //setProduct(fakeData.filter(item => item.rating.count > 100))
    },[])
    return (
        <div dir='rtl'>
            <header className="w-100 head_class border text-center">
                <img className="w-75 h-100 mt-2" src="https://statics.basalam.com/public/photo/explore/laKKy/06-19/ecsyEMeyK0FNeWnNdZtGO5KTVqFzEFR2YLdyw9s5cGAcMqiqI9.webp"></img>
            </header>
            <main className="w-100">
                <div className='container d-flex flex-row justify-content-around'>
                    <Menu_1 image="https://statics.basalam.com/public/photo/explore/laKKy/05-30/cHthdbFAu26AsXGqgZtyvbUubp9kuxso9GydAU8qz8f23FulpA.png" text="عسل"/>
                    <Menu_1 image="https://statics.basalam.com/public/photo/explore/laKKy/05-30/cHthdbFAu26AsXGqgZtyvbUubp9kuxso9GydAU8qz8f23FulpA.png" text="پسته"/>
                    <Menu_1 image="https://statics.basalam.com/public/photo/explore/laKKy/05-30/cHthdbFAu26AsXGqgZtyvbUubp9kuxso9GydAU8qz8f23FulpA.png" text="مانتو"/>
                </div>
                <div className='d-flex ms-3'>
                    <div  className='d-flex flex-row justify-content-center gap-3 flex-wrap'>
                        {productList.map(item =>{
                            return (
                                <div key={`productList-${item.id}`} className='cart_class gap-2' >
                                    <Menu_2 cartimage={item.image}
                                    carttext={item.title} 
                                    price={item.price}
                                    tag ={''} 
                                    category={item.category}
                                    count={item.rating.count}
                                    rate={item.rating.rate}
                                    priceState={priceState}
                                    setprice={setprice} />
                                </div>
                            )
                        })}
                    </div>
                    <div className='container h-100 border border-danger text-center'>
                        <h3>Sabad kharid</h3>
                        <p>مجموع فیمت خرید شما: </p>
                        <p dir="ltr">{priceState}</p>
                    </div>
                </div>
            </main>
        </div>


    )
}

export default HomePage;