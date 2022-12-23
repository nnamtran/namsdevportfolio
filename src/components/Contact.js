// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
const Contact = () => {
    // let navigate = useNavigate()

    return (
        <div className='contact-container' id="contact">
            <div className='contact'>
                <div className='numbered-heading'>Contact</div>
                <div className="contact-description">
                    <h2>Get In Touch</h2>
                    <div className="description">
                        I am currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I will get back to you shortly!
                    </div>
                    <a href="mailto:nnamtran116@gmail.com">Email me!</a>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact