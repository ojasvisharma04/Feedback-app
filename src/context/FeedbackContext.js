import {createContext, useState, useEffect} from 'react'

const FeedbackContext= createContext()
export const FeedbackProvider = ({children}) =>{
    const [isLoading, setIsLoading]=useState(true)
    const [feedback, setFeedback]= useState([])
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        isEdit: false
    })

    useEffect(() => {
        fetchFeedback()
    }, [])

    //Fetch Feedback

    const fetchFeedback = async() => {
        const response= await fetch(`/feedback?_sort=id&_order=desc`)
        const data= await response.json()
        setFeedback(data)
        setIsLoading(false)
    }


    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            isEdit : true,
        })
     }

     const updateFeedback = async(id, updItem) =>{
        const response = await fetch(`/feedback/${id}`,{
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(updItem)
        } )

        const data = await response.json()
        setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
     }

     
     // Delete Feedback
    const deleteFeedback= async(id)=>{
        fetch(`/feedback/${id}`, {method: 'DELETE'})

        if(window.confirm('Are you sure you want to delete?')){
          setFeedback(feedback.filter((item)=> item.id!==id))
        }    
      }

      //Add feedback
      const addFeedback= async(newFeedback) => {
        const response = await fetch('/feedback', {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body : JSON.stringify(newFeedback),
        })

        const data=await response.json()
        setFeedback([data, ...feedback])
      }      

    return (
        <FeedbackContext.Provider value={{
            feedback,
            deleteFeedback,
            isLoading,
            addFeedback,
            editFeedback,
            feedbackEdit,
            updateFeedback,
        }}>
            {children}
        </FeedbackContext.Provider>
    )
}

export default FeedbackContext

