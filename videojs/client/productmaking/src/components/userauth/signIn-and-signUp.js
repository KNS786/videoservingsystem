import React from 'react';
import './user.styles.scss';


export const SignInandSignUp=()=>(
     <div className='signin-and-signup'>
      <form>
           <input type='email' placeholder='enter email '/>
           <input type='password' placeholder='enter password'/>
          <button type='submit' placeholder='submit'/>

        </form>

     </div>

)
export default SignInandSignUp;
