import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
require('./stylesheets/styles.css');
require('./stylesheets/coverr.css');


render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));
