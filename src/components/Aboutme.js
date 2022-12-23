// import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import uowlogo from '../images/logo/uow-logo.png'
import utslogo from '../images/logo/uts-logo.png'


const Aboutme = () => {
    // let navigate = useNavigate()
    const [toggleState, setToggleState] = useState(1);
    const [uni, setUni] = useState('uow')
    const toggleTab = (index) => {
        setToggleState(index);
    }
    const toggleUni = (uni) => {
        setUni(uni);
    }

    return (
        <div className='about-container' id='about'>
            <div className='about'>
                <div className='numbered-heading'>About Me</div>
                <div className='tab-container'>
                    <div className='bloc-tabs'>
                        <button
                            className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
                            onClick={() => toggleTab(1)}
                        >Background</button>
                        <button
                            className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
                            onClick={() => toggleTab(2)}
                        >Skills</button>
                        <button
                            className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
                            onClick={() => toggleTab(3)}
                        >Education</button>
                    </div>
                    <div className='content-tabs'>
                        <div
                            className={toggleState === 1 ? 'content active-content' : 'content'}
                        >
                            <ul>
                                <li>
                                Originally from Vietnam 🇻🇳, I have had the opportunity to study and live in Sydney, Australia 🇦🇺 for the past 9 years. During this time, I have developed a strong passion for web development and have worked hard to excel in my studies.
                                </li>
                                <li>
                                During my coursework, I also had the opportunity to participate in several hands-on projects, including the development of a <a href='#project'>web application</a> and the creation of a <a href='#project'>mobile application</a>. These experiences allowed me to apply my theoretical knowledge to practical problem-solving and gave me valuable real-world experience in software development.
                                </li>
                                <li>
                                I am a proactive and detail-oriented individual with excellent communication and problem-solving skills. I am confident that my combination of technical expertise and strong work ethic make me a valuable asset to any team. I am excited to bring my skills and experience to a new professional setting and make a meaningful contribution to any organization.
                                </li>
                            </ul>
                        </div>

                        <div
                            className={toggleState === 2 ? 'content active-content' : 'content'}
                        >
                            <h2>Here are a few technologies that I am proficient in:</h2>
                            <ul className='skills-list'>
                                <div className='skills-4'>
                                    <h3>1-2 years experience:</h3>
                                    <li>JavaScript</li>
                                    <li>ReactJS</li>
                                    <li>HTML/CSS</li>
                                    <li>NodeJS</li>
                                </div>
                                <div className='skills2nd'>
                                    <h3>1 year experience:</h3>
                                    <li>React Native</li>
                                    <li>ExpressJS</li>
                                    <li>Python</li>
                                    <li>MongoDB</li>
                                </div>
                            </ul>
                            <h2>Exposure with these technologies:</h2>
                            <ul className='skills-list'>
                                <div className='skills-4'>
                                    <li>SQL, Docker, .NET Core, Keras, Tensorflow, .Git, Cryptography algorithms (AES, DES,...)</li>
                                </div>
                                
                            </ul>
                        </div>

                        <div
                            className={toggleState === 3 ? 'content active-content' : 'content'}>
                            <div className='bloc-tabs'>
                                <button
                                    className={uni === 'uow' ? 'tabs active-tabs' : 'tabs'}
                                    onClick={() => toggleUni('uow')}
                                >University of Wollongong</button>
                                <button
                                    className={uni === 'uts' ? 'tabs active-tabs' : 'tabs'}
                                    onClick={() => toggleUni('uts')}
                                >University of Techology, Sydney
                                </button>
                            </div>
                            <div className='content-tabs'>
                                <div className={uni === 'uow' ? 'content active-content' : 'content'}>
                                    <img className="uni-logo" src={uowlogo} alt="UOW"/>

                                    <h2>Master of Computer Science (March 2021 - Nov 2022)</h2>
                                    <ul>
                                        <li className='uni-list'>Coursework: Software Testing, Service-Oriented Software Engineer, Modern Cryptography, Machine Learning</li>
                                    </ul>
                                </div>
                                <div className={uni === 'uts' ? 'content active-content' : 'content'}>
                                    <img className="uni-logo" src={utslogo} alt="UOW"/>
                                    <h2>Bachelor of Science in Information Techology (Jul 2016 - Nov 2020)</h2>
                                    <ul>
                                        <li className='uni-list'>Introduced to software development life cycle methodologies, including Agile, Waterfall and Iterative.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Aboutme