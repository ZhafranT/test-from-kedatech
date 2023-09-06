import React from 'react'
import { ecommerce } from '../asset'
import styles, { layout } from '../style'


const About = () => {
   return (
      <section id="about" className={`${layout.section} mt-[8rem] py-24`}>
         <div className={layout.sectionImg}>
            <img src={ecommerce} alt="" className="w-[350px] h-[350px] relative z-[5]" />
         </div>

         <div className={`${layout.sectionInfoSecond} ${styles.marginY}`}>
            <h2 className="text-black max-w-[470px] text-center">
               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi repellat a debitis? Vel, in aliquid dolorem pariatur aliquam nihil! Autem quibusdam soluta et dicta laboriosam.
            </h2>
         </div>

      </section>
   )
}

export default About