import React from 'react'
import MyOrdersPage from './MyOrdersPage'

function Profile() {
  return (
    <div className='min-h-screen flex flex-col'>
        <div className='flex-grow container mx-auto p-4 md:p-6'>
            <div className='flex flex-col md:flex-row md:space-x-6 md:space-y-8'>
                {/* left section */}
                <div className='w-full md:w-1/3 lg:w-1/4 shadow-md rounded-lg p-6'>
                <h1 className='text-2xl md:text-3xl font-bold mb-4'>John Doe</h1>
                <p className='text-lg text-gray-600 mb-4'>joe@test.com</p>
                <button className='text-white w-full bg-red-500 py-2 px-4 rounded hover:bg-red-600'>
                    Logout
                </button>
                </div>
                {/* right section table */}
                <div className='w-full md:w-2/3 lg:w-3/4'>
                    <MyOrdersPage />

                </div>
                
            </div>

        </div>
      
    </div>
  )
}

export default Profile
