import React from 'react';

const Todolist = (props)=>{
   
  
   
    return (
    <>
    <div className="todostyle">
   
    <h1>{props.text } { } { }
    <span className="cross">
    <i className="fa fa-minus-circle" onClick={()=>{
        props.onSelect(props.id);
        
    }} /></span>
    </h1>
    </div>
    </>
    )
    
}

export default Todolist;