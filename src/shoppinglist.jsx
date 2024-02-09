import React, { useState } from 'react'

function Shoppinglist() {
  const[items,setitems]=useState("")
  const[list,setlist]=useState([])
  const removeItem = (ind) => {
    const newItems = [...list];
    newItems.splice(ind, 1);
    setlist(newItems);
  };
  
  return (
    <div className='content'>
<input type="text" name="items" id="items"
value={items} onChange={(e)=>setitems(e.target.value)} placeholder='Enter Your Items Here'/>
<button onClick={()=>{setlist([...list,items] )(setitems(""))}} className='add'>ADD</button>
<button onClick={()=>{setlist([])}} className='add'>Clear All</button>
<div className='list'>
    <ol>
    {list.map((item,ind)=><li>{item}{<button onClick={removeItem} className='delt'><i class="fa-sharp fa-solid fa-trash"></i></button>}
    </li>)}
  </ol>
</div>
    </div>

  )
}

export default Shoppinglist