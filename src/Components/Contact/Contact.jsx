import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {
 const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "fb344116-82c5-4b45-9650-6fd660ef90d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert("Email sent Successfully")
     event.target.reset();
    }
  };
  return (
    <div id='contact' className='contact'>
     <div className="contact-title">
      <h1>Get in touch</h1>
      <img src={theme_pattern} alt="" />
     </div>
     <div className="contact-section">
      <div className="contact-left">
       <h1>Let's talk</h1>
       <p>I'm currently open to new opportunities and collaborations! Feel free to reach out—I'd love to chat and explore how we can work together.</p>
    <div className="contact-details">
     <div className="contact-detail">
          <img src={mail_icon} alt="" /> <p>ak676964@gmail.com</p>
     </div>
     <div className="contact-detail">
       <img src={call_icon} alt="" /> <p>7903983741</p>
     </div>
     <div className="contact-detail">
       <img src={location_icon} alt="" /> <p>Noida</p>
     </div>
     
    </div>
      </div>
      <form onSubmit={onSubmit} className="contact-right">
       <label htmlFor=""> Your Name</label>
       <input type="text" placeholder='Enter Your name' name='name' />
       <label htmlFor="">Your Email</label>
       <input type="text" placeholder='Enter Your email' name='email' />
       <label htmlFor="">Write your message here</label>
       <textarea name="message" rows='8' placeholder='Enter your message' id=""></textarea>
       <button type="submit" className="contact-submit"> Submit Now</button>
      </form>
     </div>
      
    </div>
  )
}

export default Contact
