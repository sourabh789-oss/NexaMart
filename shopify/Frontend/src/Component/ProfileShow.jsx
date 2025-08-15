import React from 'react';
import axios from 'axios';


const ProfileShow = ({ firstname, lastname, MobileNo, email }) => {

    const logouthander = async () => {
      



    }



    return(
    <div className=' ProfileSection font-mono p-6 box-border rounded-md text-[#111827]  flex flex-col justify-center items-center    '>

        <img className='font-extralight w-16 h-16 object-cover mb-3' src="https://d8it4huxumps7.cloudfront.net/uploads/images/unstop/user-avatar/png/11.png" alt="User_Profile" />
        <h2 className='dark:text-[#BAE6FD]'>Name:{firstname} {lastname}</h2>
        <h4 className='text-sm font-light dark:text-white'>email:{email}</h4>
        <h2 className='dark:text-white'>Mobile No:{MobileNo}</h2>

        <div className='mt-10'>
            <button onClick={() => {
                logouthander()
            }} className=' mx-auto px-3 text-white py-2 font-bold bg-[#27E0B3]'>Logout</button>
        </div>
    </div>
    )


}

export default ProfileShow;