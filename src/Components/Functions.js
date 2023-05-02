import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import Languages from "../Components/Language.json"

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