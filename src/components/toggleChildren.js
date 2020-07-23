import React, { useState} from 'react'

const Toggle = props => {
    const [isVisible, toggle] = useState(false)
    const { children } = props;
    return (
        children({
            isVisible,
            toggle,
        })
    )   
}

export default Toggle