import React from 'react'
import { ApiErrorPageStyles } from './ApiErrorPageStyles'

const ApiErrorPage = ({error}) => {
  return (
   <ApiErrorPageStyles>
     <h2>{error}</h2>
   </ApiErrorPageStyles>
    
  )
}

export default ApiErrorPage