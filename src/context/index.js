import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null)
  const [post, setPost] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const [updateUI, setUpdateUI] = useState(1)
  const [loading, setLoading] = useState(false)

  const router = useNavigate()


  useEffect(() => {
    setUser(localStorage.getItem("user"))
  }, [user])

  async function logIn(email, password) {
    setLoading(true)
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
            localStorage.setItem("userPass", JSON.stringify(password))
            setUser(res)
            console.log(res)
            setUpdateUI(updateUI + 1)
            router('/')
            setLoading(false)
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


  console.log(window)

  async function getPost() {
    const userInfo = JSON.parse(localStorage.getItem("user"))
    const pass = JSON.parse(localStorage.getItem("userPass"))
    const encodedData = window.btoa(userInfo?.user?.email + ':' + pass);
    try {
      let headersList = {
        "Accept": "*/*",
        "Authorization": `Basic ${encodedData}`
      }

      let response = await fetch("https://tf-practical.herokuapp.com/api/job_post/", {
        method: "GET",
        headers: headersList
      });
      const data = await response.json()
      console.log(data)
      setPost(data)
    } catch (error) {
      console.log(error)
    }
  }

  async function detelePost(id) {
    const userInfo = JSON.parse(localStorage.getItem("user"))
    const pass = JSON.parse(localStorage.getItem("userPass"))
    const encodedData = window.btoa(userInfo?.user?.email + ':' + pass);
    try {
      let headersList = {
        "Accept": "*/*",
        "Authorization": `Basic ${encodedData}`
      }

      await fetch(`https://tf-practical.herokuapp.com/api/job_update/${id}/`, {
        method: "DELETE",
        headers: headersList
      });
      setUpdateUI(updateUI + 1)
    } catch (error) {
      console.log(error)
    }
  }

  async function addPost(post) {
    const userInfo = JSON.parse(localStorage.getItem("user"))
    const pass = JSON.parse(localStorage.getItem("userPass"))
    const encodedData = window.btoa(userInfo?.user?.email + ':' + pass);
    try {
      let headersList = {
        "Accept": "*/*",
        "Authorization": `Basic ${encodedData}`,
        "Content-Type": "application/json"
      }

      let bodyContent = JSON.stringify(post);

      await fetch("https://tf-practical.herokuapp.com/api/job_post/", {
        method: "POST",
        body: bodyContent,
        headers: headersList
      });
      setUpdateUI(updateUI + 1)
      handleCloseModal()
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (user) {
      getPost()
    }
  }, [updateUI, user])


  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp, logOut, error, setError, post, handleOpenModal, handleCloseModal, modalOpen, detelePost, addPost, loading }}
    >
      {
        loading ? <h1>Loading</h1> : children
      }
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}