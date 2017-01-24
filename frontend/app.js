import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';

import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers'; //look for index.js, ndex has export this is good for many reducer


import Navbar from './nav'
import Home from './home'
import Gallery from './gallery'
import CreatePost from './create-post'
import SinglePost from './single-post'
import Contactus from './contactus'
import Help from './help'
import Login from './login'
import Footer from './footer'
import ManageAd from './manageAd'
import ManageAdSinglePost from './manageAdSinglePost'
import SideBar from './SideBar.js'
import AllAds from './AllAds.js'
import SearchByTitle from './search.js'
import SignUp from './signup.js';
import Logout from './Logout.js';
import NewestPost from './NewestPost.js';
import OldestPost from './oldestPost.js';
import FirstTenPost from './FirstTenPost.js';
import NewTags from './NewTags.js';

const store = createStore(reducers)

const App = React.createClass({
  render(){
    return(
      <div>
      <Navbar />
      {this.props.children} 
      <Footer />
      </div>
      )
  }
})

ReactDOM.render(
<Provider store={store}> 
  <Router history={browserHistory}>
    <Route path="/" component={App}>
	  <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/all-ads" component={AllAds} />
      <Route path="/login" component={Login} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/contact" component={Contactus} />
      <Route path="/help" component={Help} />
      <Route path="/posts/:postId" component={SinglePost}/>

      <Route path="/search" component={SearchByTitle}/>
      <Route path="/signup" component={SignUp}/>
      <Route path="/logout" component={SignUp}/>

      <Route path="/NewestPost" component={NewestPost}/>
      <Route path="/OldestPost" component={OldestPost}/>
      <Route path="/FirstTenPost" component={FirstTenPost}/>
      <Route path="/NewTags" component={NewTags}/>


      <Route path="/posts/manageSinglePost/:postId" component={ManageAdSinglePost}/>
      <Route path="/createPost" component={CreatePost} />
      <Route path="/manageAd" component={ManageAd} />
    </Route>
  </Router>
</Provider>,
  document.getElementById('root')
  )


