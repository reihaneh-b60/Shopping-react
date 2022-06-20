import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from "react";

const Test = () => {

    const[myState, SetSate]=useState('hi')
    const[secstate, chngstate]=useState('')
    
    useEffect(()=>{
        console.log('cheged')
       
    }, [secstate])

    function clicked(){
        chngstate('effected state')
    }
    return (
        <div>
            <p className='m-4'>secend: {secstate}</p>
            <input type='text' className=' m-4' value={myState} onChange={(e) => SetSate(e.target.value)} onClick={(e)=> SetSate('')}></input>
            <p className='m-4'>first state:   {myState}</p>
            <button className='m-4' type='button' onClick={()=> clicked()}>click me!</button>
            <p className='m-4'>'secend state:' {secstate}</p>
        </div>
    )
}
export default Test;