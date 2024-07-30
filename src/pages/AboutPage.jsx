import React from 'react'
import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
        <div className='about'>
            <h3>About Page</h3>
            <p>This is the app where you can leave your feedback. </p>
            <p>
                <Link to='/'>Go to Home Page</Link>
            </p>
        </div>
    </Card>
  )
}

export default AboutPage
