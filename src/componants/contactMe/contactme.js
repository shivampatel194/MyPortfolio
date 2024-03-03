import React from 'react'
import './contactme.css' 



const contactme = () => {
  return (
    <div>
        <div className='contactMeBox'>
      <h1 className='contactMe'>Contact Me</h1>
      </div>
      <div className='fields'>
        <div className='fieldBox'>
            
        <input type="text" className='fieldBar' placeholder="Enter your name" />

        <input type="text" className='fieldBar' placeholder="Enter your messege" />

        <textarea rows="6" cols="70" className='fieldBar' placeholder="Enter your text" />


        <button className='submitBtn'> Submit</button>

        </div>

        

      </div>
    </div>
  )
}

export default contactme
