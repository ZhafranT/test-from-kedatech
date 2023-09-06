/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { people } from "../asset"
import styles, { layout } from '../style'

const Hero = () => {
   return (
      <section id="hero" className={`flex md:flex-row flex-col`}>

         <div className="w-[100%] flex flex-row-reverse justify-between items-center">
            <div className={`${styles.flexCenter} w-full`}>
               <h1 className="text-center font-roboto">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis labore, consequuntur obcaecati doloribus magnam laborum.
               </h1>
            </div>


            <div className={`w-full ${styles.flexStart} flex-col py-10 ml-10 relative top-[14rem] left-12`}>
               <div className="flex flex-row justify-between items-start sm">
                  <h1 className="flex-1 font-roboto italic">
                     "Lorem ipsum dolor sit amet consectetur."
                  </h1>
               </div>
               <div>
                  <img src={people} alt="people" className="w-[185px] h-[185px]" />
               </div>
            </div>
         </div>


      </section>
   )
}

export default Hero




{/* <div>
            <img src={people} alt="people" className="w-[185px] h-[185px] relative z-[5]" />
         </div>


         <div className={`flex-1 ${styles.flexCenter} flex-col xl:px-0 sm:px-16 px-6`}>
            <div className="w-[350px] flex flex-row justify-between items-end">
               <h1 className="flex-1 font-roboto ss:text-[72px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem repudiandae deleniti magni ut sed eaque similique quibusdam nobis corrupti repellat natus illo blanditiis, et molestias.
               </h1>
            </div>
         </div> */}