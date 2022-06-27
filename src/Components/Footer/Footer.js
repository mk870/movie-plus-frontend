import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterStyles } from './FooterStyles'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <FooterStyles>
      <div className="info">
        <div className="name">
          <span className='one'>Movie</span>
          <span className='two'>Plus</span>
        </div>
        <span>All Rights Reserved</span> 
      </div>
      <div className="links">
        <span onClick={()=>navigate('/')}>Home</span>
        <span onClick={()=>navigate('/mymovies')}>MyMovies</span>
        <span onClick={()=>navigate('/login')}>Login</span>
      </div>
    </FooterStyles>
  )
}

export default Footer