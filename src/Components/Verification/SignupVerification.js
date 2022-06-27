import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ApiErrorPage from '../ApiErrorPage/ApiErrorPage'
import { MovieContext } from '../Context/AppContext'
import { getApiCall, getVerificationApiCall } from '../MicroServiceApiCalls/GetApiCall'
import Spinner from '../Spinner/Spinner'
import { SignupVerificationStyles } from './SignupVerificationStyles'

const SignupVerification = () => {
  const [apiData,setApiData] = useState('')
  const [error,setError] = useState(null)
  const [loader,setLoader] = useState(true)
  const {setValue} = useContext(MovieContext)
  const {token} = useParams()
  const url = `https://movieplus-server.herokuapp.com/api/verifyRegistration?token=${token}`
  useEffect(()=>{
    getVerificationApiCall(url,setApiData,setError,setLoader,setValue)
  },[])
  return (
    <SignupVerificationStyles>
      {loader && !error && !apiData && <Spinner/>}
      {!loader && error && !apiData && <ApiErrorPage error={"Network error: sorry couldnot verify your account"}/>}
      {!loader && !error && apiData && <h2>{apiData}</h2>}
    </SignupVerificationStyles>
  )
}

export default SignupVerification