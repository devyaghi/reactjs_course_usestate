import React, {useState} from "react";

export default function TestFunctionComponent(){

    const [name,setName]=useState('');

   function handleNameChange(e){
   // console.log('test');
      setName(e.target.value)
   }

    return(
    <form>
     <div>{name}</div>
     <input type="text" onChange={handleNameChange}/>

    </form>);


}