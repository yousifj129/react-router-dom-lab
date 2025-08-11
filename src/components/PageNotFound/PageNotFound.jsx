import { useNavigate } from "react-router"


const PageNotFound = () => {

    const navigate = useNavigate()

    setTimeout(()=>{
        navigate('/')
    }, 3000)
    
    return (
        <>
            <h1>404 Mailbox Not Found</h1>
            <h3>You will be redirected to home shortly...</h3>
        </>
    )
}

export default PageNotFound