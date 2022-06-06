import React from 'react'
import { Link } from 'react-router-dom'
import Homepage from '../pages/Homepage'

function NotFound() {
  return (
    <div className="d-flex justify-content-left m-lg-5">
        <h4>No Page Found. Go to <Link to="/">Homepage</Link></h4>
    </div>
  )
}

export default NotFound