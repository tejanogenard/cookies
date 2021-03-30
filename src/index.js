import React from 'react';
import reactDom from 'react-dom';
import './styles/style.css'



const App = () => {
    return <h1>Hello to cookies</h1>
}

reactDom.render(<App/>, document.getElementById('root'))