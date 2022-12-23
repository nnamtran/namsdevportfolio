// import { useNavigate } from 'react-router-dom'
import landingpage from '../images/landingpage.webp'

const Landingpage = () => {
    // let navigate = useNavigate()
    const handleWelcome = () => {
        console.log('Welcome');
    }

    return (
        <div className='landingpage-container'>
            <div className='landingpage' >
                <div className='introduction-container'>
                    <div className='introduction-1'>Hi, my name is</div>
                    <div className='introduction-2'>Nam Tran</div>
                    <div className='introduction-3'>I enjoy building things for the web.</div>
                    <ul className='description'>
                        <li>
                            As a front-end developer with a strong background in web development, I have a passion for creating engaging and intuitive user experiences.
                        </li>
                        <li>
                            With experience in a variety of front-end technologies, including HTML, CSS, and JavaScript, I have the skills and knowledge necessary to build responsive and interactive web applications.
                        </li>  
                    </ul>
                    <div className='welcome-button' onClick={handleWelcome}>Let's take a tour!</div>
                </div>
                <div className='image-container'>
                    <img className="landingpage-image" src={landingpage} alt="Landing Page"/>
                </div>
            </div>
        </div>
    )
}

export default Landingpage