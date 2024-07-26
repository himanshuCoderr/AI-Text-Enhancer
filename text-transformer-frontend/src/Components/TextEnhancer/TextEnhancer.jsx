import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
const TextEnhancer = ({handleView}) => {
    return (
        <div className=' h-[90vh] w-[80vw] mt-2  m-auto flex justify-between ' style={handleView ? {} : {display :"none"} } >
            <div className=' w-[40%] h-full  items-center' >
                <div className=' w-[100%] p-5 h-full' >
                    <h1 className='text-center text-2xl' >Your Text</h1>
                    <textarea name="" id="" className='w-[100%] h-[80vh] p-3 rounded-lg' ></textarea>
                </div>
            </div>
            <div className='w-[20%] h-full flex   justify-center items-center' >
                <div className='w-[40%] h-[20]% scale-150] ' >
                    <ChevronRightIcon className='scale-150' />
                    <button>Generate</button>
                </div>
            </div>
            <div className='w-[40%] h-full' >
                <div className='w-[100%] p-5 h-full' >
                    <h1 className='text-center text-2xl' >AI Generated Text</h1>
                    <textarea name="" id="" className='w-[100%] h-[80vh] p-3 rounded-lg' ></textarea>
                </div>
            </div>
        </div>
    )
}

export default TextEnhancer