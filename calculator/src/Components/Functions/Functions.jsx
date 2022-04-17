import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Render/Button/Button'

const functions = ["Clear", '<--']

const renderButtons = (onContentClear, onDelete) => {
    return(
      functions.map((fun, index) => {
          return (
            <Button key={index} text={fun} type={fun === "Clear"? "button-long-text" : "button-special-text"}
              clickHandler={()=> {
                fun === "Clear"? onContentClear(fun): onDelete(fun)}
                } 
              />
          )  
      })
    )
}

const Functions = ({onContentClear, onDelete}) => {
  return (
    <section className="functions">
        {
          renderButtons(onContentClear, onDelete)
        }
    </section>      
    
  )
}
Functions.propType = {
    onContentClear: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default Functions