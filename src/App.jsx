import React, { useState } from 'react';
import './App.css';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
      </div>
      <div
        className={`accordion-content ${isOpen ? 'active' : ''}`}
        style={{ maxHeight: isOpen ? '100%' : '0px' }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="accordion">
      <AccordionItem title="Section 1" content="This is the content of section 1." />
      <AccordionItem title="Section 2" content="This is the content of section 2." />
      <AccordionItem title="Section 3" content="This is the content of section 3." />
    </div>
  );
}

export default App;
