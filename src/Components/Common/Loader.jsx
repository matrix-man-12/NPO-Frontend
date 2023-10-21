import React from 'react'
import loader from '../../assets/images/loader.svg'

const Loader = () => {
  return (
    <div className='error-container_image center' style={{width: 100}}>
      <img src={loader} alt='Under Development' />
    </div>
  )
}

export default Loader