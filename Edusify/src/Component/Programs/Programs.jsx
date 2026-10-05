import React from 'react'
import './Programs.css'
import jakob from '../../assets/jakob.jpg'
import memo from '../../assets/memo.jpg'
import ryan from '../../assets/ryan.jpg'
import { LuGraduationCap, LuAward, LuScrollText } from 'react-icons/lu'

const Programs = () => {
  return ( 
    <div className='programs'>
      <div className="program">
        <img src={jakob} alt='' />
        <div className="caption">
          <LuGraduationCap />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className="program">
        <img src={ryan} alt='' />
        <div className="caption">
          <LuAward />
          <p>Masters Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={memo} alt='' />
        <div className="caption">
          <LuScrollText />
          <p>Post Graduation</p>
        </div>
      </div>
    </div>
  )
}

export default Programs