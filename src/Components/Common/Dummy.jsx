import React from 'react'
import underDevelopment from '../../assets/images/UnderDevelopment.svg'
import Datepicker from './Datepicker';

const Dummy = () => {
  
  console.log(`In Dummy`);

  return (
    <div className='error-container_image center'>
      {/* <img src={underDevelopment} alt='Under Development' /> */}
      <Datepicker/>
    </div>
  )
}

export default Dummy