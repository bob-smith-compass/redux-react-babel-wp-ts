import React from 'react';
import ReadtDOM from 'react-dom';

import App from './App';

/**
 * Simplest React
 */
const name = 'David Shams'
const element = <h1>Hello {name}</h1>

ReadtDOM.render(<App />, root);
ReadtDOM.render(element, moot);