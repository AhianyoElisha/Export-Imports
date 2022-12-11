import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css"
const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_93rball', 'template_a12lopf', form.current, 'Pv1f6ndKuUMpqE0QI')
        e.target.reset()
    };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Contact Us</h2>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Get In Touch</h3>

                <div className="contact__info">
                    <div className="contact__card">
                        <i className="ri-mail-send-line contact__card-icon"></i>
                        
                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">user@gmail.com</span>

                        <a href="" className="small spec button">Write Us {""}
                        <i className="ri-arrow-right-line contact__button-icon"></i></a>
                    </div>
                    <div className="contact__card">
                        <i className="ri-whatsapp-line contact__card-icon"></i>
                        
                        <h3 className="contact__card-title">WhatsApp</h3>
                        <span className="contact__card-data">999-888-777</span>

                        <a href="" className="small spec button">Write Us {""}
                        <i className="ri-arrow-right-line contact__button-icon"></i></a>
                    </div>
                </div>
            </div>
            <div className="contact__content">
                <h3 className="contact__title">Talk to us</h3>
                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label htmlFor="name" className="contact__form-tag">Name</label>
                        <input type="text" 
                            name="name" 
                            id="" 
                            className="contact__form-input"
                            placeholder="Insert your name"
                        />
                    </div>
                    <div className="contact__form-div">
                        <label htmlFor="email" className="contact__form-tag">Email</label>
                        <input type="email"
                         name="email" 
                         id="" 
                         className="contact__form-input"
                         placeholder="Insert your email"
                        />
                    </div>
                    <div className="contact__form-div contact__form-area">
                        <label htmlFor="message" className="contact__form-tag">Message</label>
                        <textarea
                         name="message" 
                         id="" 
                         cols="30" 
                         rows="10"
                         className="contact__form-input"
                         placeholder="Write your message"
                        >

                        </textarea>
                    </div>
                    <button className="button contact__button">
                        Send Message
                        <i className="ri-send-plane-line"></i>
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact