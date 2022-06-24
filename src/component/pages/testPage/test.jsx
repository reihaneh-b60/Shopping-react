import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react';
import { useState } from "react";
import { Button } from 'react-bootstrap';
let userId=0;
const Test = () => {
    // let userId=0;
    const[myState, SetSate]=useState('hi')
    const[lastname,setlast]=useState('')
    const[secstate, chngstate]=useState('')
    const[delState, SetDel]=useState(0);
    
    useEffect(()=>{
        console.log('cheged')
       
    }, [secstate])

    function clicked(){
        chngstate('effected state')
    }

    function addData(id) {
        console.log( `${myState}`)
        console.log(`last name = ${lastname} ,id = ${id}`)
        
        axios.post('Api data adreess', {
            id: `${id}`,
            name: `${myState}`,
            lastname: `${lastname}`,
            user:"moh10"
        } ). then (resp => console.log(resp.data))
            .catch(err => console.log(err))
    }

    function delData(id) {
        console.log(`the deleted id is ${id}`)
        axios.delete('api data address /${id}' )
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    function EditData(id) {
        axios.put(`Api data address/${id}`, {
            name:  `${myState}`,
            lastname: `${lastname}`,
            user: "mm"
        }).then (res => console.log (res))
        .catch(err => console.log(err))
    }
    return (
        <div>
            <div className='container w-auto h-auto border border-2 border-success rounded m-2 p-4 gap-4 align-item-center'> 
                <h2 className='fw-bold'>Add User</h2>  
                <p className='m-3'>secend: {secstate}</p>
                <label >firstname :  </label>
                <input className='m-3' type='text' value={myState} onChange={(e) => SetSate(e.target.value)} onClick={(e)=> SetSate('')}></input>
                <label>lastname :  </label>
                <input className='m-3' type='text' value={lastname} onChange={(e) => setlast(e.target.value)} onClick={(e)=> setlast('')}></input>
                <p >first state:   {myState}
                <Button className='m-3' type='button' onClick={()=> clicked()}>click me!</Button> </p>
                <p >'secend state:' {secstate}</p>
                <Button  className='m-3' onClick={() => addData(++userId)} >Add user</Button>
            </div>
            <div className='container w-auto h-auto border border-2 border-danger rounded m-2 p-4 gap-4 align-item-center'>
                <h3>Delete User</h3>
                <label> Enter your id :</label>
                <input className='m-3' type='number' value={delState} onChange={(e)=> SetDel(e.target.value)}></input>
                <Button className='m-3' onClick={()=> delData(delState)}>Delete User</Button>
                
                <Button className='m-3' onClick={()=> EditData (delState)}>Edit User</Button>
            </div>
        </div>
    )
}
export default Test;