import { Play } from 'lucide-react'
import 'react'

const Details = () => {
  return (
    <section className='details-section max-w-full max-h-full'>
            <header className= 'header max-w-full max-h-full'>
                 <img src="/details-img/bg-1.png" 
                 className='w-full h-160 absolute -z-50'
                 alt="" />
                 <div className="opacity-15  h-full  w-full absolute"></div>
                 <div className=' h-15 pt-70 items-center pl-7'>
                 <img src="/details-img/house of n.png" alt=""  width={440} height={136}/>
                 

                 <div className='w-fit gap-2 ml-4 flex '>
                  <button className="flex  p-1 px-3 mt-5 bg-white rounded  text-black border">
              <Play
                color="black
              "
              />{" "}
              Play{" "}
            </button>
            <span className='pt-5'><img src="/details-img/Button.png" alt="" width={40} height={40}/></span>
            <span className='pt-5'><img src="/details-img/like.png" alt=""  width={40} height={40}/></span>
                 </div>

                 <div className='text-white text-sm mt-30 w-300 ml-20 flex justify-between '>
                  <div className='text-2xl ml-5 '>
                  <h2 className='text-sm pt-2'><span >New</span> 3 Seasons 2024 HD</h2>
                  <h3 className='text-sm pt-1'>TV-MA smoking, violence</h3>
                  <h1 className='flex text-xl pt-1  '><span><img src="/details-img/Label.png" alt="" /></span> #2 in TV Shows Today</h1>
                  <p className='text-sm pt-2'> Years after retiring from their formidable ninja lives, <br/> 
                  a dysfunctional family must return to shadowy missions<br/> to counteract a string of looming threats.</p>
                  </div>
 
                  <div className='mr-35 w-56 mt-3'>
                    <h1>Cast: Kento Kaku, Yosuke Eguchi, Tae Kimura, more</h1>
                    <h1>Genres: TV Dramas, Japanese, TV Thrillers</h1>
                    <h1>This show is: Dark, Suspenseful, Exiting</h1>
                  </div>
                 </div>
                 </div>
           <article>
        <div className="  flex items-center justify-center gap-3 flex-col mt-150">
          <span className='flex justify-between w-2xl'> 
            <h1 className='text-3xl'>Episodes</h1>
            <h2>House of Ninjas</h2>
          </span>
          <div className="bg-[#1b1b1b] w-2xl h-25 rounded-lg question items-center flex justify-center">1 </div>
          <div className="bg-[#1b1b1b] w-2xl h-25 rounded-lg question items-center flex justify-center"> 2 </div>
          <div className="bg-[#1b1b1b] w-2xl h-25 rounded-lg question items-center flex justify-center">3 </div>
          <div className="bg-[#1b1b1b] w-2xl h-25 rounded-lg question items-center flex justify-center">4 </div>
          <div className="bg-[#1b1b1b] w-2xl h-25 rounded-lg question items-center flex justify-center">5</div>
          <div className="bg-[#1b1b1b] w-2xl h-25 rounded-lg question items-center flex justify-center"> 6</div>
          <div className="bg-[#1b1b1b] w-2xl h-25 rounded-lg question items-center flex justify-center"> 7</div>
          <div className="bg-[#1b1b1b] w-2xl h-25 rounded-lg question items-center flex justify-center"> 8</div>
        </div>
      </article>

            </header>
      <article className='mt-20 h-full w-full'>
         <div className="relativ h-[300vh] w-full">
        <div>
          <h2 className="pl-15 text-xl">More Like This</h2>

          <div className="mt-13 pl-15 space-x-7">
           <span className='border w-96 h-72'></span>
         
          </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Details