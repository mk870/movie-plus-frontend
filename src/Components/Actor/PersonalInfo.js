
import React, { useContext, useState } from 'react'
import { PersonalInfoStyles } from './Styles/PersonalInfoStyles'
import {IoMdPersonAdd} from 'react-icons/io'
import { Button } from '../Button/Button'
import { MovieContext } from '../Context/AppContext'
import Popup from '../Popup/Popup'
import { postJwtApiCall } from '../MicroServiceApiCalls/PostApiCall'
import { useNavigate } from 'react-router-dom'

const PersonalInfo = ({name,bio}) => {
  const [loader,setLoader] = useState(false)
  const [addActorResults,setAddActorResults] = useState('')
  const [addActorError,setAddActorError] = useState(null)
  const {value} = useContext(MovieContext)
  const [popup,setPopup] = useState(false)
  const navigate = useNavigate()
  const url = 'https://movieplus-server.herokuapp.com/api/account/saveactors'
  const genderCalculator =(num)=>{
    if(num === 1){
      return 'Female'
    }else if(num === 2) return 'Male'
    else if(!num) return 'no data'
  }
  const addActor = actorBio=>{
    if(value){
      let data = {
        name: actorBio.name,
        gender: genderCalculator(actorBio.gender),
        birthday: actorBio.birthday,
        birth_place: actorBio.place_of_birth,
        age: ageCalulator(actorBio.birthday),
        tmdb_id: actorBio.id
      }
      
      setLoader(true)
      postJwtApiCall(url,data,setAddActorError,setAddActorResults,setLoader,value)
      setPopup(true)
    }else{
      navigate('/login')
    }
    
  }
  const ageCalulator = (dateString)=>{
    if(dateString){
      let today = new Date();
      let birthDate = new Date(dateString);
      let age = today.getFullYear() - birthDate.getFullYear();
      let m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
      {
          age--;
      }
      return age;
    }
    return 'no data'
  }
  return (
    <PersonalInfoStyles>
      
      <h3>{bio.name}</h3>
      <div className='info'>
      {popup && addActorResults && <div className="popup">
      <Popup confirmation={addActorResults} close={setPopup}/>
        </div>}
        {popup &&  addActorError && <div className="popup">
      <Popup confirmation={`Network Error: could not add ${bio.name} to your actors list`} close={setPopup}/>
        </div>}
        <div className="detail">
          <span className='descr-data'>Name:</span>
          <span className='data'>{bio.name}</span>
        </div>
        
        <div className="detail">
          <span className='descr-data'>Gender:</span>
          <span className='data'>{genderCalculator(bio.gender)}</span>
        </div>
        <div className="detail">
          <span className='descr-data'>Birthday:</span>
          <span className='data'>{bio.birthday}</span>
        </div>
        <div className="detail">
          <span className='descr-data'>Age:</span>
          <span className='data'>{ageCalulator(bio.birthday)}</span>
        </div>
        <div className="detail">
          <span className='descr-data'>Place of Birth:</span>
          <span className='data'>{bio.place_of_birth}</span>
        </div>
        <div className="detail">
          <span className='descr-data'>Homepage:</span>
          <a href={bio.homepage} target="_blank" rel='noreferrer'>
            <span className='data-link'>
            {bio.homepage?`${bio.homepage.substring(0,15)}...`:null}
            </span>
          </a>
        </div>
        
        <div className="detail">
          <span className='descr-data'>Life Status:</span>
          <span className='data'>{!bio.deathday?'Alive':'deceased'}</span>
        </div>
        
      </div>
      <div className="btn">
          <Button onClick={()=>addActor(bio)}>
            <IoMdPersonAdd color='white' size={19}/>
            <span>{loader?'Loading...':'Add To MyActors'}</span> 
          </Button>
        </div>
    </PersonalInfoStyles>
  )
}

export default PersonalInfo