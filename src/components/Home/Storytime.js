import React, { useState } from "react";
import storyimg from "../../assets/images/walle-group.jpg";
import landofkoja from "../../assets/images/tonwalle.jpg";
import kojavideo from "../../assets/images/kojavideoupdated.mp4";
import { Collapse, Button } from "@material-tailwind/react";

export default function Storytime() {
  const [colapse, setcolapse] = useState(false);
  return (
    <div>
      <div className="w-[91%] xl:max-w-[1080px] mx-auto relative py-[96px] text-center   ">
        <h2 className=" f-f-r-b font-medium text-xl  sm:text-3xl lg:text-5xl text-primary  ">
          Story of Wall-E
        </h2>
        <img src={storyimg} className=' w-[723px] h-auto xl:h-[385px] mx-auto  my-[64px]  '  />
        {/* <video
          className=" w-full h-auto mx-auto  my-[64px]  "
          controls
          poster={storyimg}
        >
          <source src={kojavideo} type="video/mp4" />
        </video> */}
        <div className={` 2xl:w-[927px] mx-auto  mb-20 relative`}>
          <p className=" f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ">
          In a future not too distant from our own, Earth has become a wasteland of discarded technology and forgotten dreams. Amongst the rubble, one small robot stands out: Wall-E. Originally designed to clean up the mess left by humanity, Wall-E has a heart (or rather, a circuit) of gold. His journey from a solitary cleaner to a leader of a robotic revolution is both an inspiring tale and an innovative meme token on the TON blockchain ecosystem.
          </p>

          <p className=" f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ">
          Wall-E, an acronym for Waste Allocation Load Lifter: Earth-Class, was one of many robots created to clean up the planet after humans had abandoned it due to overwhelming pollution. For years, Wall-E worked tirelessly, compacting trash into small, manageable cubes, while developing a quirky personality and a fascination with human artifacts.
          </p>

          <p className=" f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ">
          His solitary existence took a turn when he discovered a single, thriving plant, a symbol of hope for a dying planet. This discovery set off a chain of events that led Wall-E into space, on a mission that would redefine his purpose and that of his fellow robots.
          </p>
          <Collapse open={colapse}>
            <p className=" f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ">
            In his interstellar adventure, Wall-E encountered the Axiom, a spaceship housing the remnants of humanity. Here, Wall-E’s determination and courage inspired both humans and robots to reconsider their sedentary lives and the future of Earth. His unwavering dedication to preserving the plant symbolized a call to action, urging everyone to return home and restore their planet.
            </p>

            <p className=" f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ">
            Wall-E’s heroism didn’t stop at the Axiom. His journey continued as he sought out other Wall-E units scattered across the galaxy. These robots, like Wall-E, were built to clean and repair, but under his leadership, they became so much more.humans didn't
              delay in making the captured Floki great in Meme.
            </p>

            <p className=" f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ">
            Wall-E's newfound purpose was to unite these dispersed Wall-E units. Together, they formed a cohesive community dedicated to not only cleaning up Earth but also innovating sustainable solutions for the future. These robots, equipped with Wall-E's spirit of resilience and creativity, worked collectively to transform the barren wasteland into a thriving, green environment.


            </p>

            <p className=" f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ">
            This robotic community became a beacon of hope and a model of cooperation, demonstrating that even the smallest entities can make a significant impact when working together. Wall-E's leadership turned individual efforts into a powerful movement, showcasing the potential of unity and shared vision.


            </p>

            <p className=" f-f-r-pr text-grey-dark text-tiny lg:text-xl my-3 ">
            Wall-E’s transformation from a solitary robot into a leader of a robotic community is a tale of hope, unity, and perseverance. As a meme token on the TON blockchain, Wall-E continues to inspire and mobilize people across the globe, highlighting the potential of collective action in addressing global challenges. By embracing Wall-E’s legacy, the TON community is not only celebrating a beloved character but also committing to the values he represents: innovation, cooperation, and a brighter future for all.







            </p>

            <img
              src={landofkoja}
              className=" w-[512px] h-[350px] rounded-2xl mx-auto mt-[-53px] z-[-16] relative "
            />
          </Collapse>
          <div
            className={` ${
              colapse ? "bottom-0 " : "bottom-10"
            } absolute   w-full z-10`}
          >
            <button
              onClick={() => setcolapse(!colapse)}
              className="  bg-white w-[156px] h-[46px] rounded-[39px] f-f-r-pr text-lg text-black   "
            >
              <ul className=" inline-flex items-center  ">
                <li>{colapse ? " collapse" : "Expand"}</li>
                <li className=" ml-2 mt-1 ">
                  <svg
                    className={` ${colapse ? " rotate-180 " : ""} `}
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9L12 15L18 9"
                      stroke="#333333"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </li>
              </ul>
            </button>
          </div>

          <div className={`${colapse ? "" : "brdr-bg"} `}></div>
        </div>
      </div>
    </div>
  );
}
