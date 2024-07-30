import React, { useContext, useEffect } from 'react'
import Card from './shared/Card'
import { useState } from 'react'
import Button from './shared/Button'
import RatingSelct from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {

    const [text, setText] = useState('')
    const [rating, setRating]=useState(10)
    const [btnDisabled, setBtnDisabled]= useState(true)
    const [message, setMessage] =useState('')
    const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
      if (feedbackEdit.isEdit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
      }
    },[feedbackEdit])

    const handleTextChange=(e)=>{
        if(text===''){
          setBtnDisabled(true)
          setMessage(null)
        }
        else if(text!=='' && text.trim().length <10 ){
          setBtnDisabled(true)
          setMessage('Message should be atleast 10 characters.')
        }
        else{
         
          setBtnDisabled(false)
          setMessage(null)
        }
        setText(e.target.value)
    }

    const handleSubmit= (e) => {
      e.preventDefault()
      if(text.trim().length > 10){
        const newFeedback={
          text,
          rating,
      }

      if(feedbackEdit.isEdit === true)
      {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      }
      else{
        addFeedback(newFeedback)
      }

      setText('')
    }
    }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <RatingSelct select={(rating)=> setRating(rating)} />
        <h2>How would you rate your experience with us?</h2>
        <div className='input-group'>
            <input 
            onChange={handleTextChange} 
            type='text'  
            placeholder='Write a review'
            value={text} />
            <Button type='submit' isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
