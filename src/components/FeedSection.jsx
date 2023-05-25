import React from 'react'
import StorySection from './StorySection'
import PostInput from './PostInput'

export default function FeedSection() {
  return (
    <div className='max-w-2xl bg-gray-100 flex-grow'>
    {/* story section */}
    <StorySection/>

    {/* Input post section */}
    <PostInput/>


      
    </div>
  )
}
