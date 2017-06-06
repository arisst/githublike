/**
 * @Author: Aris Setyono <aris>
 * @Date:   Monday, June 5th 2017, 6:57:10 pm
 * @Email:  ariez.id@gmail.com
 * @Filename: index.js
 * @Last modified by:   aris
 * @Last modified time: Monday, June 5th 2017, 7:39:03 pm
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
    <Router>
        <div>
            <Route path="*" component={App} />
        </div>
    </Router>),
  document.getElementById('root')
);


registerServiceWorker();
