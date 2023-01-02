import axios from 'axios'
import React, { useEffect } from 'react'

const Test = () => {
    const getTest = ()=>{
        axios.get('/api/user').then(res=>{
            console.log("result::", res.data);
        })
    }
    useEffect(()=>{
        getTest()
    },[])
  return (
    <div>Test</div>
  )
}

export default Test