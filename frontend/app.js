//in the directory type: python server.py

import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'; //look for index.js, ndex has export this is good for many reducer


import Navbar from './nav';
import SubmitWriting from './SubmitWriting';
// import Footer from './footer';
import MainHomePage from './MainHomePage';
// import Class from './Class';
import Settings from './Settings';
import Search from './Search';
import StudentDashBoard from './StudentDashBoard';

const store = createStore(reducers)

const App = React.createClass({
  render(){
    return(
      <div>
      <Navbar />
      {this.props.children} 
  
      </div>
      )
  }
})

ReactDOM.render(
<Provider store={store}> 
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    <IndexRoute component={MainHomePage} />
      <Route path="/submit-writing" component={SubmitWriting} />
      <Route path="/settings" component={Settings} />
      <Route path="/feedback" component={Search} />
      <Route path="/student-dashBoard" component={StudentDashBoard} />

    </Route>
  </Router>
</Provider>,
  document.getElementById('root')
  )



