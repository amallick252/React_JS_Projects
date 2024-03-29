import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function AuthLayout({children, authentication = true }) {// asuming value true
    const navigate= useNavigate()
    const [loader, setLoader] = useState(true)
    const authStatus = useSelector (state=> state.auth.status)// state.name.status comes from authSlice, where auth is the name

    useEffect(()=>{
        if(authentication && authStatus !== authentication){
            navigate("/login")
        }else if(!authentication && authStatus !== authentication){
            navigate("/")
        }

        setLoader(false)
    }, [authStatus, navigate, authentication])//navigate, if user comes from navigating


  return loader ? <h1>Loading...</h1> : <>{children}</>// if loader true Loading..., else {children} 
}

// import React, {useState, useEffect} from 'react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'


// const Protected = ({children}) => {
//     const [loader, setLoader] = useState(true)
//     const navigate = useNavigate()
//     const authentication= useSelector((state)=> state.auth.status)

//     useEffect(()=>{
//         if(authentication= true){
//             navigate('/')
//         } else if(authentication= false){
//             navigate('/login')
//         }
//         setLoader(false)
//     },[authentication, navigate])
//   return (
//     loader ? <h1>Loading...</h1> : <>{children}</>
//     )
  
// }

// export default Protected

        //TODO: make it more easy to understand

        // if (authStatus ===true){
        //     navigate("/")
        // } else if (authStatus === false) {
        //     navigate("/login")
        // }
        
        //let authValue = authStatus === true ? true : false

