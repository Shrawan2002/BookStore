import React from 'react'

export default function Contact() {
  return (
    <>
    <div className="flex h-screen justify-center items-center ">
        <div className='modal-box shadow-xl rounded-md p-10 border-[2px] dark:bg-slate-900 dark:text-white'>
            <h1 className='font-bold text-xl'>Contact Us</h1>
            <form >
               <div className='mt-4 space-y-4'>
                 <span>Name</span>
                 <br/>
                 <input type='text'
                  placeholder='enter your name'
                  className='bg-white text-black shadow-sm py-1 px-3 w-80 rounded-md outline-none border
                  dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:placeholder:text-gray-400'
                   />
               </div>
                <div className='mt-4 space-y-4'>
                  <span>Email</span>
                  <br/>
                  <input 
                  type='email' 
                  placeholder='enter your name'
                  className=' bg-white text-black shadow-sm outline-none border py-1 px-3 rounded-md w-80
                         dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:placeholder:text-gray-400'
                   />
                </div>
                <div className='mt-4 space-y-4'>
                <span>Message</span>
                <br/>
                <textarea 
                className='bg-white text-black shadow-md outline-none border py-1 px-3 rounded-md w-80
                 dark:bg-slate-800 dark:text-white dark:border-slate-600 dark:placeholder:text-gray-400'
                placeholder='type your message'
                type="message"/>
                </div>
                <button className='p-3 bg-blue-600 mt-3 rounded-xl text-xl'>Submit</button>
            </form>
        </div>
    </div>
    </>
  )
}
