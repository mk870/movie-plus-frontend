import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { TwitterSentimentStyles } from './TwitterSentimentStyles'
import ReactWordcloud from 'react-wordcloud';
import Spinner from '../Spinner/Spinner';
import ApiErrorPage from '../ApiErrorPage/ApiErrorPage';



const TwitterSentiment = () => {
  const [loader,setLoader] = useState(true)
  const [error,setError] = useState('')
  const [sentiments,setSentiments] = useState('')
  const [noLiveTweets,setNoLiveTweets] = useState('')
  const [words,setWords] = useState('')
  const url = 'https://twitter-sentiment-ai.herokuapp.com/music'
  const{movie} = useParams()

  useEffect(()=>{
    
    let searchTerm = {
      search: movie
    }
    axios.post(url,searchTerm)
    .then(data =>{
     if(data.data.sentiments==='' && data.data.wordcloud ===''){
      setNoLiveTweets(data.data.error)
      console.log(data.data.error)
      setError('')
      setLoader(false)
     }else{
       setSentiments(data.data.sentiments)
       setWords(wordCleaner(data.data.wordcloud))
       setError('')
       setLoader(false)
       
     }
     
   })
   .catch(e =>{
     setError(e.message)
     setLoader(false)
     
   })
  },[])

  

  const wordCleaner = arr =>{
    const arr2 = []
    for (let i = 0; i < arr.length; i++) {
      arr2.push({text:arr[i],value:Number(((Math.random())*1000000).toFixed(0))})
    }
    return arr2
  }
  const size = [600,400]
  const msg = 'Sorry no one is currently tweeting about this movie, please try another movie'
  const sentimentcolor = (sentimentscore)=>{
    if(sentimentscore < 50){
      return 'red'
    }else if(sentimentscore >= 50 && sentimentscore < 75){
      return 'purple'
    }else{
      return 'green'
    }
  }
  return (
    <TwitterSentimentStyles colour={sentimentcolor(sentiments)}>
      {!words && !error && !sentiments && loader && !noLiveTweets && <Spinner/>}
      {words && !error && sentiments && !loader && !noLiveTweets && 
        <div className="container">
          <h2>{`${movie} Twitter Sentiments`}</h2>
          <p className='p-score'>
            <p className='present-score'>Current Twitter Sentiment Score is :</p> 
            <span className='score'>{`${sentiments}%`}</span>
          </p>
          <div className="cloud-wrapper">
            <span>{`What People are saying about ${movie}`}</span>
            <div className="cloud">
              <ReactWordcloud words={words} />
            </div>
          </div>
          
        </div>
        }
      {!words && !error && !sentiments && !loader && noLiveTweets && <ApiErrorPage error={msg} />}
      {!words && error && !sentiments && !loader && !noLiveTweets && <ApiErrorPage error={"Network error: Sorry could not fetch twitter sentiments"} />}
    </TwitterSentimentStyles>
  )
}

export default TwitterSentiment