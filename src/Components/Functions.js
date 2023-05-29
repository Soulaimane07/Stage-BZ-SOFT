import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Languages from "../Components/Language.json"
import axios from "axios"
var bcrypt = require('bcryptjs');


export const ServerUrl = 'http://127.0.0.1:8000/api'
export const ServerUrlPublic = 'http://127.0.0.1:8000'


export const Lang = () => {
    const [lang, setLang] = useState("fr")

    useEffect(()=> {
        let langg = JSON.parse(localStorage.getItem("Rec-lang"))
        langg && (setLang(langg))
    }, [])

    let langObj
    lang === "fr" && (langObj = Languages?.Frensh)
    lang === "en" && (langObj = Languages?.English)
    lang === "ar" && (langObj = Languages?.Arabic)

    return langObj
}

export const ChangeLang = (lang) => {
    localStorage.setItem('Rec-lang', JSON.stringify(lang))
    window.location.reload()
}

export const GetData = (link) => {
    const [data, setData] = useState([])

    useEffect(()=> {
        axios.get(`${ServerUrl}${link}`)
        .then(res=>{
            setData(res.data)
        })
        .catch(err=> {
            console.log(err);
        })
    }, [])

    return {data}
}

export const GetUsers = (data) => {
    let clients = 0
    let agents = 0
    let companies = 0
  
    data.map((item)=>(
      item.type === "client" && (clients += 1),
      item.type === "agent" && (agents += 1),
      item.type === "company" && (companies += 1)
    ))
  
    return {clients, agents, companies}
}

export const deleteUser = (id, fun) => {
    axios.delete(`${ServerUrl}/users/${id}`)
        .then(res => {
            console.log(res);
            fun()
        })
}

export const CreateUserFun = (setMessage, setLoading, user,  navigate) => {
    setLoading(true)
    setMessage(null)

    axios.post(`${ServerUrl}/users`, user)
        .then(res=> {
            navigate('/users')
            console.log(res.data);
            setLoading(false)
            window.location.reload()
        })
        .catch(err=> {
            console.log(err);
            setMessage(err?.response?.data?.message)
            setLoading(false)
        })
}
 


export const LoginFun = (email, pass, setMessage, setLoading, navigate) => {
    setMessage(null)
    setLoading(true)
    
    axios.get(`${ServerUrl}/users/${email}`)
        .then(res=> {
            setLoading(false)
            console.log(res.data);
            bcrypt.compare(pass, res.data?.pass, (err,valid)=>{
                if(valid){
                    localStorage.setItem('Rec-user', JSON.stringify(res.data))
                    navigate('/')
                    window.location.reload()
                }
                else{
                    console.log("wrong credentials")
                    setMessage("Wrong email or password")
                }
            });
        })
        .catch(err=> {
            setLoading(false)
            console.log(err);
        })
}

export const SignupFun = (setMessage, setLoading, user, navigate) => {
    setMessage(null)
    setLoading(true)

    axios.post(`${ServerUrl}/users`, user)
      .then(res=> {
        console.log(res);
        localStorage.setItem('Rec-user', JSON.stringify(res.data))
        setLoading(false)
        navigate('/')
        window.location.reload()
      })
      .catch(err=> {
        setLoading(false)
        console.log(err);
        setMessage(err.response.data.message)
      })
}









export const Post = (link, data, fun, setLoading) => {
    setLoading(true)

    axios.post(`${ServerUrl}${link}`, data, {headers: {"Content-Type": "multipart/form-data"}})
        .then(res=> {
            console.log(res.data);
            fun()
            setLoading(false)
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
        })
}

export const Destroy = (link, id, fun) => {
    axios.delete(`${ServerUrl}${link}/${id}`)
        .then(res => {
            console.log(res);
            fun()
        })
}

export const Update = (link, id, data) => {
    axios.put(`${ServerUrl}${link}/${id}`, data)
        .then(res => {
            console.log(res.data);
            window.location.reload()
        })
}