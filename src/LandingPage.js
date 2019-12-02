
import React from 'react';
import auth from './Auth';

export default function LandingPage(props) {
 return (
  <div>
   <h1>Landing page</h1>
   <button onClick={()=>{
      auth.login(()=>{
       props.history.push('/app');
      });
   }}>Log in</button>
  </div>
 )
}
