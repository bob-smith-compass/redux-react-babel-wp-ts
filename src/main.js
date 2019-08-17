import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
/**
 * 
 * Redux
 */
// import  store  from './store/index';
// import store from './store/index';
import {store} from './store';


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


ReactDOM.render(<App />, root);
ReactDOM.render(element, moot);
/**
 * Components are like Simple functions
 */
function Hello(props) {
    return <h1>React {props.name}</h1>
}
ReactDOM.render(<Hello name='David' />, simple);

class Welcome extends React.Component {
    render() {
        return <h2>Class {this.props.name}</h2>
    }
}
ReactDOM.render(<Welcome name='David' />, cclass);

class Item extends React.Component {
    render() {
        return <div>{this.props.item}</div>
    }
}
class List extends React.Component {
    render() {
        return (
            <div>
                { this.props.times.map( (e) => {return(<div key={e}><Item item={e}></Item></div>)}) }
            </div>
        )
    }
}
ReactDOM.render(<List times={['David', 'John', 'Bob']} />, list);


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

