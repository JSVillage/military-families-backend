import React from 'react';
import {render} from 'react-dom';
import {Router, hashHistory} from 'react-router';
import routes from './routes';
require('!style!css!sass!./stylesheets/main.scss');




render(<Router history={hashHistory} routes={routes} />, document.getElementById('app'));
