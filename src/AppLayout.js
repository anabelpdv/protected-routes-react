import React from 'react';
import auth from './Auth'

const AppLayout = (props) =>{
  return <div>
   <h1>AppLayout</h1>
   <button onClick={
    ()=>{
      auth.logout(()=>{
        props.history.push('/');
      })
    }
   }>Logout</button>
   
   
   </div>
}



export default AppLayout; 