// Rules.js

import React from 'react';
import CollapsibleRule from './CollapsibleRule';
import tournamentRules from './tournamentRules';

const Rules = () => {
  return (
    <div className='hero2'>
      <h1 className='rules-title'>Tournament Rules</h1>
      <div className="collapsible-card">
        {Object.entries(tournamentRules).map(([category, rules]) => (
          <CollapsibleRule key={category} category={category} rules={rules} />
        ))}
      </div>
    </div>
  );
};

export default Rules;
