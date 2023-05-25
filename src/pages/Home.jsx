import React from 'react'
import Navbar from '../components/Navbar'
import LeftSideBar from '../components/LeftSideBar'
import FeedSection from '../components/FeedSection'
import RightSideBar from '../components/RightSideBar'

export default function Home() {
  return (
    <div className='bg-gray-100 h-[100%] '>
      {/* Navigation bar */}
      <Navbar />
      <div className='flex justify-between  '>

        {/* Left sidebar */}
        <LeftSideBar />

        {/* feed section */}
        <FeedSection />

        {/* Right Sidebar */}
        <RightSideBar />

      </div>


    </div>
  )
}
