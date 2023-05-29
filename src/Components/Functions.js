import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Languages from "../Components/Language.json"
import axios from "axios"

export const ServerUrl = 'http://127.0.0.1:8000/api'
export const ServerUrlPublic = 'http://127.0.0.1:8000'

export const CreateUser = (user) => {
    // const navigate = useNavigate()

    alert(user)
    // navigate('/users')
}

export const CreateComplaint = (link, complaint, fun, setLoading) => {
    setLoading(true)
    
    axios.post(`${ServerUrl}${link}`, complaint, {headers: {"Content-Type": "multipart/form-data"}})
      .then(res=> {
        console.log(res.data);
        fun()
        setLoading(false)
      })
      .catch(err=> {
        console.log(err);
        setLoading(false)
      })
}

export const CreatePriorityFun = (link, priority, fun, setLoading) => {
    setLoading(true)
    
    axios.post(`${ServerUrl}${link}`, priority)
      .then(res=> {
        console.log(res.data);
        fun()
        setLoading(false)
      })
      .catch(err=> {
        console.log(err);
        setLoading(false)
      })
}

export const Login = (user) => {
    const navigate = useNavigate()
    
    return(
        navigate('/'),
    // localStorage.setItem('Rec-user', JSON.stringify(user))
    // window.location.reload()
        console.log(user)
    )
}

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

export const UpdateUser = (id, data) => {
    axios.put(`${ServerUrl}/users/${id}`, data)
        .then(res => {
            console.log(res.data);
            window.location.reload()
        })
}

export const deletePriority = (id, fun) => {
    axios.delete(`${ServerUrl}/priorities/${id}`)
        .then(res => {
            console.log(res);
            fun()
        })
}

export const UpdatePriority = (id, data) => {
    axios.put(`${ServerUrl}/priorities/${id}`, data)
        .then(res => {
            console.log(res.data);
            window.location.reload()
        })
}

export const Update = (id, data) => {
    axios.put(`${ServerUrl}/priorities/${id}`, data)
        .then(res=>{
            console.log(res.data);
            window.location.reload()
        })
}

export const deleteComplaint = (id, fun) => {
    axios.delete(`${ServerUrl}/complaints/${id}`)
        .then(res => {
            console.log(res);
            fun()
        })
}

export const ChangeLang = (lang) => {
    localStorage.setItem('Rec-lang', JSON.stringify(lang))
    window.location.reload()
}