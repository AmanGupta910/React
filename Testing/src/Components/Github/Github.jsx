import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

import { useLoaderData } from 'react-router-dom'

function Github() {

    const data =useLoaderData()
    // const[data,setData]=useState({})


    /*  This can also be use but taes time  A click is required */
    // useEffect(()=>{
    //     /*  for all this we can get the user id from hte user login an based on the id the data whill be displayed on the screen which
    //     hepls to minimiz e the code and also reduce the tim complexity*/

    //     fetch('https://api.github.com/users/AmanGupta910').then(res=>res.json()).then((responseData) => {   
    // console.log(responseData);
    // setData(responseData);

           

    //     })
    // },[])

    /* Start fetchng even if the user huwers on it*/ 
  return (
    <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
        GitHub Folowers: {data.followers}
        <img className='text-center' src={data.avatar_url} alt="Git Picture" width ={300 }/>


      
    </div>
  )
}

export default Github

export const githubInfoLoader =async()=>{

      const response=fetch('https://api.github.com/users/AmanGupta910')
      return (await response).json()
    
    
}