import { MovieInfoStyles } from './Styles/MovieInfoStyles'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { MovieContext } from '../Context/AppContext'
import { getMovieApiCall } from '../MicroServiceApiCalls/GetApiCall'
import { key } from '../Utils/TMDBkey'
import { Button } from '../Button/Button'
import ApiErrorPage from '../ApiErrorPage/ApiErrorPage'
import millify from 'millify'
import {MdSlowMotionVideo} from 'react-icons/md'
import {AiOutlineVideoCameraAdd} from 'react-icons/ai'
import Popup from '../Popup/Popup'
import { postJwtApiCall } from '../MicroServiceApiCalls/PostApiCall'

const MovieInfo = () => {
  const{movieData} = useContext(MovieContext)
  const{setMovieData} = useContext(MovieContext)
  const [loader,setLoader] = useState(false)
  const [addMovieResults,setAddMovieResults] = useState('')
  const [addMovieError,setAddMovieError] = useState(null)
  const {value} = useContext(MovieContext)
  const {movieError} = useContext(MovieContext)
  const {setMovieError} = useContext(MovieContext)
  const [popup,setPopup] = useState(false)
  const {id} = useParams()
  const navigate = useNavigate()
  const url = 'https://movieplus-server.herokuapp.com/api/account/savemovies'
  useEffect(()=>{
    if(!movieData){
      
      getMovieApiCall(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,setMovieData,setMovieError)
    }else if(movieData && movieData.id !== id){
      
      getMovieApiCall(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`,setMovieData,setMovieError)
    }
  },[])
  const addMovie =(movieData)=>{
    let data = {
      title: movieData.title,
      release_date: movieData.release_date,
      runtime: movieData.runtime,
      tmdb_id: movieData.id
    }
    setLoader(true)
    postJwtApiCall(url,data,setAddMovieError,setAddMovieResults,setLoader,value)
    setPopup(true)
  }
  return (
    <MovieInfoStyles>
      {popup && addMovieResults &&<div className="popup">
        <Popup confirmation={addMovieResults} close={setPopup}/>
      </div>}
      {popup && addMovieError &&<div className="popup">
        <Popup confirmation={`Network Error: Could not add this movie to your movielist`} close={setPopup}/>
      </div>}
      { movieData && <div className="InfoCard">
        <div className="container">
          <div className="poster">
            <img src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`} alt='poster' />
          </div>
          <div className="details">
            <div className="descr">
              <div className="title">{movieData.title}</div>
            </div>
            <div className="descr">
              <span>Overview</span>
              <div className="overview">{movieData.overview}</div>
            </div>
            <div className="descr">
              <span>Tagline</span>
              <div className="tagline">{movieData.tagline}</div>
            </div>
            <div className="descr">
              <span>Genres</span>
              <div className="genre">
              {movieData.genres.map((genre,index)=>(
                <div className="genre"key={index}>
                  <p>{genre.name}</p>
                </div>
              ))}
              </div>
            </div>
            <div className="characteristics">
              <div className="info">
                <p>Budget</p>
                <span >{`$${millify(movieData.budget)}`}</span>
              </div>
              <div className="info">
                <p>Revenue</p>
                <span >{`$${millify(movieData.revenue)}`}</span>
              </div>
              <div className="info">
                <p>Release Date</p>
                <span >{`${movieData.release_date}`}</span>
              </div>
              <div className="info">
                <p>Runtime</p>
                <span >{`${movieData.runtime} mins`}</span>
              </div>
              <div className="info">
                <p>Popularity</p>
                <span >{`${movieData.popularity}`}</span>
              </div>
              
              <div className="info">
                <p>Homepage</p>
                <span >
                  <a href={movieData.homepage} target="_blank" rel='noreferrer'>
                  {movieData.homepage?`${movieData.homepage.substring(0,20)}...`:null}
                  </a>
                </span>
              </div>
            </div>
            <div className="production">
              <span>Production Companies</span> 
              <div className={movieData.production_companies.length > 1 ? 'card':'card2'}>
                {movieData.production_companies.map((company,index)=>(
                  <div className="company"key={index}>
                    <div className="name">{company.name}</div>
                  </div>
                ))}
              </div>
              
            </div>
          </div>
        </div>
        <div className="videos">
          <Button onClick={()=>navigate(`/video/${movieData.title}--trailer`)}>
            <MdSlowMotionVideo color='white' size={19}/>
            <span>Watch trailer</span> 
          </Button>
          <Button onClick={()=>navigate(`/video/${movieData.title}--review`)}>
            <MdSlowMotionVideo color='white' size={19}/>
            <span>Watch Reviews</span> 
          </Button>
          <Button onClick={()=>addMovie(movieData)}>
            <AiOutlineVideoCameraAdd color='white' size={19}/>
            <span>{loader?'Loading...':'Add to MyMovies'}</span> 
            </Button>
        </div>
      </div>}
      {movieError && !movieData && <ApiErrorPage error={movieError}/>}
    </MovieInfoStyles>
  )
}

export default MovieInfo