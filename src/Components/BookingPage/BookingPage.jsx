import './BookingPage.css'
import th_1 from '../Assets/th-1.jpg'
import th_2 from '../Assets/th-2.jpg'
import th_3 from '../Assets/th-4.jpg'
const AllBooking= ({CloseBooking}) => {
    return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-container">
        <div className="pop">
        <button className="button" onClick={CloseBooking}>close</button>
        <div className="parking-card">
                    <div class="container">
                <h1>Select a Therapist/Psychologist</h1>
                <div class="psychologist-list">
                    <div class="psychologist">
                        <img src={th_1} alt="Dr. Sarah Johnson" height='150px' width='150px'/>
                        <div class="psychologist-details">
                            <h3>Dr. Sarah Johnson</h3>
                            <p>Specialization: Couples Therapy, Family Counseling</p>
                            <p>Rating: ⭐⭐⭐⭐⭐ (4.9/5)</p>
                            <button onclick="bookAppointment('Dr. Sarah Johnson')" className='button'>Book Appointment</button>
                        </div>
                    </div>
                    <div class="psychologist">
                        <img src={th_3} alt="Dr. John Smith" height='150px' width='150px'/>
                        <div class="psychologist-details">
                            <h3>Dr. John Smith</h3>
                            <p>Specialization: Workplace Stress, Anxiety Therapy</p>
                            <p>Rating: ⭐⭐⭐⭐ (4.6/5)</p>
                            <button onclick="bookAppointment('Dr. John Smith')" className='button'>Book Appointment</button>
                        </div>
                    </div>
                    <div class="psychologist">
                        <img src={th_2} alt="Dr. Emily Clark" height='150px' width='150px'/>
                        <div class="psychologist-details">
                            <h3>Dr. Emily Clark</h3>
                            <p>Specialization: Teenagers, Behavioral Therapy</p>
                            <p>Rating: ⭐⭐⭐⭐⭐ (4.8/5)</p>
                            <button onclick="bookAppointment('Dr. Emily Clark')" className='button'>Book Appointment</button>
                        </div>
                    </div>
                    {/* <div class="psychologist">
                        <img src="david.jpg" alt="Dr. David Wilson" />
                        <div class="psychologist-details">
                            <h3>Dr. David Wilson</h3>
                            <p>Specialization: Humanistic Therapy, Self-Esteem Issues</p>
                            <p>Rating: ⭐⭐⭐⭐ (4.7/5)</p>
                            <button onclick="bookAppointment('Dr. David Wilson')">Book Appointment</button>
                        </div>
                    </div> */}
                </div>
            </div>

            </div>
        </div>
        </div>

    </>
    );
  };
  
  export default AllBooking