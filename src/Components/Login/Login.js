import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../Button/Button'
import { LoginForm } from '../FormContent/FormContent'
import Popup from '../Popup/Popup'
import { LoginStyles } from './LoginStyles'
import {AiOutlineLogin} from 'react-icons/ai'
import {RiLogoutCircleFill} from 'react-icons/ri'
import * as yup from 'yup';
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { MovieContext } from '../Context/AppContext'
import { postApiCall, postJwtApiCall } from '../MicroServiceApiCalls/PostApiCall'
import Spinner from '../Spinner/Spinner'
import ApiErrorPage from '../ApiErrorPage/ApiErrorPage'
import axios from 'axios'

const schema = yup
  .object()
  .shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(4)
  })
  .required();

const Login = () => {
  const [error,setError] = useState('')
  const [apiData,setApiData] = useState('')
  const [popup,setPopup] = useState(false)
  const [onload,setOnload] = useState(false)
  const {value} = useContext(MovieContext)
  const {setValue} = useContext(MovieContext)
  const navigate = useNavigate()
  const url = 'https://movieplus-server.herokuapp.com/api/login'
  const {register,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(schema),
  })

  useEffect(()=>{
    if (error) {
      setTimeout(()=>{
        setError('')
      },2500)
    }
    
  },[error])
  useEffect(()=>{
    if (apiData) {
      setValue(apiData.jwt)
    }
  },[apiData])
  const submit = (userData) =>{
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source();
    setOnload(true)
    postApiCall(url,userData,setError,setApiData,setOnload,source)
    if(!error)setPopup(true)
    
  }
  return (
    <LoginStyles>
      {!onload && !error && <div className="card">
      {popup && apiData&&<Popup confirmation={apiData.response} close={setPopup}/>}
      <h2>Please Fill In Your Details</h2>
        <form className="form" onSubmit={handleSubmit(submit)}>
          {LoginForm.inputs.map((input,key) =>(
            <div className="wrapper" key={key}>
              <label htmlFor={input.name}>{input.label}</label>
              <input 
                placeholder={`please enter your ${input.name}`}
                type={input.type}
                {...register(input.name, { required: true })}
                />
              <p>{errors[input.name]?.message}</p>
            </div>
          ))}
          
          <div className="submit">
          {!value?<Button  type='submit'>
            <AiOutlineLogin size={19} color={'white'}/>
            <span>Login</span>
          </Button>:
          <Button onClick={()=>setValue(null)}>
            <RiLogoutCircleFill fontSize={19} color={'white'}/>
            <span>Logout</span>
          </Button>}
          {!value?<span className='link' onClick={()=>navigate('/signup')}>Create an Account</span>:null}
          </div>
        </form>
      </div>}
      {!error &&  onload && <div className="item"><Spinner/></div>}
      {error!='' && !onload && <div className="item"><ApiErrorPage error={'Network Error: Sorry could not log you in'}/></div>}
    </LoginStyles>
  )
}

export default Login