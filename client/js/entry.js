// Libraries and Modules
import React from 'react'
import { render } from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, Redirect, IndexRoute } from 'react-router'
import { Provider } from 'react-redux';
import configureStore from './store/configureStore'
// Global Containers
import Main from './containers/Main'
import AboutUs from './containers/AboutUs'
import Reviews from './containers/Reviews'
import Contacts from './containers/Contacts'
import NotFound from './containers/NotFound'
// Containers
import Course from './containers/Course'
import Section from './containers/Section'

require('../css/app.scss');
require('../css/myOwn.scss');

const history=createBrowserHistory({ queryKey: false });
const store = configureStore();

function renderDevTools () {
    if (__DEBUG_NW__) {
        createDevToolsWindow(store);
        return null;
    } else {
        return (
            <DebugPanel top right bottom key='debugPanel'>
                <DevTools store={store} monitor={LogMonitor} visibleOnLoad={false} />
            </DebugPanel>
        );
    }
}

render(
    <Provider store={store}>
        <Router history={history}>
            <Redirect from="/" to="courses" />
            <Route path="/" component={Main}>
                <Route path="courses">
                    <Route path=":course" components={{sidebar: Course}}>
                      <Route path=":chapter/:section" components={{section: Section}} />
                    </Route>
                </Route>
                <Route path="about" components={{sidebar: AboutUs}} />
                <Route path="reviews" components={{sidebar: Reviews}} />
                <Route path="contacts" components={{sidebar: Contacts}} />
                <Route path="*" components={{sidebar: NotFound}} />
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
