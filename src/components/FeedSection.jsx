import React, { useEffect, useState,CSSProperties } from 'react'
import StorySection from './StorySection'
import PostInput from './PostInput'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import app from '../firebase'
import { getDocs, doc, getFirestore, collection } from 'firebase/firestore'
import ClipLoader from "react-spinners/ClipLoader";

export default function FeedSection() {
  const [user, setUser] = useState();
  const [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");
  let db = getFirestore(app)

  let auth = getAuth(app)

  const getPosts = async () => {
    const querySnapshot = await getDocs(collection(db, "posts"));
    const getPosts = querySnapshot.docs.map((doc) => doc.data());
    setPosts(getPosts)

  }

  //Getting posts
  useEffect(() => {
    getPosts()
  }, [])

  const override= {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  




  return (
    <div className='max-w-2xl scrollbar-hide  h-screen overflow-y-auto  flex-grow'>
      {/* story section */}
      <StorySection />

      {/* Input post section */}
      <PostInput />
      {/* Posts section */}

      <div>

        { posts.map((item, index) => {
            return (
              <div key={index} className='shadow-md m-1 p-2'>
                {/* Upper Section */}
                <div className='flex items-center space-x-3 p-2'>
                  <img className='h-10 w-10 rounded-full' src={item.photo} alt="" />
                  <div>
                    <p className='font-bold text-base font-serif italic'>{item.data}</p>
                    <p className='text-sm font-sans'>{new Date(item.timestamp).toLocaleDateString()}</p>

                  </div>
                </div>
                {/* post section */}
                <div className='p-1 justify-center flex flex-col'>
                  {item.data && <p className='text-sm font-bold  font-sans'>{item.data}</p>}
                  {item.image && <img className=' ' src={item.image} alt="" />}
                </div>
                {/* Lower section */}
                <div className='p-2'>
                  <div className=' flex justify-around items-center p-1'>
                  <div className='flex items-center bg-slate-300 px-2 rounded-md  justify-center space-x-2'>
                    <i class="fa-solid fa-lg hover:bg-white cursor-pointer fa-thumbs-up"></i>
                    <p className='text-lg active:text-green-400 font-sans font-bold'>{item.likes}</p>
                  </div>
                    <i class="fa-sharp fa-lg hover:bg-white cursor-pointer fa-solid fa-comment"></i>
                    <i class="fa-solid fa-lg  hover:bg-white cursor-pointer fa-share-nodes"></i>
                  </div>
                </div>

              </div>
            )
          })
        }
        {!posts && <ClipLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />}

      </div>


    


    </div>
  )
}
