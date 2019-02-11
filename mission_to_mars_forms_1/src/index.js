import React from 'react';
import ReactDOM from 'react-dom';
import Forms from './forms.js'
import './style.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Forms />, document.getElementById('root'));

serviceWorker.unregister();
