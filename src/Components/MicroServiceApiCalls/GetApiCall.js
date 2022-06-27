import axios from 'axios'


export const getApiCall = (url,setSearchResults,setSearchError,setLoader)=>{
  axios.get(url)
  .then(data =>{
    setSearchResults(data.data)
    setSearchError('')
    setLoader(false)
    
  })
  .catch(e =>{
    setSearchError(e.message)
    setLoader(false)
  })
}

export const getMovieApiCall = (url,setSearchResults,setSearchError)=>{
  axios.get(url)
  .then(data =>{
    setSearchResults(data.data)
    setSearchError('')
    
  })
  .catch(e =>{
    setSearchError(e.message)
  })
}

export const getActorsApiCall = (url,setSearchResults,setSearchError,setLoader)=>{
  axios.get(url)
  .then(data =>{
    setSearchResults(data.data.cast.slice(0,12))
    setLoader(false)
    
  })
  .catch(e =>{
    setSearchError(e.message)
    setLoader(false)
  })
}

export const getReviewsApiCall = (url,setReviewsData,setSearchError,setLoader)=>{
  axios.get(url)
  .then(data =>{
    setReviewsData(data.data.results.slice(0,8))
    setSearchError('')
    setLoader(false)
    
  })
  .catch(e =>{
    setSearchError(e.message)
    setLoader(false)
  })
}

export const getVerificationApiCall = (url,setData,setError,setLoader,setValue)=>{
  axios.get(url)
  .then(data =>{
    setData(data.data.response)
    setValue(data.data.jwt)
    setError(null)
    setLoader(false)
    
  })
  .catch(e =>{
    setError(e.message)
    setLoader(false)
  })
}

export const getApiCallAuth = (url,setSearchResults,setSearchError,setLoader,jwt)=>{
  axios.get(url,{headers:{"Authorization" : `Bearer ${jwt}`}})
  .then(data =>{
    setSearchResults(data.data)
    setSearchError('')
    setLoader(false)
    
  })
  .catch(e =>{
    setSearchError(e.message)
    setLoader(false)
  })
}