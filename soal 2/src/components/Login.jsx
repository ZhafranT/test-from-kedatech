

const Login = ({ isVisible, onClose }) => {
   if (!isVisible) return null

   const handleClose = (e) => {
      if (e.target.id === 'wrapper') onClose();
   }

   return (
      <div id='wrapper' className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center z-10" onClick={handleClose}>
         <div className="w-[600px] flex flex-col">
            <button className='text-black text-xl place-self-end' onClick={() => onClose()}>
               X
            </button>
            <div className="bg-white p-2">
               <div className='bg-gray-100 flex flex-col justify-center'>
                  <form className='max-w-[400px] w-full mx-auto bg-white p-4'>
                     <h2 className='text-4xl font-bold text-center py-6'>Login</h2>
                     <div className='flex flex-col py-2'>
                        <label>Username</label>
                        <input className='border p-2' type="text" />
                     </div>
                     <div className='flex flex-col py-2'>
                        <label>Password</label>
                        <input className='border p-2' type="password" />
                     </div>
                     <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>
                     <div className='flex justify-between'>
                        <p className='flex items-center'><input className='mr-2' type="checkbox" /> Remember Me</p>
                        <p>Create an account</p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login