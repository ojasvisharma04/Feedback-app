import React from 'react'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'


function FeedBackStats() {
  const {feedback}=useContext(FeedbackContext)

    let average = feedback.reduce((acc,curr) =>{
        return acc + curr.rating
    },0) / feedback.length

    average=average.toFixed(1).replace(/[.,]0$/,'')

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average is {isNaN(average)? 0 : average}</h4>
    </div>
  )
}

FeedBackStats.propTypes={
  feedback:PropTypes.array.isRequired,
}

export default FeedBackStats
