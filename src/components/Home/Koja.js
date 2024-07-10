import React from 'react'
import walleimg from '../../assets/images/wall-e2.jpg'
import walleimgi from '../../assets/images/wall-e2i.jpg'

export default function Koja() {
  return (
    <div className=' my-4 ' >
      <div className=' sm:w-[94.3%] xl:max-w-[1080px] mx-auto relative pt-[54px] sm:pt-0 sm:mt-[179px] mb-[80px]   ' >
        <img src={walleimg} className=' w-full h-[688px] hidden sm:block ' />
        <img src={walleimgi} className=' w-full mx-auto h-[512px] sm:hidden  mt-72  ' />
        <div className=' absolute w-full top-[120px] md:top-[101px] lg:top-[87px] ' >


          <div className=' w-[94.3%] sm:w-10/12 md:w-7/12 lg:w-8/12 mx-auto text-center nav-bg-top p-5 rounded-lg' >
            <h3 className=' f-f-sm text-2xl lg:text-5xl text-white leading-[60px]  sm:leading-[72px] ' >From the Metaverse of Wall-E</h3>
            <h5 className=' f-f-m text-white text-base  pt-3 sm:pt-0 w-[322px] sm:w-full mx-auto ' >"Wall-E has woken up in a universe full of it's kind <br className='  hidden xl:block ' /> a new Hope for Humanity and TON <br className=' sm:hidden' /> "For the Love of Wall-E".</h5>
          </div>
        </div>


      </div>
    </div>
  )
}
