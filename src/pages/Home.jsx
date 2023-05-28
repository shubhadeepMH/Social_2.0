import React from 'react'
import Navbar from '../components/Navbar'
import LeftSideBar from '../components/LeftSideBar'
import FeedSection from '../components/FeedSection'
import RightSideBar from '../components/RightSideBar'

export default function Home() {
  return (
    <div className=' flex flex-col  '>
    {/* Navigation bar */}
    <Navbar />
  
    <div className='flex justify-between flex-grow'>
      {/* Left sidebar */}
      
          <LeftSideBar />
        
  
      {/* Feed section */}
     
        <FeedSection />
      
  
      {/* Right Sidebar */}
      
          <RightSideBar />
      
     
    </div>
  </div>
  )
}
