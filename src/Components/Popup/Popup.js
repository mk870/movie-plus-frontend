import React from 'react'
import { PopupStyles } from './PopupStyles'

const Popup = ({confirmation,close}) => {
  setTimeout(()=>{
    close(false)
  },5000)
  return (
    <PopupStyles>
      <h4>{confirmation}</h4>
    </PopupStyles>
  )
}

export default Popup