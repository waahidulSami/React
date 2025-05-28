import React, { useState } from "react";
import { useEffect } from "react";
import { data } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function    GitHub(){


   const data = useLoaderData()
    // const [data , setData] = useState([])

    // useEffect(() =>{
    //     fetch('https://api.github.com/users/waahidulSami')
    //     .then(Response => Response.json())
    //     .then(data =>{

    //         setData(data)
            
    //     })
    // },[])
    return(
        <div className="bg-gray-700 rounded-xl p-5 text-4xl text-center font-bold  m-5  mx-auto  ">
            GitHub Followers: {data.followers}
            <img className=" mx-auto w-96 rounded-2xl"  src={data.avatar_url} alt="Git picture" />
         </div>
    )
}

export default GitHub

export  const githubloader = async () =>{
    const Response = await    fetch('https://api.github.com/users/waahidulSami')
    return Response.json()
}