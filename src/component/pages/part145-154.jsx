import 'bootstrap/dist/css/bootstrap.min.css';
import {FcOnlineSupport} from "react-icons/fc"
import { useState } from 'react'

const Part = () => {
    const [myst, setmyst] = useState('')
    const [inputvalue, setValue] = useState('Enter your name')
    const ab = document.getElementById('aa')

    function clickfunc() {
        // console.log('clicked');
        // console.log(` wicome ${id}`)
         setmyst(`welcome ${inputvalue} `);
    }

    return (
        <div className='text-center p-4'>
        <p id='aa' vlue='salam'>Hello <FcOnlineSupport/></p>
        <input  className='text-input m-3' type='text' value={inputvalue} onClick={(event)=>setValue('')} onChange={(event)=>setValue(event.target.value)}/>
        <p><button className='btn-primary mx-4 rounded' onClick={()=>clickfunc()}> Click me!</button></p>
        <p className='fs-6 fw-bold ps-4'>{myst}</p>
        </div>

    )
}

export default Part;