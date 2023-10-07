import React, { useState } from 'react'

const Auth = (props) => {
    console.log(`In Auth`);

    // TODO: Add Auth
    const [isAuthorized, setIsAuthorized] = useState(true)

    return (
        props.children
    )
}

export default Auth