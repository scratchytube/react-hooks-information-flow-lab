import React from 'react'

const Header = ( { onDarkModeClick, darkModeState } ) => {

    return(
        <header>
            <h2>Shopster</h2>
                <button onClick={onDarkModeClick}>
                    { darkModeState ? "Dark" : "Light"} Mode
                </button>
        </header>
    
    )

}

export default Header