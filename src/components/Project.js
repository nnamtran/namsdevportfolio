// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
const Project = () => {
    // let navigate = useNavigate()

    return (
        <div className='project-container' id="project">
            <div className='project'>
                <div className='numbered-heading'>Project</div>
                <div className='myproject'>
                    <h2>Personal projects I've built during my free times</h2>
                    <div className="project-outer-box">
                        <div className="project-box">
                            <div className="link-folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                <div className="github">
                                    <a href="https://github.com/nnamtran/CSIT998-source-code" target='_blank' rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#fff7e4ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>

                                    <a href="https://www.youtube.com/watch?v=-LhHiHEF1CQ" target='_blank' rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#fff7e4ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                                            <title>External Link</title>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h3>Waste Management mobile application</h3>
                            <div className="project-description">A mobile application allows users to scan for item barcode and instruct users which bin types the item belonged to, assisting with AI prediction if barcode is not available.</div>
                            <div className="technologies">
                                <ul className="long-list">
                                    <div className="listitem-1">
                                        <li>React Native</li>
                                        <li>ExpressJS</li>
                                        <li>NodeJS</li>
                                    </div>
                                    <div className="listitem-2">
                                        <li>Flask</li>
                                        <li>Tensorflow</li>
                                    </div>
                                </ul>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="link-folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                <div className="github">
                                    <a href="https://github.com/nnamtran/pandemica" target='_blank' rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#fff7e4ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>

                                    <a href="https://pandemicwebapp.herokuapp.com" target='_blank' rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#fff7e4ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                                            <title>External Link</title>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h3>Pandemic Web Application</h3>
                            <div className="project-description">A pandemic web application similar to ServiceNSW allowing users to register, QRCode check-in, registering for positive Covid result and contact tracing.</div>
                            <div className="technologies">
                                <ul>
                                    <li>ReactJS</li>
                                    <li>ExpressJS</li>
                                    <li>NodeJS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="project-box">
                            <div className="link-folder">
                                <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                                <div className="github">
                                    <a href="https://github.com/nnamtran/techblog-namsdevportfolio" target='_blank' rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#fff7e4ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github">
                                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                        </svg>
                                    </a>

                                    <a href="https://nnamtran.github.io/techblog-namsdevportfolio/" target='_blank' rel="noreferrer">
                                        <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#fff7e4ae" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-external-link">
                                            <title>External Link</title>
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <h3>My first blog</h3>
                            <div className="project-description">A simple blog developed using basic HTML&CSS</div>
                            <div className="technologies">
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project