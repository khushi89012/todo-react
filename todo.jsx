import { useState } from 'react'
import { TodoInput } from './todoinput.jsx';
 function Todo(){
     const [todolist,settodolist] = useState([""])

     const getdata = (todo)=>{
console.log("recieved data",todo)
settodolist([...todolist,todo])
     }
    return( <div>
        <TodoInput getdata = {getdata} />
       {todolist.map((e)=>{
              return(<div>
                <h1>{e}<button>Toggle</button></h1>
              </div>)
       })}
    </div>)

}
export { Todo }