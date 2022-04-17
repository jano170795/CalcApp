import PropTypes from 'prop-types'
import React from 'react'
import './Button.css'

const Button = ({text, type, clickHandler}) => (     
            
        <button className={type} onClick={() =>{            
            clickHandler(text)
        }} >
            {text}
        </button>        
)

Button.propTypes = {
    text: PropTypes.string.isRequired,
    //type: PropTypes.string.isRequired,
    clickHandler: PropTypes.func.isRequired
}

export default Button