import React, { useContext, useEffect, useState } from 'react'
import ApiErrorPage from '../ApiErrorPage/ApiErrorPage'
import Spinner from '../Spinner/Spinner'
import { MyMoviesStyles } from './MyMoviesStyles'
import  {MdMovie} from 'react-icons/md'
import {AiFillDelete}from 'react-icons/ai'
import { MovieContext } from '../Context/AppContext'
import { useNavigate } from 'react-router-dom'
import { getApiCallAuth } from '../MicroServiceApiCalls/GetApiCall'
import { DeleteApiCall } from '../MicroServiceApiCalls/DeletApiCall'
import { Button } from '../Button/Button'

const MyMovies = () => {
  const url = 'https://movieplus-server.herokuapp.com/api/account/movies'
  const [movies,setMovies]= useState('')
  const [error,setError] = useState('')
  const [loader,setLoader] = useState(true)
  const [onDelete,setOnDelete] = useState('')
  const{value} = useContext(MovieContext)
  const navigate = useNavigate()
  useEffect(()=>{
    setOnDelete('')
    getApiCallAuth(url,setMovies,setError,setLoader,value)
  },[onDelete])
  const deleteItem = (id)=>{
    setLoader(true)
    setMovies('')
    setError('')
    DeleteApiCall(`https://movieplus-server.herokuapp.com/api/account/movie/${id}`,value,setOnDelete,setError,setLoader)
  }
  const movieInfo = (id)=>{
    
    navigate(`/movie/${id}`)
  }
  return (
    <MyMoviesStyles>
      <h2>My Movies </h2>
      {movies &&!error && !loader && 
        movies.map((movie)=>(
          <div className="movies-list" key={movie.tmdb_id} >
            <div className="movie">
              <span className='description'>Title</span>
              <span>{movie.title}</span>
            </div>
            <div className="movie">
              <span className='description'>Release Date</span>
              <span>{movie.release_date}</span>
            </div>
            <div className="movie">
              <span className='description'>Runtime</span>
              <span>{`${movie.runtime} mins`}</span>
            </div>
            
            <div className="btn">
              <Button onClick={()=>movieInfo(movie.tmdb_id)}>
                <MdMovie  size={19}/>
                <span>More Movie Details</span>
              </Button>
              <Button onClick={()=>deleteItem(movie.id)}>
                <AiFillDelete color='white' size={19}/>
                <span>Delete</span> 
              </Button>
            </div>
          </div>
        ))
      }
      {!movies && !error && loader && <Spinner/>}
      {!movies && error && !loader && <ApiErrorPage error={'Network Error: Sorry could not fetch your movies'}/>}
    </MyMoviesStyles>
  )
}

export default MyMovies