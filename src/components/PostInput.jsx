import React, { useRef } from 'react'
import { useState } from 'react'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth } from 'firebase/auth'
import app from '../firebase'
import { BiSend } from 'react-icons/bi';

export default function PostInput() {
  const [data, setData] = useState();
  const [postImage, setPostImage] = useState(null);
  let imageInputRef = useRef();
  let postInputRef = useRef()
  let db = getFirestore(app)
  let storage = getStorage(app);
  let auth = getAuth(app);

  let storePostData = async () => {
    let user = auth.currentUser
    if (user) {
      //  console.log(postImage);
      const fileName = `${Date.now()}_${postImage.name}`;

      // Upload the file to Firebase Storage
      const storageRef = ref(storage, `uploads/images/${fileName}`);
      await uploadBytes(storageRef, postImage);

      // Get the download URL for the uploaded image
      const downloadURL = await getDownloadURL(storageRef);


      // adding post data to firebase firestore
      try {
        let result = await addDoc(collection(db, 'posts'), {
          data,
          image: downloadURL,
          userId: user.uid,
          userName: user.displayName,
          timestamp: new Date().toDateString(),
          photo: user.photoURL,
          likes: 0,
          comments: []

        })
        setData(null)
        setPostImage('')
        alert('Posted succesfully')
        window.location.reload()
      } catch (error) {
        console.log(error);
      }

    } else {
      alert('Please SignIn to post')
    }

  }

  return (
    <div className='bg-white p-3 shadow-md rounded-md'>
      {/* Top half */}
      <div className='flex justify-center items-center space-x-1'>
        <img className='h-8 w-8 rounded-full shadow-md' src="https://scontent.fccu9-1.fna.fbcdn.net/v/t39.30808-6/326245687_1198183940841700_4046201947539704512_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=174925&_nc_ohc=QXIzRzo5rccAX_uFAxR&_nc_ht=scontent.fccu9-1.fna&oh=00_AfA_oFH6Abj2DiOdgaTjNckXEc7DyfdliUn2ndGYpkbFSQ&oe=646B95F3" alt="" />
        <input ref={postInputRef} value={data} onChange={(e) => setData(e.target.value)} className='outline-none  p-1 flex-grow bg-slate-200 rounded-md' type="text" placeholder='Whats on your mind' />
       
        <i onClick={storePostData} class="fa-sharp fa-solid fa-sm text-red-500 hover:text-blue-500 cursor-pointer active:scale-75 fa-bullhorn"></i>
      </div>

      {/* bottom half */}
      <div className='border-t-2 mt-4  flex justify-between'>
        <div className=' cursor-pointer p-2 m-2 flex justify-center items-center space-x-2'>
          <i class="fa-sharp  fa-solid fa-video text-red-600 fa-lg"></i>
          <p className='font-sans font-bold hidden md:inline-flex'>Live</p>
        </div>
        <div onClick={() => imageInputRef.current.click()} className='cursor-pointer p-2 m-2 flex justify-center items-center space-x-3'>
          <i class="fa-thin fa-solid fa-camera text-green-600 fa-lg"></i>
          <p className='font-sans font-bold hidden md:inline-flex'>Photo</p>
          <input onChange={(e) => setPostImage(e.target.files[0])} className='hidden' ref={imageInputRef} type="file" />
        </div>
        {postImage && <div className=' items-center hidden md:inline-flex '> <img className='h-10  w-10' src={postImage && URL.createObjectURL(postImage)} alt="" />
          <p onClick={() => setPostImage(null)} className='text-sm text-red-600 cursor-pointer hover:font-bold font-sans'>Remove</p>
        </div>
        }
        <div className=' cursor-pointer p-2 m-2 flex justify-center items-center space-x-3'>
          <i class="fa-thin fa-solid fa-face-smile text-yellow-500 fa-lg"></i>
          <p className='font-sans  font-bold hidden md:inline-flex'>Feelings</p>

        </div>

      </div>

    </div>
  )
}
