import React, { useState } from 'react';
import { burgerBar, close, logo } from "../asset";
import { navLinks } from "../constants";
import Button from './Button';
import Login from './Login';

const Navbar = () => {
   const [toggle, setToggle] = useState(false)
   const [showLogin, setShowLogin] = useState(false)


   return (
      <>
         <nav className="w-full flex py-6 justify-between items-center navbar">
            <a href="#hero">
               <img src={logo} alt="logo" className="w-[124px] h-[50px] object-cover mr-5" />
            </a>


            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
               {
                  navLinks.map((nav, index) => (
                     <li key={nav.id} className={`roboto fonts-normal cursor-pointer mr-10`}>
                        <a href={`#${nav.id}`}>{nav.title}</a>
                     </li>
                  ))
               }
               <Button title="Login" onClick={() => setShowLogin(true)} />
            </ul>

            <div className="sm:hidden flex flex-1 justify-end items-center">
               <img
                  src={toggle ? close : burgerBar}
                  alt="menu"
                  className="w-[25px] h-[24px] object-contain"
                  onClick={() => setToggle(!toggle)}
               />
               <div
                  className={`${!toggle ? "hidden" : "flex"} p-6 bg-black absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                  <ul className="list-none flex flex-col justify-end items-center flex-1">
                     {
                        navLinks.map((nav, index) => (
                           <li key={nav.id} className={`font-roboto fonts-normal text-white cursor-pointer mb-4`}>
                              <a href={`#${nav.id}`}>{nav.title}</a>
                           </li>
                        ))
                     }
                     <Button title="Login" className={"text-white"} onClick={() => setShowLogin(true)} />
                  </ul>
               </div>
            </div>
         </nav>
         <Login isVisible={showLogin} onClose={() => setShowLogin(false)} />
      </>
   )
}

export default Navbar