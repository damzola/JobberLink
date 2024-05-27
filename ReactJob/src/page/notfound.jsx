
// import React from 'react'
import { Link } from 'react-router-dom'
import {FaExclamationTriangle } from 'react-icons/fa'
import '../Style/style.css'


const notfound = () => {
  return (
    <div className='container-fluid bg-dark'>
        <div className='card m-auto justify-content-center text-bg-dark'>
            <div className='card-header '>
                <h1>Invalid input page</h1>
            </div>
            <div className='card-body text-center '>
                <span>
            < FaExclamationTriangle id='anim'  />
            </span>

                <h2 className='text-warning'>Error:404 Page not found</h2>
            </div>
            <div className='card-footer'>
                <p>
                    Go back to the home <Link as={Link} to="/" >Page</Link>
                </p>
            </div>
        </div>

    </div>
  )
}

export default notfound
