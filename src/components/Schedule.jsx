import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Default styling for react-calendar
import 'semantic-ui-css/semantic.min.css'; // Semantic UI styling

const Schedule = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isSubmitted, setIsSubmitted] = useState(false); // New state to track submission status
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Selected Date:', selectedDate);
    // navigate('/'); // No longer immediately navigate away
    setIsSubmitted(true); // Set submission status to true
  };

  // Function to navigate back to the home page
  const handleReturnHome = () => {
    navigate('/');
  };

  // If the form has been submitted, show the success message
  if (isSubmitted) {
    return (
      <div className="ui segment">
        <h2>Submit success! You will be contacted soon!</h2>
        <button className="ui button" onClick={handleReturnHome}>Return to Home Page</button>
      </div>
    );
  }

  // Form rendering if not submitted
  return (
    <div className="ui segment">
      <form onSubmit={handleSubmit} className="ui form">
        <div className="field">
          <label>Choose your date:</label>
          <div className="ui calendar" id="inline_calendar">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
            />
          </div>
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Schedule;
