import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null)
  const router = useNavigate()
  console.log(user)

  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [user])

  async function logIn(email, password) {
    try {
      fetch("https://tf-practical.herokuapp.com/api/login/", {
        method: "POST",
        body: JSON.stringify({ email: email, password: password }),
        headers: { "Content-Type": "application/json" }
      })
        .then((res => res.json()))
        .then(res => {
          if (res.detail) {
            setError(res);
            console.log(res)
          } else {
            localStorage.setItem("user", JSON.stringify(res));
            setUser(res)
            console.log(res)
            router('/')
          }
        })
    } catch (error) {
      setError(error.message)
    }
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
          if (Array.isArray(res.email) && Array.isArray(res.password)) {
            setError(res);
          } else {
            // localStorage.setItem("user", JSON.stringify(res));
            // setUser(res)
            router('/')
          }
        })
    } catch (error) {
      setError(error.message)
    }
  }
  async function logOut() {
    localStorage.removeItem("user")
    setUser(null)
  }

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, error, setError }}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}