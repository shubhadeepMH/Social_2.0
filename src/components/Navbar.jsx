import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { BiDownArrowAlt } from 'react-icons/bi';
import { MdNotifications } from 'react-icons/md';
import { BsFillChatDotsFill, BsCameraReelsFill, BsFillCartFill } from 'react-icons/bs';
import { HiUserGroup } from 'react-icons/hi';
import { HomeIcon } from '@heroicons/react/24/solid'
import app from '../firebase'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged } from "firebase/auth";

export default function Navbar() {
    const [myUser, setMyUser] = useState(null)

    //creating instance of google authentication provider;
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app)

    //Handling authentication
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setMyUser(user);
        }
    });




    const handleAuth = async () => {
        if(myUser==null){
            signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              const credential = GoogleAuthProvider.credentialFromResult(result);
              const token = credential.accessToken;
              // The signed-in user info.
              const user = result.user;
              // IdP data available using getAdditionalUserInfo(result)
              // ...
            }).catch((error) => {
              // Handle Errors here.
              const errorCode = error.code;
              const errorMessage = error.message;
              // The email of the user's account used.
              const email = error.customData.email;
              // The AuthCredential type that was used.
              const credential = GoogleAuthProvider.credentialFromError(error);
              // ...
            });
        }else{
            alert('You are signed in')
        }

    }

    return (
        <div className='w-full sticky top-0 z-10 bg-green-200'>
        <div className='flex items-center min-w-full  justify-between  p-2 space-x-2  border-b-2 border-green-300'>
            {/* Left part */}
            <div className='flex p-2 items-center justify-between'>

                <h1 className='text-[#010101] font-serif font-extrabold text-lg italic'>Social</h1>
                <div className=' hidden md:flex  h-10 w-[12rem] focus:bg-white p-2 justify-center   items-center bg-gray-100 ml-2 rounded-full'>
                    <BsSearch className='mt-[6px] active:p-1' />
                    <input className='outline-none w-[8rem] ml-1 bg-transparent p-1 placeholder-lime-500 placeholder:font-mono ' type="text" placeholder='search social' />
                </div>
            </div>

            {/* Middle Part */}
            <div className='flex space-x-4 md:space-x-5 justify-center flex-grow  '>
                <div className='hover:bg-gray-200 h-9 flex justify-center rounded-md hover:text-green-500 hover
       border-b-2 hover:border-black w-9 align-middle items-center '>
                    <HomeIcon className='h-7 w-7 focus:text-blue-600' />
                </div>
                <div className='hover:bg-gray-200 h-9 flex justify-center rounded-md hover:text-green-500 hover
       border-b-2 hover:border-black w-9 align-middle items-center'>
                    <BsFillChatDotsFill className='h-7 w-7' />
                </div>
                <div className='hover:bg-gray-200 h-9 flex justify-center rounded-md hover:text-green-500 hover
       border-b-2 hover:border-black w-9 align-middle items-center'>
                    <HiUserGroup className='h-7 w-7' />
                </div>
                <div className='hover:bg-gray-200 h-9 flex justify-center rounded-md hover:text-green-500 hover
       border-b-2 hover:border-black w-9 align-middle items-center'>
                    <BsCameraReelsFill className='h-7 w-7' />
                </div>
            </div>


            {/* Right Part */}
            <div className='flex cursor-pointer items-center justify-end space-x-5'>
                <div className='flex items-center' onClick={handleAuth}>
                    <p className='font-bold p-2 hidden md:inline-flex text-sm font-serif'>{myUser ? myUser.displayName : 'Sign-In'}</p>
                    {myUser ? <img className='h- w-6 rounded-full' src={myUser.photoURL} alt="" /> :
                        <i class="fa-solid fa-user  fa-xl"></i>
                    }

                </div>
                <div className='hidden space-x-1  lg:inline-flex'>
                    <div className='bg-gray-300 hover:bg-white flex items-center justify-center h-8 w-8 rounded-full'>
                        <MdNotifications className='h-6 w-6' />
                    </div>
                    <div className='bg-gray-300 hover:bg-white flex items-center justify-center h-8 w-8  rounded-full'>
                        <BsFillCartFill className='h-6 w-6' />
                    </div>
                    <div className='bg-gray-300 flex hover:bg-white items-center justify-center h-8 w-8 rounded-full'>
                        <BiDownArrowAlt className='h-6 w-6' />
                    </div>

                </div>
            </div>


        </div>
        </div>
    )
}
