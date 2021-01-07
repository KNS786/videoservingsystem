import React from 'react';

import  {SignInandSignUp} from './components/userauth/signIn-and-signUp';

class App extends React.Component{
     render(){
      return(
          <div className='App'>
          <SignInandSignUp/>
        </div>
    )

   }
}

export default App;