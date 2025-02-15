import React from 'react'
import Pillars1 from '../../assets/images/Group9.png'
import Pillars2 from '../../assets/images/Pillars2.svg'
import Pillars3 from '../../assets/images/Pillars3.svg'



export default function Pillers() {
  return (
    <div className=' w-[91%] xl:max-w-[1320px] mx-auto sm:my-[96px] my-[64px] text-center ' >
      <h2 className=' f-f-r-b font-medium text-xl md:text-4xl text-primary  ' >
        WallE Pillars
      </h2>
      <h5 className=' f-f-r  text-sm text-grey-dark italic ' >
        Hover on the cards
      </h5>
      <div className=' grid grid-cols-12  items-center gap-4 sm:gap-8 mt-10 ' >
        <div className=' col-span-12 lg:col-span-6 xl:col-span-4 mt-4 sm:mt-0 ' >
          <div className='  relative text-center pillerhvr ' >
            <div class="image-container">
              <img src={Pillars1} className=' rounded-[32px] object-cover w-full lg:w-[435px] h-[435px] mx-auto ' />
              <div class="image-overlay"></div>
              <div class="image-text">
                <p className='f-f-m text-tiny text-white ' >Success of WallE will depend on its community. As reached in consensus, WallE will stand on united strength of its community as well as that of human population. The puppies have left Koja to join human population, humans can't afford to fail them. United we stand to make WallE great like their parents - Doge, ShibInu, Floki and few others.</p>
              </div>

            </div>

            <div className=' absolute top-[26px] w-full  '  >
              <button className=' strng-btn rounded-[58px] w-[223px] h-[52px] md:w-[257px]  md:h-[58px] text-white text-base f-f-b ' >
                Strong community
              </button>
            </div>
          </div>
        </div>
        <div className=' col-span-12 lg:col-span-6 xl:col-span-4  mt-4 sm:mt-0 ' >
          <div className='  relative text-center' >
            <div class="image-container">
              <img src={Pillars2} className=' rounded-[32px] object-cover w-full lg:w-[435px] h-[435px] mx-auto ' />
              <div class="image-overlay"></div>
              <div class="image-text-2">
                <p className='f-f-m text-tiny text-white ' >Based on the consensus reached, WallE will stand firmly on Innovative developers amongst humans to build cutting-edge blockchain utilities that would empower human population. WallE uses this medium to invite Innovative developers within the community to come forward and volunteer in building blockchain utilities that would empower both the community and human population at large.</p>
              </div>

            </div>
            <div className=' absolute top-[26px] w-full  '  >
              <button className=' strng-btn rounded-[58px] w-[256px] md:w-[290px]  h-[52px] md:h-[58px] text-white text-base f-f-b ' >
                Innovative Developers
              </button>
            </div>
          </div>
        </div>
        {/* <div className=' col-span-12 lg:col-span-12 xl:col-span-4  mt-4 sm:mt-0 ' >
          <div className='  relative text-center' >
            <div class="image-container">
              <img src={Pillars3} className=' rounded-[32px] object-cover w-full lg:w-[435px] h-[435px] mx-auto ' />
              <div class="image-overlay"></div>
              <div class="image-text">
                <p className='f-f-m text-tiny text-white ' >WallE will support puppies and human kids. A good percentage of the project is dedicated towards this - Support for puppies shelters and children causes. The community will be given opportunity from time to time to vote on charity this Support should go to. The support will go to charities that truly need the support anywhere in the world.</p>
              </div>

            </div>
            <div className=' absolute top-[26px] w-full  '  >
              <button className=' strng-btn rounded-[58px] w-[311px] md:w-[385px] lg:w-[340px] 2xl:w-[385px] h-[52px] md:h-[58px] text-white text-base f-f-b ' >
                <span className=' hidden md:block' > Puppy care and children support </span>
                <span className=' md:hidden ' >Puppycare and Kids support</span>
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  )
}
