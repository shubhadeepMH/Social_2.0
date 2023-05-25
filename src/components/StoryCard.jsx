import React from 'react'

export default function StoryCard(props) {
   
    return (
        <div className=' m-2  '>
          {/* Story card when screen is small */}
            <img className='h-14 w-14 rounded-full md:hidden   border-purple-700 border-2' src={props.image} alt="" />

            {/* Story card when screen is bigger */}
            <div class="relative hidden sm:inline-block" >
                <img src={props.image} alt="Main Image" class="w-[12rem] h-[14rem] rounded-lg shadow-lg  hover:scale-110 hover:z-10 " />
                <div class="absolute bottom-[7%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                  
                        <img src={props.image} alt="Small Image" class="w-11 h-11 rounded-full border-2 border-purple-700" />
                   
                    <h3 class="text-white text-sm font-semibold ml-2">{props.name.slice(" ")}</h3>
                </div>
            </div>

        </div>
    )
}
