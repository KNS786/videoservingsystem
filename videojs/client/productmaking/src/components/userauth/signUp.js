
export const SignUp=()=>(
    <div className='signUp'>

        <form>
            <label className='name'>
              <input type='text' placeholder='name' />
             </label>
          <label className='email'>
             <input type='email' placeholder='email'/>
         </label>
        <label className='password'>
           <input type='password' placeholder='password'/>
       </label>
     <label className='confirmPassword'>
         <input type='password' placeholder='confirm Password'/>
       </label>
  <label className='submit'>
    <button type='submit' placeholder='submit'/>
  </label>
         
        </form>
      

   </div>
)

export default SignUp;