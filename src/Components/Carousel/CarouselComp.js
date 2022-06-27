import React, { useContext, useEffect, useState } from 'react'
import { MovieContext } from '../Context/AppContext'
import { CarouselStyles } from './CarouselStyles'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { key } from '../Utils/TMDBkey'
import { useNavigate } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import ApiErrorPage from '../ApiErrorPage/ApiErrorPage'

const movieIds = [616037,634649,507086,615904,522016,335787,414906,675353,526896,639933,453395,361743]
const CarouselComp = () => {
  const{recentMovies} = useContext(MovieContext)
  const{setRecentMovies} = useContext(MovieContext)
  const [error,setError] = useState('')
  const [currentSlide,setCurrentSlide] = useState(0)
  const navigate = useNavigate()
  useEffect(() => {
    if(!recentMovies.length){
      const moviePromises = movieIds.map(id =>
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`)
          .then(response => {
          if(!response.ok){
            throw Error('Could not fetch data please check your network connection')
          }else{
            return response.json()
          }
          })
          
      );
      Promise.all(moviePromises)
        .then(data => { 
          setRecentMovies(...recentMovies,data) 
          
        })

        .catch(e =>{
          setError(e.message)
        })
    }
  }, [])
  let slideInterval
  let movieTotal
  if(recentMovies){
    movieTotal = recentMovies.length - 1
  }

  useEffect(()=>{
    setCurrentSlide(0)
  },[])

  const nextSlide = ()=>{
    if (currentSlide === movieTotal) {
      setCurrentSlide(0)
    }else{
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = ()=>{
    if(currentSlide === 0){
      setCurrentSlide(movieTotal)
    }else{
      setCurrentSlide(currentSlide - 1)
    }
  }

  const auto = ()=>{
    slideInterval = setInterval(nextSlide, 4000);
  }

  useEffect(()=>{
    auto()
    return ()=> clearInterval(slideInterval)
  },[currentSlide])
  
  return (
    <CarouselStyles>
      <div className="preview">
        <h2>Latest Movies</h2>
        <p>Check out the latest Hollywood block busters</p>
      </div>
    {recentMovies && !error &&<><div className="slidercontent">
        <AiOutlineArrowLeft className='arrow prev' onClick={prevSlide} />
        {recentMovies.map((movie, index) => (
          <div className={currentSlide === index ? 'current' : 'slide'}>
            {currentSlide === index && <div className="card" onClick={()=>navigate(`/movie/${movie.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              
            </div>}
          </div>
        ))}
        <AiOutlineArrowRight className='arrow next' onClick={nextSlide} />
      </div></>}
      {recentMovies && !error &&
        <div className="newmoviesGrid">
          <span>Click for more Movie info</span>
          <div className="grid">
          {recentMovies.map((movie,index)=>(
            <div className="movie" key={index} onClick={()=>navigate(`/movie/${movie.id}`)}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
              
            </div>
          ))}
          </div>
        </div>
      }
      {!error && !recentMovies && <Spinner/>}
      {error && <ApiErrorPage error={error}/>}
      </CarouselStyles>
  )
}

export default CarouselComp