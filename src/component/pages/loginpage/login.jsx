
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { isValidElement, useState } from 'react';
import './login.css'
const emailtrust = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
const mobiletrust= /(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}/

const Login = () => {

    const [input_value, setValue]= useState('')
    const [errormsg, setmasg] = useState('')
    
    function check_input() {
        const emailtest = emailtrust.test(input_value)
        const mobiletest = mobiletrust.test(input_value)
        if (!(input_value)) {
            setmasg('لطفا این قسمت را خالی نگذارید')
        }
        else
        if ( emailtest || mobiletest) {
            setmasg('موفق باشید')
        } else {
            setmasg('شماره موبایل یا ایمیل نادرست است!')
        }
   }
   function reset_input(){
    setValue('')
   }

    return (
        <>
        <div className='container w-100 h-100 d-flex flex-column align-items-center justify-content-center' dir='rtl'>
            <div className='box w-25 h-auto border rounded-4 py-2 px-4 gap-5' >
                <div className='text-center'>
                    <img src='https://www.digikala.com/statics/img/svg/logo.svg'></img>
                </div>
                <p className='fs-5 fw-bold my-3'> ورود | ثبت نام </p>
                <p>سلام!</p>
                <div className='col-11'>
                     <label className='form-label fnt py-2'>لطفا شماره موبایل یا ایمیل خود را وارد کنید</label>
                     <div className=' w-100 '>
                        <input className='form-control' dir='ltr' value={input_value} onChange={(event)=>setValue(event.target.value)}
                         onKeyDown={(event)=>check_input()} onClick={reset_input} />
                      </div>
                      
                </div>
                <p className='text-danger mt-2' id='message'>{errormsg}</p>
                <div className=' col-11'>
                    <Button variant='danger' className='w-100' onClick = {()=>check_input()} >ورود</Button>
                    {/* <Button onClick = {()=>check_input()} >ورود</Button> */}
                </div>
                <div className='mb-0 mt-4'>
                <p>ورود شما به معنای پذیرش <a href="">شرایط دیجی کالا</a> و <a href="">قوانین حریم خصوصی </a>است</p> 
                </div>
            </div>
        </div>
         
    </>

    )
}
    
  
export default Login;