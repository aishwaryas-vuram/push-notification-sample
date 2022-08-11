
import React from 'react';
import './App.css';
import firebase from './firebase';
import { getMessaging, onMessage } from "firebase/messaging";
function App() {

  React.useEffect(()=>{
    const msg=firebase.messaging();
    const ms = getMessaging();
    console.log(ms);
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
      console.warn("token",data)
    })
  })
  return (
    <div className="">
          Hi My Push Notification service   
    </div>
  );
}

export default App;
