import React from 'react'
import PropTypes from 'prop-types'

const Result = ({value}) => (   
    <section className="result">
        {value}   
    </section>
)

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaultProps = {
    value : "0"
}

export default Result