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
    const [lang, setLang] = useState("Arabic")

    useEffect(()=> {
        let langg = JSON.parse(localStorage.getItem("lang"))
        langg && (setLang(langg))
    }, [])

    let langObj
    lang === "Frensh" && (langObj = Languages?.Frensh)
    lang === "English" && (langObj = Languages?.English)
    lang === "Arabic" && (langObj = Languages?.Arabic)

    return langObj
}