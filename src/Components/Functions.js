import { useNavigate } from "react-router-dom"

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