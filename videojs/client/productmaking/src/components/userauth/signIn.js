import React from 'react';

export const SignIn=()=>(
    <div className='signin'>
       <form>
     <label className='username'>
       <input type='email' placeholder='email'/>
      </label>
    <label className='userpassword' >
       <input type='password' placeholder='password'/>
   </label>
   <label className='usersubmit'>
    <button type='submit' placeholder='submit'></button>
   </label>
     </form>

   </div>


)

export default SignIn;