import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from 'react';
import Basket from '../component/basket/basket';
import Menu_1 from '../component/menu1';
import Menu_2 from '../component/menu2';


import './index.css'
// let order_cnt=[]

const HomePage = () => {

    const [productList, setProduct]=useState([]);
    const [basketList, setBasketList] = useState([])
     

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
                <div className='w-100 d-flex ms-3'>
                    <div  className='w-75 d-flex flex-row justify-content-center gap-3 flex-wrap'>
                        {productList.map(item =>{
                            return (
                                <div key={`productList-${item.id}`} className='cart_class gap-2' >
                                    <Menu_2 
                                    productId = {item.id}
                                    cartimage={item.image}
                                    carttext={item.title} 
                                    price={item.price}
                                    tag ={''} 
                                    category={item.category}
                                    count={item.rating.count}
                                    rate={item.rating.rate}
                                    basketList ={basketList}
                                    setBasketList ={setBasketList}
                                     />
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-25 container h-100 border border-danger text-center bg-white'>
                        <Basket basketList ={basketList} setBasketList ={setBasketList}  />
                    </div>
                </div>
            </main>
        </div>


    )
}

export default HomePage;