import './Test.css'
import React, { useState } from 'react'
import AllBooking from '../BookingPage/BookingPage'

function Test() {
    const [Bookings, setBookings] = useState(false);
    const CloseBooking = () => setBookings(false);
  
  return (
    <div className='main line' id='quiz'>
        <fieldset>
            <legend><h2>Quick Daily Selftest</h2></legend>
            <form className='lst-form'>
                
                <div className="input-fld-design">
                        <label for="type">How are you feeling today?</label>
                    <div >
                        <input type="radio"  name="mood_type" value="happy" className='flex' required />
                        <label for="mood">Happy</label>
                    </div>
                    <div >
                        <input type="radio"  name="mood_type" className='flex'  />
                        <label for="mood">Sad</label>
                    </div>
                    <div >
                        <input type="radio"  name="mood_type" className='flex'  />
                        <label for="mood">Anxious</label>
                    </div>
                    <div >
                        <input type="radio" name="mood_type" className='flex'/>
                        <label for="mood">Angry</label>
                    </div>
                    <div >
                        <input type="radio"  name="mood_type" className='flex'  />
                        <label for="mood">Neutral</label>
                    </div>
                </div>
                <div className="input-fld-design">
                        <label for="type">Did you experience any stressful events today?</label>
                    <div >
                        <input type="radio"  name="stress_level" value="small" className='flex' required />
                        <label for="stress_level">Yes</label>
                    </div>
                    <div >
                        <input type="radio"  name="stress_level" className='flex' value="medium" />
                        <label for="stress_level">No</label>
                    </div>
                </div>
                <div className="input-fld-design">
                    <div >
                        <label for="sleep">How well did you sleep last night?</label>
                        <select id="sleep" name="sleep" className='flex design' required>
                            <option value="sleep-option-1" >Very well</option>
                            <option value="sleep-option-2" >OK</option>
                            <option value="sleep-option-3" >Poorly</option>
                            <option value="sleep-option-4" >Not at all</option>
                        </select>
                    </div>
                    <div className="input-fld-design">
                        <label for="type">How would you describe your appetite today?</label>
                    <div >
                        <input type="radio"  name="apptite_level" value="small" className='flex' required />
                        <label for="apptite_level">Normal</label>
                    </div>
                    <div >
                        <input type="radio"  name="apptite_level" className='flex' value="medium" />
                        <label for="apptite_level">Increased</label>
                    </div>
                    <div >
                        <input type="radio"  name="apptite_level" className='flex' value="medium" />
                        <label for="apptite_level">Decreased</label>
                    </div>
                    <div >
                        <input type="radio"  name="apptite_level" className='flex' value="medium" />
                        <label for="apptite_level">No appitite</label>
                    </div>
                </div>
                <div className="input-fld-design">
                        <label for="type">Did you experience any difficulty managing your emotions today?</label>
                    <div >
                        <input type="radio"  name="stress_level" value="small" className='flex' required />
                        <label for="stress_level">Yes</label>
                    </div>
                    <div >
                        <input type="radio"  name="stress_level" className='flex' value="medium" />
                        <label for="stress_level">No</label>
                    </div>
                </div>
                </div>
                
                <button type='button' onClick={() => setBookings(true)}>Diagnose</button>
                {Bookings && <AllBooking CloseBooking={CloseBooking}/>}
                
            </form>
        </fieldset>
    </div>
  )
}

export default Test