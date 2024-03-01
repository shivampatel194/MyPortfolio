import React from 'react'
import './intro.css'
import sam from '../../assets/sam.png'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <p className='hello'> Hello,</p>
            <span className='introText'>I'm <span className='introName'>Shivam Patel</span></span>
            <p className='introPara'>  I specialize in crafting seamless and responsive web applications, leveraging the power of MongoDB, Express.js, React, and Node.js.</p>
            <Link>
            <button className='hireBtn'>Hire me</button>
            </Link>
        </div>
        <img src={sam} alt='sam' className='profileImg'></img>
    </section>
  )
}

export default Intro