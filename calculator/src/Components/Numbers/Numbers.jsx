import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Render/Button/Button'
import {numbers} from '../../Shared/data'

const renderButtons = onClickNumber => {

  return (numbers.map((number,index) =>{
    return (
        <Button key={index} text={number.toString()} clickHandler={onClickNumber} />
      )
    })
  )
}

const Numbers = ({onClickNumber}) => {
  return (
      <section className='numbers'>
        {
          renderButtons(onClickNumber)
        }
      
      </section>
    

  )
}


Numbers.propTypes = {
  onClickNumber: PropTypes.func.isRequired
}

export default Numbers