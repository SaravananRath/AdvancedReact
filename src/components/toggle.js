import React, { useState} from 'react'

const Toggle = props => {
    const [isVisible, toggle] = useState(false)
    const { render } = props;
    return (
        <div>
            {render({
                isVisible,
                toggle,
            })}
        </div>
    )
}

export default Toggle