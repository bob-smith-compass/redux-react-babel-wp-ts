import React from 'react'

export default function App() {
    return (
        <div>
            {['React', 'Webpack', 'Babel'].map( (e, i) => <div key={i}>{e}</div> )}
        </div>
    )
}
