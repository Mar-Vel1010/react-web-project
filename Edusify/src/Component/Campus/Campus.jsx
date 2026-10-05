import React from 'react'
import './Campus.css'
import geo from '../../assets/geo.jpg'
import miz from '../../assets/miz.jpg'
import oko from '../../assets/oko.jpg'
import memo from '../../assets/memo.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={geo} alt=''/>
        <img src={miz} alt=''/>
        <img src={oko} alt=''/>
        <img src={memo} alt=''/>
      </div>
      <button className='btn dark-btn'>See more here <FontAwesomeIcon icon={faArrowRight} style={{ color: '#fff' }} /></button>
    </div>
  )
}

export default Campus
