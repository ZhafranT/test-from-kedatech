import React from 'react';
import { pricingPlan } from "../constants";
import styles from '../style';

const Pricing = () => {
   return (
      <section id="pricing" className="grid max-w-7xl lg:grid-cols-3 gap-12 lg:gap-8 py-24 px-4 sm:px-6 lg:px-8">
         {
            pricingPlan.map((plan) => (
               <div key={plan.id} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg relative flex flex-col">
                  <h3 className="text-lg font-semibold leading-5">
                     {plan.title}
                  </h3>
                  {plan.mostPopular && <p className="absolute top-0 -translate-y-1/2 bg-cyan-500 px-3 py-0.5 text-sm text-white font-semibold tracking-wide rounded-full shadow-md">Most Popular</p>}
                  <p className="mt-4 text-sm leading-6 text-slate-700">
                     {plan.desc}
                  </p>
                  <div className="mt-4 bg-slate-50 p-6 rounded-lg -mx-6">
                     <p className="text-sm font-semibold text-slate-500 flex flex-row items-center">
                        <span>{plan.currency}</span>
                        <span className="text-4xl text-slate-900 ml-3 mr-1">{plan.price}</span>
                        <span className="mt-5 mr-1">{plan.rp}</span>
                        <span className="text-xl mt-3">{plan.frequency}</span>
                     </p>
                  </div>
                  <ul className="mt-6 space-y-4 flex-1">
                     {
                        plan.contents.map((content) => (
                           <li key={content} className="text-sm text-slate-700 leading-6 flex">
                              {content}
                           </li>
                        ))
                     }
                  </ul>
                  <a href="#" className={`mt-8 block rounded-lg px-6 py-4 text-center text-sm font-semibold leading-4 ${plan.mostPopular
                     ? "text-white bg-cyan-500 hover:bg-cyan-600 shadow-md"
                     : "text-cyan-700 bg-cyan-50 hover:bg-cyan-100"}`}>
                     Start your Trial
                  </a>
               </div>
            ))
         }
      </section>
   )
}

export default Pricing