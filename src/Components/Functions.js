import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Languages from "../Components/Language.json"
import axios from "axios"

export const ServerUrl = 'http://127.0.0.1:8000/api'

export const CreateUser = (user) => {
    // const navigate = useNavigate()

    alert(user)
    // navigate('/users')
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

    console.log(link," ==>",data);
    return {data}
}