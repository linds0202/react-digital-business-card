import React from 'react'

export default function Info () {
    return (
        <div className='info'>
            <img src='./profile.png' />
            <h1>Lindsay Rainey</h1>
            <h3>Software Developer</h3>
            <span>www.LindsayRainey.com</span>
            <div className='btn-container'>
                <div className='info-btn email-btn'>
                    <img src='./Icon.png' className='email'/>
                    <h6>Email</h6>
                </div>
                <div className='info-btn linkedIn-btn'>
                    <img src='./linkedIn.png' className='linkedIn'/>
                    <h6>LinkedIn</h6>
                </div>
            </div>
        </div>    
    )
}