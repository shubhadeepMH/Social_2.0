import React from 'react'

export default function RightSideBar() {

  let contacts = [
    {
      name: "Bill Gates",
      profilePhoto: "https://scontent.fccu9-3.fna.fbcdn.net/v/t31.18172-8/20280559_10154756882766961_3434466954525858896_o.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=DObzqDWUvvYAX8FY8cN&_nc_ht=scontent.fccu9-3.fna&oh=00_AfCozaNOaI4hWvVHhrGGgRmedEuMc0Zk7xuElWOu7J_6Tw&oe=649A696F"
    },
    {
      name: "Sundar Pichai",
      profilePhoto: "https://scontent.fccu9-2.fna.fbcdn.net/v/t31.18172-8/10511504_10152144342356080_4378237481805650747_o.jpg?stp=c103.0.414.414a_dst-jpg_p552x414&_nc_cat=101&ccb=1-7&_nc_sid=da31f3&_nc_ohc=3emddObU_okAX8Ytzv7&_nc_ht=scontent.fccu9-2.fna&oh=00_AfBZpPS_DHb10zaIXlCZw-5THiHwtE4TuKcS-fL5SIickA&oe=649A6367"
    },
    {
      name: "Satya Nadela",
      profilePhoto: "http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcSmad1no6Ag9EMEAKy9HM3bryb6PrbUHw3U9bmkaqH7-0zSyDjxlLCI0KmbEQyxSWVCo7gA8fczOxC0tXIw6ygaldcSmXGAxgrkD4NdFkHJ"
    },
  ]
  return (
    <div className='w-fit '>
      <div className='flex items-center space-x-4  p-1 flex-shrink flex-grow'>
        <p className=' font-semibold text-sm md:text-lg italic'>Contacts</p>
        <div className='space-x-2 hidden md:flex font-serif cursor-pointer '>
          <i class="fa-solid  text-gray-500  hover:text-green-400  fa-video"></i>
          <i class="fa-solid text-gray-500  hover:text-green-400 fa-magnifying-glass"></i>
          <i class="fa-solid fa-md  text-gray-500 hover:text-green-400 fa-ellipsis"></i>

        </div>

       
      </div>
      <div className=''>{
          contacts.map((item,index)=>{
              return(
                <div className='flex cursor-pointer hover:bg-green-300 rounded-md items-center p-2 justify-end space-x-2  '>
                <p className='text-sm font-bold font-sans italic  hidden md:inline-flex'>{item.name}</p>
                  <img className='h-10 w-10 md:h-12 md:w-12 rounded-full border-2 border-violet-500' src={item.profilePhoto} alt=""/>
                 
                </div>
              )
          })

        }</div>
    </div>
  )
}
