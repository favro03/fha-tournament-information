// CollapsibleRule.js

import React, { useState } from 'react';

const CollapsibleRule = ({ category, rules }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapsible-rule-container">
      <h3 onClick={() => setIsOpen(!isOpen)} className="collapsible-header">
        {category} {isOpen ? '-' : '+'}
      </h3>
      {isOpen && (
        <ul className="collapsible-list">
          {rules.map((rule, index) => (
            <li key={index} className="collapsible-item">{rule}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CollapsibleRule;
