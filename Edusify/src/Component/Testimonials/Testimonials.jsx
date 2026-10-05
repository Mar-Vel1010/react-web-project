import { useEffect, useRef, useState } from 'react'
import './Testimonials.css'
import { LuArrowLeft, LuArrowRight } from 'react-icons/lu'
import user_1 from '../../assets/user_1.jpg'
import user_3 from '../../assets/user_3.jpg'
import user_4 from '../../assets/user_4.jpg'
import user_5 from '../../assets/user_5.jpg'

const Testimonials = () => {
  const sliderRef = useRef(null)
  const [translateX, setTranslateX] = useState(0)

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${translateX}%)`
    }
  }, [translateX])

  const slideForward = () => {
    setTranslateX((prev) => Math.max(prev - 25, -50))
  }

  const slideBackward = () => {
    setTranslateX((prev) => Math.min(prev + 25, 0))
  }

  return (
    <div className='testimonials'>
      <LuArrowRight className='next-btn' onClick={slideForward} />
      <LuArrowLeft className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={sliderRef}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt='' />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusify, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusify was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
              <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt='' />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusify, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusify was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
              <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt='' />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusify, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusify was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
              <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_5} alt='' />
                        <div>
                            <h3>William Jackson</h3>
                            <span>Edusify, USA</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusify was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
