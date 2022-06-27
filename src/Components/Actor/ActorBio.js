import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../Context/AppContext'
import { ActorBioStyles } from './Styles/ActorBioStyles'
import { key } from '../Utils/TMDBkey'
import ApiErrorPage from '../ApiErrorPage/ApiErrorPage'
import PersonalInfo from './PersonalInfo'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

const ActorBio = () => {
  const {actorId} = useContext(MovieContext)
  const {setActorId} = useContext(MovieContext)
  const {name} = useParams()
  const[bio,setBio] = useState('')
  const [bioError,setBioError]= useState('')
  const [loader,setLoader] =useState(true)
  const url = `https://api.themoviedb.org/3/person/${actorId}?api_key=${key}&language=en-US`
  useEffect(()=>{
    axios.get(url)
    .then((data)=>{
      setBio(data.data)
      setBioError('')
      setLoader(false)
    })
    .catch((e)=>{
      setBioError(e.massege)
      setLoader(false)
      
    })
    return(()=>{
      setActorId('')
    })
  },[])
  return (
    <ActorBioStyles>
      {bio && !bioError && !loader && <div className='bio'>
      <h3>{`${name} Personal Information`}</h3>
        <div className="picture-personalInfo">
          <img src={`https://image.tmdb.org/t/p/w500/${bio.profile_path}`} alt="profile-pic" />
          <PersonalInfo name={name} bio={bio}/>
        </div>
        
        <div className="bio-data">
          <div className="bio-descr">Biography</div>
          <div className="bio-info">{bio.biography}</div>
        </div>
      </div>}
      {bioError !=='' && !loader && <ApiErrorPage error={`Network Error: failed to fetch ${name}'s bio`}/>}
      {loader && <Spinner/>}
    </ActorBioStyles>
  )
}

export default ActorBio