import React from 'react'
import ActorBio from './ActorBio'
import ActorMovies from './ActorMovies'
import { ActorStyles } from './Styles/ActorStyles'

const Actor = () => {
  return (
    <ActorStyles>
      <div className="cover">
       <ActorBio/>
      </div>
      <div className="movie-list-actor">
        <ActorMovies/>
      </div>
    </ActorStyles>
      
    
  )
}
export default Actor