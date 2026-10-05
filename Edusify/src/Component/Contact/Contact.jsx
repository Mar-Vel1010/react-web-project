import React from 'react'
import './Contact.css'
import { LuMail,  LuMapPin,  LuPhoneCall } from 'react-icons/lu'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {

const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "3886ac2a-b184-48bd-9b84-b4d6a3d227a5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <LuMail className='mail-icon'/></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
        <ul>
            <li><LuMail className='call'/>Contact@GreatStack.dev</li>
            <li><LuPhoneCall className='call'/>+1 123-456-7890</li>
            <li><LuMapPin className='call'/>77 Massachutes Ave, Cambridge<br/> MA 02139, United States</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your name' required/>
            <label>Phone Number</label>
            <input type='tel' name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your messages here</label>
            <textarea name='message' rows={6} placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit now <FontAwesomeIcon icon={faArrowRight} style={{ color: '#fff' }} /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
