import React, { useContext, useEffect, useState } from 'react'
import CarouselComp from '../Carousel/CarouselComp'
import {HomeStyles} from './HomeStyles'
import { Button } from '../Button/Button'
import { postApiCall } from '../MicroServiceApiCalls/PostApiCall'
import Spinner from '../Spinner/Spinner'
import axios from 'axios'
import { MovieContext } from '../Context/AppContext'
import Recommendations from './Recommendations'


const Home = () => {
  const [movieSearch,setMovieSearch] = useState('')
  const [searchResults,setSearchResults] = useState('')
  const [searchError,setSearchError] = useState('')
  const {recommendationSearchError} = useContext(MovieContext)
  const {setRecommendationSearchError} = useContext(MovieContext)
  const [suggestionLoader,setSuggestionLoader] = useState(false)
  const{recommendLoader} =useContext(MovieContext)
  const{setRecommendLoader} = useContext(MovieContext)
  const{recommendedMovies} = useContext(MovieContext)
  const{setRecommendedMovies} = useContext(MovieContext)
  //https://movie-recommandation-api.herokuapp.com
  //http://movie-env.eba-y5uppbmw.us-east-1.elasticbeanstalk.com/
  const search = (movie)=>{
    if(movieSearch){
      let message = {
        movie_entered: movie
      };
  
      setRecommendedMovies('')
      setRecommendationSearchError('')
      setRecommendLoader(true)
      let CancelToken = axios.CancelToken;
      let source = CancelToken.source();
      postApiCall('https://movie-recommandation-api.herokuapp.com/recommend1',message,setRecommendationSearchError,setRecommendedMovies,setRecommendLoader,source)
      setMovieSearch('')
    }
    
    
  }
  
  useEffect(()=>{
    let CancelToken = axios.CancelToken;
    let source = CancelToken.source()
    if(movieSearch){
      setSuggestionLoader(true)
      setSearchError('')
      let data = {
        letter: movieSearch
      }
      
      postApiCall('http://movie-env.eba-y5uppbmw.us-east-1.elasticbeanstalk.com/movies',data,setSearchError,setSearchResults,setSuggestionLoader,source)
    }else {
      setSearchResults('')
      setSearchError('')
      setSuggestionLoader(false)
    }
    return () => source.cancel()
  },[movieSearch])

  

  return (
    <HomeStyles>
      <div className="newMovies">
      <CarouselComp/>
      </div>
      <div className="search" onClick={()=>setSearchError('')}>
        <div className="search-input">
          <div className="search-bar">
            <input type="text" 
            value={movieSearch} spellcheck="false" placeholder='Enter a movie'
            onChange={(e)=>setMovieSearch(e.target.value)}/>
            {searchResults && searchResults.movie_list.length!==0 && !suggestionLoader  && <div className="suggestions">
              {searchResults.movie_list.map((suggestion,i)=>(
                <div className="list-item" key={i}onClick={()=>search(suggestion)}>
                  {suggestion}
                </div>
              ))}
            </div>}
            {searchResults && searchResults.movie_list.length===0 && !suggestionLoader && <div className='no-movies'>
              <h4>Sorry this movie does not exist in our collection please try searching another movie</h4>
            </div>}
            {suggestionLoader && <Spinner/>}
            {searchError &&  !searchResults && !suggestionLoader && <div className='error'>
              <h4>Sorry could not get suggestions from our library </h4>
              <p>please check your network</p>
            </div>}
          </div>
          <Button onClick={()=>search(movieSearch)}>{suggestionLoader?'loading...' :'Search'}</Button>
        </div>
      </div>
      {recommendedMovies && !recommendLoader && !recommendationSearchError && <Recommendations />}
      {!recommendedMovies && recommendLoader && !recommendationSearchError && <Spinner/>}
      {!recommendedMovies && !recommendLoader && recommendationSearchError && <div className='no-movies'>
        <h4>Sorry could not retrieve your recommendations please check your network</h4>
      </div>}
    </HomeStyles>
  )
}

export default Home