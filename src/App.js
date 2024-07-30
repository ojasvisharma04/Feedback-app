import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import FeedbackItem   from "./components/FeedbackItem";
import FeedbackData from "./data/FeedbackData";
import FeedbackList from "./components/FeedbackList"
import FeedBackStats from "./components/FeedBackStats";
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import moduleName from './components/AboutLink'
import AboutLink from './components/AboutLink';
import { FeedbackProvider } from './context/FeedbackContext'

function App(){
  return(
    <FeedbackProvider>
      <Router>
        <Header />
        <div className='container'>
          <Routes>
            <Route exact path='/' element={
              <>
              <FeedbackForm />
              <FeedBackStats />
              <FeedbackList />
              </>
            }            
            ></Route>
            <Route path='/about' element={<AboutPage />} />           
          </Routes>
          <AboutLink />     
        </div>
      </Router>
    </FeedbackProvider>
  )
}

export default App;
