import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: "",
  };
  
  const app = initializeApp(firebaseConfig);

    export const messaging = getMessaging(app);

    export const generateToken= async()=>{
      const permission=await Notification.requestPermission();
      console.log(permission)
if(permission==='granted'){
  const token=await getToken(messaging,{
    vapidKey:""
  });
  //console.log(token);
  return token;
}else{
  //alert('Grant Notification permission')
}

    }
