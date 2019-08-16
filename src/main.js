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
const element = user.lname === 'Shams' ? <h1>Hello {(user.fname)} - Architect</h1> : <h1>Hello {formatName(user)}</h1>


ReadtDOM.render(<App />, root);
ReadtDOM.render(element, moot);
/**
 * Components are like Simple functions
 */
function Hello(props) {
    return <h1>React {props.name}</h1>
}
ReadtDOM.render(<Hello name='David' />, simple);

class Welcome extends React.Component {
    render() {
        return <h2>Class</h2>
    }
}
ReadtDOM.render(<Welcome name='David' />, cclass);


function tick() {
    const element = (
      <div>
        <h1>React</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
    // highlight-next-line
    ReactDOM.render(element, document.getElementById('joot'));
  }
  
  setInterval(tick, 1000);
  
