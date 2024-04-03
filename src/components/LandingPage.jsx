import React from 'react'
import { useNavigate } from 'react-router-dom';
import hero from '../images/Hero.svg'

const LandingPage = () => {
    const navigate = useNavigate();

    const goToSplitPage = () => {
        navigate('/split')
    }
  return (
    <div className='lp'>
      <div className='main'>
        <div className="hero">
            <img src={hero}/ alt="hero">
        </div>
        <div className='text-p'>
            <p>Streamline bill splitting with ease. Our app simplifies sharing expenses among friends, ensuring fairness and simplicity. Enjoy moments together without the hassle.</p>
        </div>
        <div className='btn'>
            <button onClick={goToSplitPage}>Try it Now!</button>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
