import React from 'react';
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaLinkedin, FaMapLocation } from "react-icons/fa6";
import { contactImg } from '../asset';
import styles from '../style';


const Contact = () => {
   return (
      <div className="bg-gray-100">
         <div className="flex w-full min-h-screen justify-center items-center">
            <div className=" flex flex-col md:flex-row md:space-x-6 md:space-y-0 spacing-y-6 bg-cyan-700 w-full max-w-4xl p-8 rounded-xl shadow-xl text-white">
               <div className="flex-1 flex-col space-y-6 justify-between">
                  <div>
                     <h1 className="text-bold text-4xl tracking-wide">Contact Us</h1>
                     <p className="pt-2 text-cyan-100 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut!</p>
                  </div>
                  <div className="flex flex-col space-y-4">
                     <div className="inline-flex space-x-2 items-center">
                        <AiFillPhone />
                        <span>+62123456</span>
                     </div>
                     <div className="inline-flex space-x-2 items-center">
                        <AiOutlineMail />
                        <span>fran@mail.com</span>
                     </div>
                     <div className="inline-flex space-x-2 items-center">
                        <FaMapLocation />
                        <span>Jakarta, ID</span>
                     </div>
                  </div>
                  <div className="flex space-x-4 text-lg">
                     <a href="">
                        <FaFacebook />
                     </a>
                     <a href="">
                        <FaInstagram />
                     </a>
                     <a href="">
                        <FaLinkedin />
                     </a>
                  </div>
               </div>
               <div className={`${styles.flexCenter}`}>
                  <img src={contactImg} alt="" className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] mr-5" />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Contact