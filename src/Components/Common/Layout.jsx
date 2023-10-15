import React from 'react'
import NavBar from './NavBar';

const Layout = (props) => {
  console.log(`In Layout`);

  // TODO: Add Layout
  
  return (
    <>
      <NavBar/>
      {
        props.children
      }
    </>
  )
}

export default Layout