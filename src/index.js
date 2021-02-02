/*const element = document.createElement('h1');
element.innerText = 'Hello, Platzi';

const container = document.getElementById('app');

container.appendChild(element);*/



//const jsx = <h1>Hello, Platzi Badges from react</h1>; 
/*la posibilidad de poner un h1 directamente
sin usar createElement es gracias a jsx por lo cual siempre debemos usar react*/
//const element = React.createElement('a',{href: 'https://platzi.com/home'},'Ir a platzi');

//const name = 'Sara';
//const element = React.createElement('h1', {},`Hola, soy ${name}`);
//const jsx = <h1>Hola, soy {name}</h1>
/*const element = React.createElement(
    'div', 
    {},
    React.createElement('h1',{},'Hola'),
    React.createElement('p',{},'Soy sara')
);*/
/*
const element= (
    <div>
        <h1>Hola</h1>
        <p>Soy sara</p>
    </div>
);*/

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './global.css';
import App from './components/App';

const container = document.getElementById('app');

//ReactDOM.render(que queremos, donde lo queremos)
ReactDOM.render(<App/>, container);
