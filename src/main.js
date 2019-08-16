import React from 'react';
import ReadtDOM from 'react-dom';

import App from './App';

/**
 * Simplest React
 */
// const name = 'David Shams'

function formatName(user) {
    return `${user.fname} ${user.lname}`
}
let user = {
    fname: 'David',
    lname: 'Shams',
}
const element = <h1>Hello {formatName(user)}</h1>


ReadtDOM.render(<App />, root);
ReadtDOM.render(element, moot);