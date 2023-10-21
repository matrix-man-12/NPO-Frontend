import React, {Suspense} from 'react'

const CustomSuspense = (props) => {
    const {fallbackComponent, mainComponent} = props

    return (
        <Suspense fallback={fallbackComponent}>
            {mainComponent}
        </Suspense>
    )
}

export default CustomSuspense