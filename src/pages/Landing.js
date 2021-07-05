import React from 'react'

// Components
import Register from '../components/Register'

const Landing = () => {
  return (
    <>
    <div className="bg-film" style={{backgroundImage: "url('background1.png')"}}>
      <div className="text-center text-white movie-description">
        <h1 className="mb-3">Unlimited films, TV and more.</h1>
        <h2 className="mb-3">Watch anywhere. Cancel at any time.</h2>
        <h3 className="mb-3">Ready to watch? Enter your email to create or restart your membership</h3>
      <div>
        <Register />
      </div>
      </div>
    </div>
    </>
  )
}

export default Landing
