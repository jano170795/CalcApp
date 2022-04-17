import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Render/Button/Button'

const operators = ["+", "-", "*", "/", "="]

const renderButtons = (onClickOperation, onClickEqual) => {    
    return (
        operators.map((operator,index) => {
            return (
                <Button key={index} text={operator} clickHandler={ ()=>{
                    operator === "="? onClickEqual(operator) : onClickOperation(operator)
                    }
                } />
            )
        })   
    )
}

const MathOperations = ({onClickOperation, onClickEqual}) => {

    return (
        <section className='math-operations'>
            {
                renderButtons(onClickOperation, onClickEqual)
            }
        </section>
    )
}

MathOperations.propTypes = {
    onClickOperation: PropTypes.func.isRequired,
    onClickEqual: PropTypes.func.isRequired
}

export default MathOperations