import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";

function App() {
  const [input ,setinput]=useState('')
  const [data, setData]=useState([])
    function handleChange(event){
       const inputValue=event.target.value
        setinput(inputValue)
        
    }
     function sendData(){
    
        let alldata=[...data,input]
          setData(alldata)
          setinput("")
       }

       function deleteList(ind){
        let filterData=data.filter((curvalr,id)=>{
             return ind !=id
        })
         setData(filterData)
         
       }
       
    
   
  return (
    <>
         <div className='bg-slate-900 flex flex-col items-center h-screen w-full'>
                         
            <div className=' mt-6 w-[600px] bg-[#f80ba9] p-3  flex flex-col'>
                     <div className='text-4xl text-center py-3 text-white bg-blue-600 my-2'>To Do List</div>
                  <div className='flex'>
                    <input className='h-[40px] w-[500px] border-none text-2xl px-2' type="text" name="" placeholder='Add task..'
                     onChange={handleChange} value={input}/>
                     <span onClick={sendData} className='text-3xl text-white px-[20px] bg-black mx-1'>Add</span>
                  </div>
            </div>

            
            
              
               <div>
                   {data.map((item,index)=>{
                      return(
                        <div key={index} className='flex justify-between text-white w-[600px] m-2 p-2 text-2xl bg-[#f80ba9]'>
                           <p>{item}</p>
                           <FaTrashAlt id='icon' onClick={()=>deleteList(index)}/>
                        </div>
                      )
                   })}
               </div>
                
            
               
         </div>
    
    </>
  )
}

export default App