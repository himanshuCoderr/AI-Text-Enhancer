import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
const Home = () => {
    return (
        <div>
            <Navbar />
            <button className='bg-[#1A3636] fixed right-3 top-28 p-3 rounded-lg text-white cursor-pointer ' >Upload File</button>
            <div className='w-11/12 h-[90vh] mt-2 bg-black m-auto flex justify-between' >
                <div className='w-[50%] h-full bg-slate-300 flex' >
                        <div className='w-[30%] h-full bg-zinc-700' >
                            <div>
                                    
                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                            <div>

                            </div>
                        </div>
                        <div className='w-[65%] p-5 h-full' >
                            <h1 className='text-center' >Your Text</h1>
                            <textarea name="" id="" className='w-[100%] h-[90vh]' ></textarea>
                        </div>
                </div>
                <div className='w-[20%] h-full bg-slate-600' ></div>
                <div className='w-1/3 h-full bg-gray-200' ></div>
            </div>
        </div>
    )
}

export default Home