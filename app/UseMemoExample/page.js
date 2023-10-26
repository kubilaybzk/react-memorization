"use client"
import React, { useMemo, useState } from 'react'

export default function page() {

    //Bir adet count verilerini tutan state olsun.
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    //Memory üzerinde çok fazla işlem yapan bir fonksiyon
    const largeFunction=useMemo(()=>{
        [...new Array(100000000)].forEach((item)=>{})
        return count*3
    },[count])



  return (
   <>
    <div>{count}</div>
    <button onClick={()=>setCount(count+1)}>
        Arttır
    </button>
    {largeFunction}
    <input className='border' onChange={(e)=>setText(e.target.value)}/>
   
   </>
  )
}
