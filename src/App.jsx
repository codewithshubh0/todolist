import React,{useEffect, useState} from 'react';
import "./index.css";
import Todolist from './Todolist';

const App = () =>{
    const getstorageitems =()=>{
        let storagelist =localStorage.getItem("lists");
    
        if(storagelist){
            return JSON.parse(localStorage.getItem("lists"))
        }
        else{
            return [];
        }
    }

const [itemsvalue,setitemsvalue] = useState("");
const [itemonclick,setitemonclick] =useState(getstorageitems()); 
 const newitem =(event)=>{
   setitemsvalue(event.target.value);
 };
 
 const showitem=() =>{
    
        setitemonclick(() =>{
            return [...itemonclick,itemsvalue];
        });
    setitemsvalue("");
     
};

 const deleteitems= (id)=>{
     setitemonclick((olditem) =>{
         return olditem.filter((arr,index)=>{
             return index!==id;
         })
     })

    
 }


 useEffect(() =>{
    localStorage.setItem('lists' ,JSON.stringify(itemonclick))
},[itemonclick]);
    return (
        <>
       <div className="middle">
           <div className="">
           <h2 className="main">To Do List</h2>
           
               <input type="text" placeholder="add your items" onChange
               ={newitem} value={itemsvalue} ></input>
              <span className="plus" onClick={showitem}>+</span><hr></hr>
               
            
               {itemonclick.map((val,index)=>{
                 return  <Todolist text={val}
                     id={index}
                     onSelect={deleteitems}
                 />
               })}
                  
              


           </div>
       </div>
        </>
    );
}

export default App;