import { useState } from 'react'


export const TodoInput = ({getdata}) => {
const [state, mystate] = useState("")
    return ( <div><input  onChange ={(e)=>{
        // console.log(e.target.value)
        mystate(e.target.value)
    }}   type="text" placeholder="Enter the todo" />
    
    <button onClick = {()=>{getdata(state)}}>Send </button>

    </div>)
}