import React from 'react'
import './Element.css'
import test_img from '../Assets/test.png'
import selection_img from '../Assets/selection.png'
import anonymous_img from '../Assets/anonymous.png'
import matching_img from '../Assets/matching.png'

function Element() {
  return (
    <div className='elements'>
        <div className='element'>
            <div className="heading">
                <h2>Why Brmhana community ?</h2>
                <p>Discover the benefits of our mental solution.</p>
            </div>

            <div className="tags">
                <div className="tag1">
                    <h4><img src={test_img} alt='image' height='40px' width='40px'></img>Daily Mental Health Tests</h4>
                    <p><i>Brmhana</i> encourages daily engagement with mental wellness through personalized assessments and tracking tools, promoting self-awareness and early intervention.</p>
                </div>
                <div className="tag2">
                    <h4><img src={selection_img} alt='image' height='40px' width='40px' ></img>Tailored Therapist Selection</h4>
                    <p><i>Brmhana</i> uses a sophisticated matching algorithm that considers age, gender, religion, ethnicity, and expertise to connect users with therapists who best suit their needs.</p>
                </div>
                <div className="tag3">
                    <h4><img src={anonymous_img} alt='image' height='40px' width='40px'></img>Integrated Support Network</h4>
                    <p>In <i>Brmhana</i>, connects users with family and friends in times of need!</p>
                </div>
                <div className="tag4">
                    <h4><img src={matching_img} alt='image' height='40px' width='40px'></img>Personalized Therapist Matching</h4>
                    <p><i>Brmhana</i> offers a filter to find the most suitable psychologist based on <i>sex, age, socio-cultural background, ethnicity, areas of expertise, and experience with similar cases.</i></p>
                </div>
            </div>
        </div>
        {/* <div className="sub-element">
            <h2>How it Works!</h2>
            <div className="s-tags">
                <div className='s-tag1'>
                    <img className='register' src={download_img} height='40px' width='40px'></img>
                    <h4>Register Your Vehicle</h4>
                    <p>Sign up and register your vehicle details, including your Aadhar card for verification.</p>
                </div>
                <div className='s-tag2'></div>
                <div className='s-tag3'>
                    <img className='book' src={book_img} height='40px' width='40px'></img>
                    <h4>Book a Parking Spot</h4>
                    <p>Search for available parking spots near your location and book them for an hourly fee.</p>
                </div>
                <div className='s-tag4'></div>
                <div className='s-tag5'>
                    <img className='tick' src={tick_img} height='40px' width='40px'></img>
                    <h4>Pay and Park</h4>
                    <p>Pay for your parking spot after you've picked up your vehicle. Your payment is processed securely.</p>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Element