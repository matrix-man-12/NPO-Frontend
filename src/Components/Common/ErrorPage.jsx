import React from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import error404 from '../../assets/images/error404.svg'

const ErrorPage = (props) => {

  return (
    <div className='error-container'>
      <div className='error-container-info'>
        <h1>So Sorry!</h1>
        <h2>The page you are looking for cannot be found </h2>
        <div className='error-container-issues'>
          <span> Possible Reasons</span>
          <ul>
            <li>The address may have been typed wrong</li>
            <li>This link may be outdated or broken</li>
          </ul>
        </div>
        <span style={{marginTop: 30}}>What have you decided ?</span>
        <div className='error-container-buttons'>
          <Button variant="contained" className='error-container-button-1' component={Link} to='/home'>
            Take me to Home Page
          </Button>
          <Button variant="outlined" className='error-container-button-2' component={Link} to='/contact-us'>
            Get some help
          </Button>
        </div>
      </div>
      <div className='error-container_image'>
        <img src={error404} alt='Not Found' />
      </div>
    </div>
  )
}

export default ErrorPage