import { signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  console.log(user)

  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [user])

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  async function signUp(userInfo) {
    try {
      fetch("https://tf-practical.herokuapp.com/api/register/", {
        method: "POST",
        body: JSON.stringify(userInfo),
        headers: { "Content-Type": "application/json" }
      })
        .then((res => res.json()))
        .then(res => {
          localStorage.setItem("user", JSON.stringify(res));
          setUser(res)
        })
    } catch (error) {

    }
  }
  async function logOut() {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}