import React from 'react'
import StoryCard from './StoryCard'


export default function StorySection() {
    let profiles=[
        {
            name:"Shahrukh Khan",
            image:"https://shorturl.at/sxJL8"
        },
        {
            name:"Vijay ",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGU8Rr2RWgEJH-JmUWRV1jwFqgRoWbQS0OSg&usqp=CAU"
        },
        {
            name:"Tom Holland ",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScAEzzjWt0KTdnwzgg8LbiOCeKuRJrkdRtAw&usqp=CAU"
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
