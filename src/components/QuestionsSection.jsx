import React, { useState } from 'react';
import './QuestionsSection.css'; // Import your CSS file

function QuestionsSection() {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    if (selectedOptions.includes(optionValue)) {
      setSelectedOptions(selectedOptions.filter(item => item !== optionValue));
    } else {
      setSelectedOptions([...selectedOptions, optionValue]);
    }
  };

  return (
    <section className="questions-section">
      <h2 className="questions-heading">Do you also love</h2>
      <div className="question">
        <input type="checkbox" id="radio1" name="question" value="Web development" onChange={handleOptionChange} checked={selectedOptions.includes('Web development')} />
        <label htmlFor="radio1">Web development</label>
      </div>
      <div className="question">
        <input type="checkbox" id="radio2" name="question" value="Playing Guitar" onChange={handleOptionChange} checked={selectedOptions.includes('Playing Guitar')} />
        <label htmlFor="radio2">Playing Guitar</label>
      </div>
      <div className="question">
        <input type="checkbox" id="radio3" name="question" value="Working out" onChange={handleOptionChange} checked={selectedOptions.includes('Working out')} />
        <label htmlFor="radio3">Working out</label>
      </div>
      <h2 className="contact-heading">Then let's get in touch ;)</h2>
    </section>
  );
}

export default QuestionsSection;
