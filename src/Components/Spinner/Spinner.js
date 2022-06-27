import React from 'react'
import { SpinnerStyles } from './SpinnerStyles'
import { ThreeDots } from  'react-loader-spinner'

const Spinner = () => {
  return (
    <SpinnerStyles>
      <ThreeDots
        height="200"
        width="200"
        color="#00BFFF"
        ariaLabel='loading'
      />
    </SpinnerStyles>
  )
}

export default Spinner