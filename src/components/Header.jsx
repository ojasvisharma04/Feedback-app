import React from 'react'
import PropTypes from 'prop-types'

function Header({text, bgColor, textColor}) {

    const headerStyle={
        backgroundColor:bgColor,
        color:textColor
    }
    return (
        <header style={headerStyle}>
            <div className='container'>
                <h2>{text}</h2>      
            </div>
        </header>
        
    )
}

Header.defaultProps={
    text:'FeedBack UI',
    textColor:'#ff6a95',
    bgColor:'rgba(0,0,0,0.4)'
}

Header.propTypes={
    text: PropTypes.string,
}

export default Header
