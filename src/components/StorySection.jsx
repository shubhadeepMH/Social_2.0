import React from 'react'
import StoryCard from './StoryCard'


export default function StorySection() {
    let profiles=[
        {
            name:"Shahrukh Khan",
            image:"https://shorturl.at/sxJL8"
        },
        {
            name:"Allu Arjun",
            image:"https://shorturl.at/cizD9"
        },
        {
            name:"Prabhas ",
            image:"https://shorturl.at/sCR68"
        },
        {
            name:"Shahid Kapoor ",
            image:"https://shorturl.at/anF46"
        },
    ]
  return (
    <div className='  space-x-3 p-3 flex bg-gray-100 justify-around rounded-sm '>
    {
        profiles.map((item,index)=>{
          return ( <StoryCard key={index} image={item.image} name={item.name}/>)
        })
    

    }
      
    </div>
  )
}
