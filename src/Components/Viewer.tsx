import React from 'react'

const Viewer = () => {
  return (
    <section>
        <div className='w-full h-4/5  mt-40 p-3'>
             <h2 className='flex items-center justify-center text-4xl'>Who's Watching?</h2>
             <div className='flex gap-7 items-center justify-center mt-7'>
                <span><img src="/public/watch-img/smile red.png" alt=""  />  <h3 className='mt-1.5 flex justify-center text-l'>Angel</h3></span>
                <span><img src="/public/watch-img/smile blue.png" alt=""  /> <h3 className='mt-1.5 flex justify-center text-l'>Cynthia</h3></span>
                <span><img src="/public/watch-img/smile purple.png" alt="" /><h3 className='mt-1.5 flex justify-center text-l'>Daimon</h3></span>
                <span><img src="/public/watch-img/smile yellow.png" alt="" /><h3 className='mt-1.5 flex justify-center text-l'>Fave</h3></span>
                <span><img src="/public/watch-img/circlePlus.png" alt="" />  <h3 className='mt-1.5 flex justify-center text-l'>Add Profile</h3></span>
             </div>

             <h2 className='mt-15 rounded  flex ml-150 border p-1.5  px-5 w-fit'>Manage Profile</h2>
        </div>
    </section>
  )
}

export default Viewer