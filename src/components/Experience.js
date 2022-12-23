// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
const Experience = () => {
    // let navigate = useNavigate()

    return (
        <div className='experience-container' id="experience">
            <div className='experience'>
                <div className='numbered-heading'>Experience</div>
                <div className='jobs'>
                    <div className='job-container'>
                        <div className='job-description'>
                            <div className='year'>Jul 2018 - Aug 2020</div>
                            <h2>IT Technician <a href='https://ipsupply.com.au/' target='_blank' rel="noreferrer">IPSupply(Lidcombe)</a></h2>
                            <ul>
                                <li>Installed latest software and tested all networking equipments (including Cisco, Dell, Fortinet,...).</li>
                                <li>Prepared and installed 7-10 lab kits per day (for CCNA, CCNP exam) and received 100% positive feedback from customers on eBay site.</li>
                                <li>Troubleshoot product problems and suggesting new products for customers via calls.</li>
                                <li>Trained 5 members proficiently during the working period.</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='job-container'>
                        <div className='job-description'>
                            <div className='year'>Feb 2015 - Mar 2018</div>
                            <h2>Kitchenhand crew member <a href='https://mcdonalds.com.au/store/darling-quarter-nsw' target='_blank' rel="noreferrer">McDonald's(Haymarket)</a></h2>
                            <ul>
                                <li>Worked in a team of 5 members during peak weekend shifts, brought in ~$7,000 per night.</li>
                                <li>Prepared orders and served each customer in under 5 minutes.</li>
                                <li>Successfully trained at least 25 members during the working period.</li>
                            </ul>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Experience