// import { useNavigate } from 'react-router-dom'

const Nav = () => {

    return (
        <nav>
            <div className="name-container">
                <a href="https://www.namsdevportfolio.com/">
                    <div className="namsdev">NamsDev</div>
                    <div>Portfolio</div>
                </a>
                {/* <div className='last-name'>Portfolio</div> */}
            </div>

            <div className='tab-container'>
                <a className='header-navigation-link' href='#about'>1. About</a>
                <a className='header-navigation-link' href='#experience'>2. Experience</a>
                <a className='header-navigation-link' href='#project'>3. Project</a>
                <a className='header-navigation-link' href='#contact'>4. Contact</a>
                <a className='nav-button' href="./myResume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          
        </nav>
    )
}

export default Nav