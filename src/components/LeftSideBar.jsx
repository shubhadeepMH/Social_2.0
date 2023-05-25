import React, { useEffect, useState } from 'react'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import app from '../firebase'

export default function LeftSideBar() {
    const [myUser, setMyUser] = useState(null)
    let auth = getAuth(app)

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setMyUser(user);
        }
    })


    let handleLogOut = () => {

        if (myUser != null) {
            signOut(auth).then(() => {

            }).catch((error) => {
                alert('An error happened')
            });
            window.location.reload()
        } else {
            console.log(user);
            alert("you are already logged out")
        }

    }

    let sideBarData = [
        {
            title: "Friends",
            icon: "fa-sharp fa-solid fa-user-group"
        },
        {
            title: "Groups",
            icon: "fa-solid fa-people-group"
        },
        {
            title: "Marketplace",
            icon: "fa-sharp fa-solid fa-store"
        },
        {
            title: "Events",
            icon: "fa-solid fa-calendar"
        },
        {
            title: "Memories",
            icon: "fa-sharp fa-solid fa-clock"
        },
        // {
        //     title: "See More",
        //     icon: "fa-sharp fa-solid fa-caret-down"
        // },
    ]

    return (
        <div className='m-2 p-3 max-w-[18rem]'>
            {
                sideBarData.map((item, index) => {

                    return (
                        <div key={index} className='flex cursor-pointer active:text-blue-700 items-center hover:text-green-600 space-x-3 m-1 p-2 md:hover:bg-slate-200 rounded-lg '>
                            <i className={`${item.icon} fa-xl`}></i>
                            <p className='font-bold invisible md:visible '>{item.title}</p>
                        </div>
                    )


                })
            }
          { myUser && <div>
                <div onClick={handleLogOut} className='md:flex cursor-pointer border text-center hidden border-black hover:bg-red-600 hover:text-white justify-center'>
                    <p className='font-bold '>Log-Out</p>
                </div>
                <div onClick={handleLogOut} className='flex md:hidden cursor-pointer active:text-blue-700 items-center hover:text-green-600 space-x-3 m-1 p-2 md:hover:bg-slate-200 rounded-lg '>
                    <i class="fa-solid fa-arrow-right-from-bracket fa-lg md:hidden"></i>
                </div>
            </div>}


        </div >


    )
}
