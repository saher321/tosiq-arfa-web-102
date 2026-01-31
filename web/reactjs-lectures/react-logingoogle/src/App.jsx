import { useGoogleLogin } from '@react-oauth/google';
import React from 'react'
import axios from 'axios'
import { useState } from 'react';
const App = () => {
  const [user, setUser] = useState(null);
  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const userDetails = await axios.get("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${response.access_token}`
          }
        });
        console.log(userDetails);
        setUser(userDetails.data);
      } catch (error) {
        console.log("Error: ", error)
      }
    },
  });

  return (
    <div>
      <button onClick={loginWithGoogle}>
        Continue with Google
      </button>

      <hr />

      <div>
        Name: {user?.name}
      </div>
      <div>
        Email: {user?.email}
      </div>
      <div>
        Avatar: <img src={user?.picture} alt="" />
      </div>
    </div>
  )
}

export default App
