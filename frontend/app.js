import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import Navbar from './nav'
import Home from './home'
import Gallery from './gallery'
import CreatePost from './create-post'
import SinglePost from './single-post'
// import Playlists from './Playlists'
// import NewPlaylist from './NewPlaylist'
// import Playlist from './Playlist'
// import AddSongToPlaylist from './AddSongToPlaylist'

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
  <Router history={browserHistory}>
    <Route path="/" component={App}>
	  <IndexRoute component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/posts/:postId" component={SinglePost} />
      <Route path="gallery" component={Gallery} />
      <Route path="/createPost" component={CreatePost} />
    </Route>
  </Router>,
  document.getElementById('root')
  )


//Note: make a new component single-post, have a link, pass props 
